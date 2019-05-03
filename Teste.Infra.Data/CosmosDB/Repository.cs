using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Teste.Common;
using Teste.Domain.Entities;
using Teste.Domain.Interfaces;

namespace Teste.Infrastructure.Data.CosmosDB
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : DbEntry
    {
        protected readonly DbContext<TEntity> _context = null;

        private string CollectionName { get; set; }

        public Repository(IOptions<AppSettings> settings, string collectionName)
        {
            CollectionName = collectionName;
            _context = new DbContext<TEntity>(settings, CollectionName);
        }

        public IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter)
        {
            try
            {
                return  _context.All.Find(filter).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Pagination<TEntity> GetAll(Expression<Func<TEntity, bool>> filter, int page = 0)
        {
            try
            {
                return GetAll(filter).Pagination(page);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Pagination<TEntity> GetAll(Expression<Func<TEntity, bool>> filter, Queries queries, int currentPage = 0, int pageSize = 100, string sort = null)
        {
            try
            {
                var pagination = new Pagination<TEntity>();
                var s = _context.All.Find(Builders<TEntity>.Filter.And(Queries(queries, filter)))
                        .Limit(pageSize)
                        .Sort(sort);

                if (currentPage > 0)
                    s.Skip((currentPage - 1) * pageSize);

                var totalDocuments = s.CountDocuments();
                var totalPages = (int)Math.Ceiling(totalDocuments / (double)pageSize);

                pagination.Page = new PageSetting
                {
                    CurrentPage = currentPage,
                    PageSize = pageSize,
                    TotalCount = Convert.ToInt32(totalDocuments),
                    TotalPages = totalPages,
                };

                pagination.Page.PreviousPage = pagination.Page.CurrentPage > 1;
                pagination.Page.NextPage = pagination.Page.CurrentPage < pagination.Page.TotalPages;

                var list = s.Project(x => x).ToList();
                pagination.DataList = list;

                return pagination;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public  IEnumerable<TEntity> GetAll()
        {
            try
            {
                return  _context.All.Find(_ => true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Pagination<TEntity> GetAll(int page = 0)
        {
            try
            {
                return GetAll().Pagination(page);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TEntity Get(Expression<Func<TEntity, bool>> filter)
        {
            try
            {
                TEntity model = _context.All.Find(filter).FirstOrDefault();
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public TEntity Save(TEntity model)
        {
            try
            {
                model.Enabled = true;
                model.Inserted = DateTime.Now;
                model.Deleted = false;
                _context.All.InsertOne(model);

                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async void Save(IEnumerable<TEntity> entities)
        {
            try
            {
                foreach (var entity in entities)
                {
                    entity.Enabled = true;
                    entity.Inserted = DateTime.Now;
                    entity.Deleted = false;
                }

                await _context.All.InsertManyAsync(entities);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async void BulkSave(IEnumerable<TEntity> entities)
        {
            var writeModel = new List<WriteModel<TEntity>>();
            entities.ToList().ForEach(x => writeModel.Add(new InsertOneModel<TEntity>(x)));
            await _context.All.BulkWriteAsync(writeModel);
        }

        public async Task<bool> Edit(Expression<Func<TEntity, bool>> filter, TEntity model, bool isUpsert = false)
        {
            try
            {
                var updateOptions = new UpdateOptions { IsUpsert = isUpsert };
                var actionResult = await _context.All.ReplaceOneAsync(filter, model, updateOptions);
                return actionResult.IsAcknowledged && actionResult.ModifiedCount > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> Remove(Expression<Func<TEntity, bool>> filter)
        {
            try
            {
                var model =  Get(filter);

                if (model != null)
                {
                    model.Deleted = true;
                    return await Edit(filter, model);
                }

                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private List<FilterDefinition<TEntity>> Queries(Queries query, Expression<Func<TEntity, bool>> filter)
        {
            var queries = new List<FilterDefinition<TEntity>>();
            var filters = new List<FilterDefinition<TEntity>>();

            queries.Add(Builders<TEntity>.Filter.Where(filter));

            if (query.SearchField != null && !string.IsNullOrEmpty(query.SearchValue))
            {
                var queryExpr = new BsonRegularExpression(new Regex(query.SearchValue, RegexOptions.IgnoreCase));
                query.SearchField.ToList().ForEach(x => filters.Add(Builders<TEntity>.Filter.Regex(x, queryExpr)));
                queries.Add(Builders<TEntity>.Filter.Or(filters));
            }

            return queries;
        }
    }
}

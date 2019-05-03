using Teste.Common;
using Teste.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Teste.Domain.Interfaces
{
    public interface IRepository<TEntity> where TEntity : DbEntry
    {
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter);       

        TEntity Get(Expression<Func<TEntity, bool>> filter);

        TEntity Save(TEntity entity);
        void Save(IEnumerable<TEntity> entities);
        void BulkSave(IEnumerable<TEntity> entities);

        Task<bool> Edit(Expression<Func<TEntity, bool>> filter, TEntity model, bool isUpsert = false);

        Task<bool> Remove(Expression<Func<TEntity, bool>> filter);


        // Pagination
        Pagination<TEntity> GetAll(int page = 0);
        Pagination<TEntity> GetAll(Expression<Func<TEntity, bool>> filter, int page = 0);
        Pagination<TEntity> GetAll(Expression<Func<TEntity, bool>> filter, Queries queries, int currentPage = 0, int pageSize = 100, string sort = null);
    }
}

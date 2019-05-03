using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using Teste.Common;
using Teste.Domain.Interfaces;
using Teste.Infrastructure.Data.CosmosDB;

namespace Teste.Infra.Data.CosmosDB.Repository
{
    public class ClientRepository : Repository<Domain.Entities.Client>, IClientRepository
    {
        private readonly IOptions<AppSettings> _settings;

        public ClientRepository(IOptions<AppSettings> settings) : base(settings, "Client")
        {
            _settings = settings;
        }

        public Domain.Entities.Client SaveClient(Domain.Entities.Client model)
        {
            try
            {
                return Save(model);
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro para salvar o client {ex.Message}");
            }
        }

        public IList<object> ListAll()
        {
            try
            {
                IList<object> list = _context.All.Find(x => !x.Deleted && x.Enabled)
                    .Project<object>(Builders<Domain.Entities.Client>
                    .Projection
                    .Exclude(f => f.Address)
                    .Exclude(f => f.SocialNetwork)
                    .Exclude(f => f.Telephones)
                    .Exclude(f => f.RG)
                    .Exclude(f => f.Inserted)
                    .Exclude(f => f.Deleted)
                    .Exclude(f => f.Enabled))
                    .SortByDescending(x => x.Inserted)
                    .Limit(500).ToList();

                return list;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao tentar recuperar as informações, {ex.Message}");
            }
        }

    }
}


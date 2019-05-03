using Microsoft.Extensions.Options;
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

        public bool SaveArchive(Domain.Entities.Client archiveUpload)
        {
            try
            {
                return Save(archiveUpload).Enabled;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro para salvar o arquivo {ex.Message}");
            }
        }

        public IList<Domain.Entities.Client> ListAll(int id, long? frontId)
        {
            try
            {
                IList<Domain.Entities.Client> list = null;

                //if (frontId.HasValue)
                //{
                //    list = _context.All.Find(x => !x.Deleted && x.Enabled && x.DataResponsibleId == id.ToString() && x.FrontId == frontId).Project<Domain.Entities.FileToProcess>(Builders<Domain.Entities.FileToProcess>.Projection.Exclude(f => f.DataVersion)
                //  .Exclude(e => e.Deleted).Exclude(o => o.DocumentJson).Exclude(p => p.DocumentXml).Exclude(r => r.Email).Exclude(w => w.Enabled).Exclude(a => a.FileDate)
                //  .Exclude(s => s.TrackInformation).Exclude(q => q.TradebillFile).Exclude(j => j.Warnings)).SortByDescending(x => x.Inserted).Limit(500).ToList();
                //}
                //else
                //{
                //    list = _context.All.Find(x => !x.Deleted && x.Enabled && x.DataResponsibleId == id.ToString()).Project<Domain.Entities.FileToProcess>(Builders<Domain.Entities.FileToProcess>.Projection.Exclude(f => f.DataVersion)
                //   .Exclude(e => e.Deleted).Exclude(o => o.DocumentJson).Exclude(p => p.DocumentXml).Exclude(r => r.Email).Exclude(w => w.Enabled).Exclude(a => a.FileDate)
                //   .Exclude(s => s.TrackInformation).Exclude(q => q.TradebillFile).Exclude(j => j.Warnings)).SortByDescending(x => x.Inserted).Limit(500).ToList();
                //}

                return list;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao listar Erros e warnings, {ex.Message}");
            }
        }

    }
}


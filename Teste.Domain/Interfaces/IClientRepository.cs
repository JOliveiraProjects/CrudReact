using System.Collections.Generic;

namespace Teste.Domain.Interfaces
{
    public interface IClientRepository : IRepository<Entities.Client>
    {
        bool SaveArchive(Entities.Client archiveUpload);
        IList<Entities.Client> ListAll(int id, long? frontId);
    }
}

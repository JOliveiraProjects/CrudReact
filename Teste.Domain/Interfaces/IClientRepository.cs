using System.Collections.Generic;

namespace Teste.Domain.Interfaces
{
    public interface IClientRepository : IRepository<Entities.Client>
    {
        Entities.Client SaveClient(Entities.Client model);
        IList<object> ListAll();
    }
}

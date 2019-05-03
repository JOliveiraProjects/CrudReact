using System.Collections.Generic;

namespace Teste.Application.Interfaces
{
    public interface IClientApplication
    {
        IList<Models.ClientModel> ListAll(int userId, long? frontId);
    }
}

using System;
using System.Collections.Generic;

namespace Teste.Application.Interfaces
{
    public interface IClientApplication
    {
        IList<object> ListAll();

        Models.ClientModel GetById(Guid id);

        Models.ClientModel Save(Models.ClientModel model);
    }
}

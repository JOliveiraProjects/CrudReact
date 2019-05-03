using Microsoft.Extensions.DependencyInjection;
using Teste.Application;
using Teste.Application.Interfaces;
using Teste.Domain.Interfaces;
using Teste.Infra.Data.CosmosDB.Repository;

namespace Teste.Infra.CrossCutting.Ioc
{
    public class NativeDependencyInjection
    {
        public void Configure(IServiceCollection services)
        {
            //Applications
            services.AddTransient<IClientApplication, ClientApplication>();

            //Repositories
            services.AddTransient<IClientRepository, ClientRepository>();
        }
    }
}

using System.Collections.Generic;
using System.Linq;
using Teste.Application.Interfaces;
using Teste.Application.Models;
using Teste.Domain.Entities;
using Teste.Domain.Interfaces;

namespace Teste.Application
{
    public class ClientApplication : IClientApplication
    {
        private readonly IClientRepository _clientRepository;

        public ClientApplication(IClientRepository fileToProcessRepository)
        {
            _clientRepository = fileToProcessRepository;
        }

        public IList<ClientModel> ListAll(int userId, long? frontId)
        {
            var client = _clientRepository.ListAll(userId, frontId).ToList();

            var clientMap = AutoMapper.Mapper.Map<IList<Client>, IList<ClientModel>>(client);
            return clientMap;
        }
    }
}

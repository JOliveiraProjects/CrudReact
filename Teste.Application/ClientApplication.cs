using System;
using System.Collections.Generic;
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

        public ClientModel GetById(Guid id)
        {
            ClientModel resultModel = null;
            Client client = _clientRepository.Get(x => x.Id == id);

            if (client == null) return resultModel;

            resultModel = AutoMapper.Mapper.Map<Client, ClientModel>(client);
            return resultModel;
        }

        public IList<object> ListAll()
        {
            IList<object> result = _clientRepository.ListAll();
              return result;
        }

        public ClientModel Save(ClientModel model)
        {
            Client clientMap = AutoMapper.Mapper.Map<ClientModel, Client>(model);

            Client modelExist = _clientRepository.Get(x => x.Name.Equals(model.Name) && x.CPF.Equals(model.CPF));

            if (modelExist != null)
                throw new Exception("Cliente já cadastrado.");

            Client resultModel = _clientRepository.SaveClient(clientMap);
            ClientModel clientModelMap = AutoMapper.Mapper.Map<Client, ClientModel>(resultModel);
            return clientModelMap;
        }
    }
}

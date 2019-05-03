using System;
using System.Collections.Generic;

namespace Teste.Application.Models
{
    public class ClientModel
    {
        public string Id { get; set; }

        public ClientModel()
        {
            Address = new List<AddressModel>();
            SocialNetwork = new List<SocialNetworkModel>();
            Telephones = new List<TelephonesModel>();
        }

        public string Name { get; set; }

        public string CPF { get; set; }

        public string RG { get; set; }

        public DateTime BirthDate { get; set; }

        public List<TelephonesModel> Telephones { get; set; }

        public List<AddressModel> Address { get; set; }

        public List<SocialNetworkModel> SocialNetwork { get; set; }
    }
}

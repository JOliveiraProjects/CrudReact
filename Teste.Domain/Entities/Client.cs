using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Teste.Domain.Entities
{
    public class Client : DbEntry
    {
        public Client()
        {
            Deleted = false;
            Enabled = true;
            Inserted = DateTime.UtcNow;
            Address = new List<Address>();
            SocialNetwork = new List<SocialNetwork>();
            Telephones = new List<Telephones>();
        }

        [Required]
        [BsonElement("name")]
        public string Name { get; set; }

        [Required]
        [BsonElement("cpf")]
        public string CPF { get; set; }

        [Required]
        [BsonElement("rg")]
        public string RG { get; set; }

        [Required]
        [BsonElement("birth_date")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime BirthDate { get; set; }

        [BsonElement("telephones")]
        public List<Telephones> Telephones { get; set; }

        [BsonElement("address")]
        public List<Address> Address { get; set; }

        [BsonElement("social_network")]
        public List<SocialNetwork> SocialNetwork { get; set; }
    }
}

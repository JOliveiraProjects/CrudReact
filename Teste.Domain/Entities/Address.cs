using MongoDB.Bson.Serialization.Attributes;

namespace Teste.Domain.Entities
{
    public class Address
    {
        [BsonElement("address_type")]
        public string AddressType { get; set; }

        [BsonElement("thoroughfare")]
        public string Thoroughfare { get; set; }

        [BsonElement("number")]
        public string Number { get; set; }

        [BsonElement("complement")]
        public string Complement { get; set; }

        [BsonElement("neighborhood")]
        public string Neighborhood { get; set; }

        [BsonElement("city")]
        public string City { get; set; }

        [BsonElement("state")]
        public string State { get; set; }

        [BsonElement("postcode")]
        public string Postcode { get; set; }
    }
}

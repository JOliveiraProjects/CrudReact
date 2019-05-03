using MongoDB.Bson.Serialization.Attributes;

namespace Teste.Domain.Entities
{
    public class Telephones
    {
        [BsonElement("telephone_type")]
        public string TelephoneType { get; set; }

        [BsonElement("number")]
        public string Number { get; set; }

        [BsonElement("ddd")]
        public string DDD { get; set; }

    }
}

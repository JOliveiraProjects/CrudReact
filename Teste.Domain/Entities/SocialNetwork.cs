using MongoDB.Bson.Serialization.Attributes;

namespace Teste.Domain.Entities
{
    public class SocialNetwork
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("url")]
        public string Url { get; set; }

    }
}

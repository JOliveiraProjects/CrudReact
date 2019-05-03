using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;

namespace Teste.Domain.Entities
{
    public class DbEntry : IDbEntry
    {
        [BsonElement("id")]
        [BsonId(IdGenerator = typeof(GuidGenerator))]
        [BsonRepresentation(BsonType.String)]
        [BsonIgnoreIfDefault]
        public Guid Id { get; set; }

        [BsonElement("deleted")]
        public bool Deleted { get; set; }
        [BsonElement("enabled")]
        public bool Enabled { get; set; }

        [BsonElement("inserted")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime Inserted { get; set; }
       
    }
}

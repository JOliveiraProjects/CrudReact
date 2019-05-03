using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Teste.Domain
{
    public interface IDbEntry
    {
        Guid Id { get; set; }
        bool Deleted { get; set; }
        bool Enabled { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        DateTime Inserted { get; set; }
    }
}

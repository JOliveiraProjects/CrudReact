using Teste.Common;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Teste.Infrastructure.Data.CosmosDB
{
    public class DbContext<TEntity> where TEntity : class
    {
        private readonly IMongoDatabase _database = null;
        public string _collectionName;

        public DbContext(IOptions<AppSettings> settings, string collectionName)
        {
            var client = new MongoClient(settings.Value.MongoConnectionString);
            if (client != null)
                _database = client.GetDatabase(settings.Value.MongoDatabase);

            _collectionName = collectionName;
        }

        public IMongoCollection<TEntity> All
        {
            get
            {
                var collection = _database.GetCollection<TEntity>(_collectionName);
                if (collection == null)
                {
                    _database.CreateCollection(_collectionName);
                    collection = _database.GetCollection<TEntity>(_collectionName);
                }

                return collection;
            }
        }
    }
}

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace WebApplication5.NewFolder
{
    [BsonIgnoreExtraElements]
    public class Orders
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("locationName")]
        public string locationName { get; set; }

        [BsonElement("deliveryStatus")]
        public string deliveryStatus { get; set; }

        [BsonElement("customerName")]
        public string customerName { get; set; }

    }
}

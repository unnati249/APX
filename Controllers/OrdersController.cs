using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;
using WebApplication5.NewFolder;

namespace WebApplication4.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ControllerBase
    {

        private IMongoCollection<Orders> _ordersCollection;
        public OrdersController(IMongoClient client)
        {
            var database = client.GetDatabase("Courses");
            _ordersCollection = database.GetCollection<Orders>("orders");
        }

        [HttpGet]
        public IEnumerable<Orders> Get()
        {

            return _ordersCollection.Find(_ => true).ToList();
        }

        [HttpGet("{id:length(24)}")]
        public ActionResult<Orders> Get(string id)
        {
            
            var getOrder = _ordersCollection.AsQueryable<Orders>().SingleOrDefault(x => x.Id == id);
            return getOrder;

        }


        [HttpPost]
        [Route("create")]
        public Orders Post([FromBody] Orders order)
        {
            _ordersCollection.InsertOne(order);
            return order;
        }


        [HttpPost("update/{id:length(24)}")]
        public IActionResult Update(string id, Orders order)
        {

            var filter = Builders<Orders>.Filter.Eq("_id", ObjectId.Parse(id));
            var update = Builders<Orders>.Update
                .Set("customerName", order.customerName)
                .Set("locationName", order.locationName)
                .Set("deliveryStatus", order.deliveryStatus);
            var result = _ordersCollection.UpdateOne(filter, update);
            return NoContent();
        }


        [HttpDelete]
        [Route("delete/{id}")]
        public void Delete(string id)
        {
            _ordersCollection.DeleteOne(order => order.Id == id);
            return;
        }
    }
}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoundstoothifyController : ControllerBase
    {
        // GET: api/Houndstoothify
        [HttpGet]
        public List<Song> Get()
        {
            List<Song> mySongs = new List<Song>();
            Song song = new Song(){songID = 1, title = "Roar", artist = "KP", dateAdded = "May", favorited = true, deleted = false};
            // Songs song2 = new Songs(){ID = 1, title = "Roar", artist = "KP", dateAdded = "May", favorited = true, deleted = false};
            // Songs song3 = new Songs(){ID = 1, title = "Roar", artist = "KP", dateAdded = "May", favorited = true, deleted = false};
       
            mySongs.Add(song);
            // mySongs.Add(song2);
            // mySongs.Add(song3);
            return mySongs;
        }

        // GET: api/Houndstoothify/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Houndstoothify
        [HttpPost]
        public void Post([FromBody] Song mySongs)
        {
            System.Console.WriteLine("hello");
            System.Console.WriteLine(mySongs.title);
        }

        // PUT: api/Houndstoothify/5
        [HttpPut("{id}")] //UPDATE
        public void Put(int id, [FromBody] Song mySongs)
        {
            System.Console.WriteLine("inside the put");
            System.Console.WriteLine(id);
            System.Console.WriteLine(mySongs.title);
        }

        // DELETE: api/Houndstoothify/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            System.Console.WriteLine("inside the delete");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.models;
using api.interfaces;
using api.database;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoundstoothifyController : ControllerBase
    {

        //Create: POST
        //Read: GET
        //Update: PUT
        //Delete: DELETE

        // GET: api/Houndstoothify
        [HttpGet]
        public List<Song> Get()
        {
            List<Song> mySongs = new List<Song>();
            
            mySongs.Add(new Song(){songId = 0, title = "Roar", artist ="Kp", dateAdded= DateTime.Now, favorited= false, deleted = false});
            mySongs.Add(new Song(){songId = 1, title = "Crazy", artist ="Man", dateAdded= DateTime.Now, favorited= false, deleted = false});
            mySongs.Add(new Song(){songId = 2, title = "Grenade", artist ="Bruno Mars", dateAdded= DateTime.Now, favorited= false, deleted = false});

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
        [EnableCors("OpenPolicy")]
        public void Post([FromBody] Song song)
        {
            System.Console.WriteLine("inside the post");
            System.Console.WriteLine(song);
            ICreateSong mySongs = new CreateSong();
            mySongs.AddSong(song);
        }

        // PUT: api/Houndstoothify/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Song song)
        {
            System.Console.WriteLine("inside the put");
            System.Console.WriteLine(song);
            IEditSong mySongs = new EditSong();
            mySongs.EditASong(song);

        }

        // DELETE: api/Houndstoothify/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

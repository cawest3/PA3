using MySql.Data.MySqlClient;
using api.database;
using api.interfaces;
using api.models;

namespace api.interfaces
{
    public interface IEditSong
    {
        public void EditASong(Song song);
         
    }
}

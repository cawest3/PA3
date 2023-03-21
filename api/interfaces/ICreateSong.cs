using MySql.Data.MySqlClient;
using api.database;
using api.interfaces;
using api.models;

namespace api.interfaces
{
    public interface ICreateSong
    {
         public void AddSong(Song mySongs);
         public void CreateSongTable(Song mySongs);
    }
}
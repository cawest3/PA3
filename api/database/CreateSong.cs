using MySql.Data.MySqlClient;
using api.database;
using api.interfaces;
using api.models;

namespace api.database
{
    public class CreateSong : ICreateSong
    {
        public void CreateSongTable(Song mySongs)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"CREATE TABLE songs(songID INTEGER PRIMARY KEY AUTO_INCREMENT, title TEXT, author TEXT, dateAdded DATE, favorited TEXT, deleted TEXT)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.ExecuteNonQuery();
        }
        public void AddSong(Song mySongs)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO songs(songID, title, artist) VALUES (@songID, @title, @artist)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@songID", mySongs.songID);
            cmd.Parameters.AddWithValue("@title", mySongs.title);
            cmd.Parameters.AddWithValue("@artist", mySongs.artist);
            cmd.Parameters.AddWithValue("@dateAdded", mySongs.dateAdded);
            cmd.Parameters.AddWithValue("@favorited", mySongs.favorited);
            cmd.Parameters.AddWithValue("@deleted", mySongs.deleted);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        
    }
}
        
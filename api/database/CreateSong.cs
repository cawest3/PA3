using MySql.Data.MySqlClient;
using api.models;
using api.interfaces;

namespace api.database
{
    public class CreateSong : ICreateSong
    {

        public static void CreateSongTable()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"CREATE TABLE songs(songId INTEGER PRIMARY KEY AUTO_INCREMENT, title TEXT, author TEXT, dateAdded DATE,favorited TEXT, deleted TEXT)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.ExecuteNonQuery();
        }
        public void AddSong(Song mySongs)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO songs(songId, title, artist, dateAdded, favorited, deleted) VALUES(@songId, @title, @artist, @dateAdded, @favorited, @deleted)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@songId", mySongs.songId);
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
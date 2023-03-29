using MySql.Data.MySqlClient;
using api.models;
using api.interfaces;


namespace api.database
{
    public class EditSong : IEditSong
    {
        public void EditASong(Song mySongs)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE songs SET songId=@songID, title=@title, artist=@artist, dateAdded=@dateAdded, favorited=@favorited, deleted=@deleted) WHERE songId=@songID";

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
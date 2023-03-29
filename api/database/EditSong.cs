using MySql.Data.MySqlClient;
using api.models;
using api.interfaces;


namespace api.database
{
    public class EditSong : IEditSong
    {
        public void EditASong(Song song)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE songs SET songId=@songID, title=@title, artist=@artist, dateAdded=@dateAdded, favorited=@favorited, deleted=@deleted) WHERE songId=@songID";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@songId", song.songId);
            cmd.Parameters.AddWithValue("@title", song.title);
            cmd.Parameters.AddWithValue("@artist", song.artist);
            cmd.Parameters.AddWithValue("@dateAdded", song.dateAdded);
            cmd.Parameters.AddWithValue("@favorited", song.favorited);
            cmd.Parameters.AddWithValue("@deleted", song.deleted);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        
    }
}
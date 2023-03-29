namespace api
{
    public class ConnectionString
    {
        public string cs {get; set;}
        public ConnectionString()
        {
            string server = "r4wkv4apxn9btls2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "k8ega1hwiav2smzj";
            string port = "3306";
            string userName = "nkhgc00dt4gaf1ja";
            string password = "kzwlxhdqmxo9hbvj";

            cs = $@"server = {server}; user={userName}; database={database}; port={port}; password={password}";
        }
    }
}
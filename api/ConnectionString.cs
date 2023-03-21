namespace api
{
    public class ConnectionString
    {
    
        public string cs {get; set;}
        public ConnectionString()
        {
            string server = "r4wkv4apxn9btls2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "zf1blfksurxfnk5e";
            string port = "3306";
            string userName = "k2rtkax7qcd87b1w";
            string password = "was3c7fgtdstbk5g";

            cs = $@"server = {server}; user={userName}; database={database}; port={port}; password={password}";
        }
    }
}
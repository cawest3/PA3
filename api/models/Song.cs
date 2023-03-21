namespace api.models
{
    public class Song
    {
        public int songID {get;set;}
        public string title {get;set;}
        public string artist {get;set;}
        public string dateAdded {get;set;}
        public bool favorited {get;set;} = false;
        public bool deleted {get;set;} = false;

        public override string ToString()
        {
            return $"{title} is by {artist}"; 
        }

    }
}
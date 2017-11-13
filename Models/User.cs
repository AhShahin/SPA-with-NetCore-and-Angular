using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Precima.Models
{
    public class User
    {
        public int Id { get; set; }
        
        public string Name {get; set;}

        public ICollection<ShoppinList> ShoppinListItems { get; set; }

        public User() {
            ShoppinListItems = new Collection<ShoppinList>(); 
        }
    }
}
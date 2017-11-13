using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Precima.Models
{
    public class Item
    {
         public int Id { get; set; }
        
        public string Title { get; set; }

         public int Quantity { get; set; }

        public string ImageUrl { get; set; }

        public string Description { get; set; }
    }
}
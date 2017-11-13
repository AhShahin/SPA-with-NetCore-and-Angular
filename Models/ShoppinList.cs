using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Precima.Models
{
    public class ShoppinList
    {
        public int Id { get; set; }

        public int Unit { get; set; }

        public int UserId { get; set; }

        public string Notes { get; set; }

        public bool IsCompleted { get; set; }

        public Item Item {get; set; }

        public int ItemId { get; set; }
        

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace api.Models
{
    public class City
    {
        public int Id { get; set; }
       
        public string Name { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public int LastUpdatedBy { get; set; }
        public DateTime LastUpdatedOn { get; set; }
       
    }
}
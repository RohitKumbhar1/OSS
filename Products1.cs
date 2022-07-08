using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TFLWebApp.Models
{
    //POCO class
    //Entity Class
    //Data Annotations defined metadata for class or field, or property
    [Table("Products1")]

    public class Products1
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        public string TITLE { get; set; }
        public string DESCRIPTION { get; set; }

        [Range(minimum:50,maximum:2000)]
        public int QUANTITY { get; set; }

        [Required]
        public int PRICE { get; set; }

    }
}
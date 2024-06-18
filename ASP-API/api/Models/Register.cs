using api.Resources;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Register
    {
        public string Id { get; set; }
        [Required(ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "RegisterName")]
        [MaxLength(30, ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "MaxLength")]
        [MinLength(3, ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "MinLength")]
        public string Username { get; set; }

        [Required(ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "RegisterEmail")]
        [EmailAddress(ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "RegisterEmailError")]
        public string Email { get; set; }
        public string? ImageUser { get; set; }

        [Required(ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "RegisterPasswored")]
        [MaxLength(30, ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "MaxLength")]
        [MinLength(3, ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "MinLength")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "RegisterConfirmPasswored")]
        [Compare("Password", ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "RegisterConfirmPassworedُError")]
        [MaxLength(30, ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "MaxLength")]
        [MinLength(3, ErrorMessageResourceType = typeof(ResourceDataEn), ErrorMessageResourceName = "MinLength")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

    }
}

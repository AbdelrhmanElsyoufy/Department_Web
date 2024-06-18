using Microsoft.AspNetCore.Identity;

namespace api.Dtos
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }
        public string? ImageUser { get; set; }
    }
}

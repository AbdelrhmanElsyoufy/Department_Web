using api.Models;

namespace api.Data.Repos
{
    public interface IAccountRepositery
    {
        Task<AuthModel> RegisterAsync(Register model);
        Task<AuthModel> GetTokenAsync(TokenRequest model);
    }
}

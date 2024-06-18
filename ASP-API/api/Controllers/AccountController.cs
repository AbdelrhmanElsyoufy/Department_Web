using api.Data.Repos;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepositery repositery;

        public AccountController(IAccountRepositery repositery)
        {
            this.repositery = repositery;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] Register model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await repositery.RegisterAsync(model);

            if (!result.IsAuthenticated)
                return BadRequest(result.Message);

            return Ok(result);
        }

        [HttpPost("token")]
        public async Task<IActionResult> GetTokenAsync([FromBody] TokenRequest model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await repositery.GetTokenAsync(model);

            if (!result.IsAuthenticated)
                return BadRequest(result.Message);

            return Ok(result);
        }
    }
}

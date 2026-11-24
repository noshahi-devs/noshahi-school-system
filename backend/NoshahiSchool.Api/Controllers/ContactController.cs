using Microsoft.AspNetCore.Mvc;
using NoshahiSchool.Api.Models;

namespace NoshahiSchool.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class ContactController : ControllerBase
{
    [HttpPost]
    public ActionResult<object> Submit([FromBody] ContactRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) ||
            string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Message))
        {
            return BadRequest(new { message = "Please provide your name, email and message." });
        }

        return Ok(new
        {
            reference = $"MSG-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..6].ToUpperInvariant()}",
            message = "Thank you for contacting Noshahi School System."
        });
    }
}

using Microsoft.AspNetCore.Mvc;
using NoshahiSchool.Api.Models;

namespace NoshahiSchool.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AdmissionsController : ControllerBase
{
    [HttpPost]
    public ActionResult<object> Submit([FromBody] AdmissionRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.StudentName) ||
            string.IsNullOrWhiteSpace(request.ParentName) ||
            string.IsNullOrWhiteSpace(request.Phone) ||
            string.IsNullOrWhiteSpace(request.Grade))
        {
            return BadRequest(new { message = "Please complete all required admission fields." });
        }

        return Ok(new
        {
            reference = $"NSS-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..6].ToUpperInvariant()}",
            message = "Your admission inquiry has been received. Our admissions team will contact you soon."
        });
    }
}

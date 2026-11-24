namespace NoshahiSchool.Api.Models;

public sealed class AdmissionRequest
{
    public string StudentName { get; set; } = string.Empty;
    public string ParentName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string? Email { get; set; }
    public string Grade { get; set; } = string.Empty;
    public string? DateOfBirth { get; set; }
}

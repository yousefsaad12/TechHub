

using System.ComponentModel.DataAnnotations;

namespace backend.Application.DTOs.Requests
{
    public class ChapterRequestDto
    {
        [Required(ErrorMessage = "BookId is required")]
        public int BookId { get; set; }

        [Required(ErrorMessage = "Chapter Number is required")]
        public int ChapterNumber { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; } = null!;

        [Required(ErrorMessage = "Summary is required")]
        public string Summary { get; set; } = null!;

        public int? EstimatedReadTime { get; set; }

        public string? VideoUrl { get; set; }

        public DateTime? CreatedAt { get; set; }


    }
}
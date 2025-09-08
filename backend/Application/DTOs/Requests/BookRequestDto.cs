

using System.ComponentModel.DataAnnotations;

namespace backend.Application.DTOs
{
    public class BookRequestDto
    {

        [Required]
        [MaxLength(255)]
        public string Title { get; set; } = null!;

        [Required]
        [MaxLength(255)]

        public string Author { get; set; } = null!;

        [MaxLength(1000)]

        public string? Description { get; set; }

        [MaxLength(100)]
        public string? Category { get; set; }

        public IFormFile? CoverImage { get; set; }

        
        public DateTime? CreatedAt { get; set; }

        [Required]
        public int? ChapterCount { get; set; }
    }
}
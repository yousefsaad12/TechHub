

namespace backend.Application.DTOs
{
    public class BookDetailDto
    {
        public int Id { get; set; }

        public string Title { get; set; } = null!;

        public string Author { get; set; } = null!;

        public string? Description { get; set; }

        public string? Category { get; set; }

        public string? CoverImageUrl { get; set; }

        public DateTime? CreatedAt { get; set; }

        public int? ChapterCount { get; set; }
    }
}
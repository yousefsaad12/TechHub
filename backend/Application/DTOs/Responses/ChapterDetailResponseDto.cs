
namespace backend.Application.DTOs.Responses
{
    public class ChapterDetailResponseDto
    {
        public int Id { get; set; }

        public int? BookId { get; set; }

        public int ChapterNumber { get; set; }

        public string Title { get; set; } = null!;

        public string Summary { get; set; } = null!;

        public int? EstimatedReadTime { get; set; }

        public string? VideoUrl { get; set; }

        public DateTime? CreatedAt { get; set; }
    }
}
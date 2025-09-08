

namespace backend.Application.DTOs.Responses
{
    public class ChapterResponseDto
    {
        public int Id { get; set; }

        public int? BookId { get; set; }

        public int ChapterNumber { get; set; }

        public string ?Title { get; set; }

        public int? EstimatedReadTime { get; set; }

        public DateTime? CreatedAt { get; set; }
    }
}
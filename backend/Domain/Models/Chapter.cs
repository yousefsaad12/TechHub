
namespace backend.Models;

public partial class Chapter
{
    public int Id { get; set; }

    public int? BookId { get; set; }

    public int ChapterNumber { get; set; }

    public string Title { get; set; } = null!;

    public string Summary { get; set; } = null!;

    public int? EstimatedReadTime { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual Book? Book { get; set; }
}

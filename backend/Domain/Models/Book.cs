using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Book
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string Author { get; set; } = null!;

    public string? Description { get; set; }

    public string? Category { get; set; }

    public string? CoverImageUrl { get; set; }

    public DateTime? CreatedAt { get; set; }

    public int? ChapterCount { get; set; }

    public virtual ICollection<Chapter> Chapters { get; set; } = new List<Chapter>();
}

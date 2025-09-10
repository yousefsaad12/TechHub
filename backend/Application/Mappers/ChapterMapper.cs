using backend.Models;
using backend.Application.DTOs.Requests;
using backend.Application.DTOs.Responses;

namespace backend.Application.Mappers
{
    static public class ChapterMapper
    {
        static public Chapter toChapter(this ChapterRequestDto chapterRequestDto)
        {
            try
            {
                if (chapterRequestDto == null)
                {
                    throw new ArgumentNullException(nameof(chapterRequestDto), "Chapter request DTO cannot be null");
                }

                if (chapterRequestDto.BookId <= 0)
                {
                    throw new ArgumentException("BookId must be greater than 0", nameof(chapterRequestDto));
                }

                if (chapterRequestDto.ChapterNumber <= 0)
                {
                    throw new ArgumentException("Chapter number must be greater than 0", nameof(chapterRequestDto));
                }

                if (string.IsNullOrWhiteSpace(chapterRequestDto.Title))
                {
                    throw new ArgumentException("Chapter title cannot be null or empty", nameof(chapterRequestDto));
                }

                if (chapterRequestDto.EstimatedReadTime < 0)
                {
                    throw new ArgumentException("Estimated read time cannot be negative", nameof(chapterRequestDto));
                }

                return new Chapter
                {
                    BookId = chapterRequestDto.BookId,
                    ChapterNumber = chapterRequestDto.ChapterNumber,
                    Title = chapterRequestDto.Title!,
                    EstimatedReadTime = chapterRequestDto.EstimatedReadTime,
                    Summary = chapterRequestDto.Summary,
                    VideoUrl = chapterRequestDto.VideoUrl,
                    CreatedAt = DateTime.Now,
                };
            }
            catch (ArgumentNullException)
            {
                throw;
            }
            catch (ArgumentException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to map ChapterRequestDto to Chapter", ex);
            }
        }

        static public ChapterResponseDto ToChapterResponseDto(this Chapter chapter)
        {
            try
            {
                if (chapter == null)
                {
                    throw new ArgumentNullException(nameof(chapter), "Chapter cannot be null");
                }

                return new ChapterResponseDto()
                {
                    Id = chapter.Id,
                    BookId = chapter.BookId,
                    ChapterNumber = chapter.ChapterNumber,
                    Title = chapter.Title,
                    EstimatedReadTime = chapter.EstimatedReadTime,
                    VideoUrl = chapter.VideoUrl,
                    CreatedAt = chapter.CreatedAt,
                };
            }
            catch (ArgumentNullException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to map Chapter to ChapterResponseDto", ex);
            }
        }

        static public ChapterDetailResponseDto ToChapterDetailResponseDto(this Chapter chapter)
        {
            try
            {
                if (chapter == null)
                {
                    throw new ArgumentNullException(nameof(chapter), "Chapter cannot be null");
                }

                return new ChapterDetailResponseDto()
                {
                    Id = chapter.Id,
                    BookId = chapter.BookId,
                    ChapterNumber = chapter.ChapterNumber,
                    Summary = chapter.Summary,
                    Title = chapter.Title,
                    EstimatedReadTime = chapter.EstimatedReadTime,
                    VideoUrl = chapter.VideoUrl,
                    CreatedAt = chapter.CreatedAt,
                };
            }
            catch (ArgumentNullException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to map Chapter to ChapterDetailResponseDto", ex);
            }
        }
    }
}
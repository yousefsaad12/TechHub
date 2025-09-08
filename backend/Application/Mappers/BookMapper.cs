using backend.Application.DTOs;
using backend.Models;

namespace backend.Application.Mappers
{
    public static class BookMapper
    {
        public static BookDetailDto ToBookDetailDto(this Book book)
        {
            try
            {
                if (book == null)
                {
                    throw new ArgumentNullException(nameof(book), "Book cannot be null");
                }

                return new BookDetailDto
                {
                    Id = book.Id,
                    Title = book.Title,
                    Author = book.Author,
                    Description = book.Description,
                    Category = book.Category,
                    CoverImageUrl = book.CoverImageUrl,
                    CreatedAt = book.CreatedAt,
                    ChapterCount = book.ChapterCount
                };
            }
            catch (ArgumentNullException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to map Book to BookDetailDto", ex);
            }
        }
        
        public static Book ToBook(this BookRequestDto bookRequestDto, string? coverImageUrl)
        {
            try
            {
                if (bookRequestDto == null)
                {
                    throw new ArgumentNullException(nameof(bookRequestDto), "Book request DTO cannot be null");
                }

                if (string.IsNullOrWhiteSpace(bookRequestDto.Title))
                {
                    throw new ArgumentException("Book title cannot be null or empty", nameof(bookRequestDto));
                }

                if (string.IsNullOrWhiteSpace(bookRequestDto.Author))
                {
                    throw new ArgumentException("Book author cannot be null or empty", nameof(bookRequestDto));
                }

                if (string.IsNullOrWhiteSpace(bookRequestDto.Category))
                {
                    throw new ArgumentException("Book category cannot be null or empty", nameof(bookRequestDto));
                }

                if (bookRequestDto.ChapterCount < 0)
                {
                    throw new ArgumentException("Chapter count cannot be negative", nameof(bookRequestDto));
                }

                return new Book
                {
                    Title = bookRequestDto.Title,
                    Author = bookRequestDto.Author,
                    Description = bookRequestDto.Description,
                    Category = bookRequestDto.Category,
                    CoverImageUrl = coverImageUrl,
                    CreatedAt = bookRequestDto.CreatedAt ?? DateTime.Now,
                    ChapterCount = bookRequestDto.ChapterCount
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
                throw new InvalidOperationException("Failed to map BookRequestDto to Book", ex);
            }
        }
    }
}
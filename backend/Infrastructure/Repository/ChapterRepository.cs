using backend.Application.DTOs.Responses;
using backend.Domain.Interfaces;
using backend.Infrastructure.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Infrastructure.Repository
{
    public class ChapterRepository : IChapterRepository
    {
        private readonly AppDbContext _appContext;

        public ChapterRepository(AppDbContext appContext)
        {
            _appContext = appContext;
          
        }

        public async Task<Chapter> addChapter(Chapter chapter)
        {
            try
            {
                if (chapter == null)
                {
                    throw new ArgumentNullException(nameof(chapter), "Chapter cannot be null");
                }

                await _appContext.AddAsync(chapter);
                await _appContext.SaveChangesAsync();

                return chapter;
            }
            catch (DbUpdateException ex)
            {
                throw new InvalidOperationException("Failed to add chapter due to database error", ex);
            }
            catch (Exception ex)
            {
                throw ex.InnerException ?? ex;
            }
        }

        public async Task<string> DeleteChapter(Chapter chapter)
        {
            try
            {
               _appContext.Chapters.Remove(chapter);
               await _appContext.SaveChangesAsync();
               return "Chapter deleted successfully";
            }
            catch (DbUpdateException ex)
            {
                throw new InvalidOperationException("Failed to delete chapter due to database error", ex);
            }
            catch (Exception ex)
            {
                throw ex.InnerException ?? ex;
            }
        }

     

        public async Task<IEnumerable<Chapter>> getAllChapters()
        {
            try
            {
                var chapters = await _appContext.Chapters.ToListAsync();
                return chapters;
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException("Failed to retrieve chapters due to database connection error", ex);
            }
            catch (Exception ex)
            {
                throw ex.InnerException ?? ex;;
            }
        }

        public async Task<Chapter?> GetChapterById(int chapterId)
        {
            return await _appContext.Chapters.FirstOrDefaultAsync(ch => ch.Id == chapterId);
        }

        public async Task<List<ChapterResponseDto>> getChaptersByBookId(int bookId)
        {
            try
            {
                if (bookId <= 0)
                {
                    throw new ArgumentException("BookId must be greater than 0", nameof(bookId));
                }

                var chapters = await _appContext.Chapters
                                        .Where(ch => ch.BookId == bookId)
                                        .AsNoTracking()
                                        .OrderBy(ch => ch.ChapterNumber)
                                        .Select(ch => new ChapterResponseDto
                                        {
                                            Id = ch.Id,
                                            BookId = ch.BookId,
                                            ChapterNumber = ch.ChapterNumber,
                                            Title = ch.Title,
                                            EstimatedReadTime = ch.EstimatedReadTime,
                                            CreatedAt = ch.CreatedAt
                                        })
                                        .ToListAsync();

                return chapters;
            }
            catch (ArgumentException)
            {
                throw; 
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException($"Failed to retrieve chapters for book {bookId} due to database connection error", ex);
            }
            catch (Exception ex)
            {
                throw ex.InnerException ?? ex;;
            }
        }

        public async Task<IEnumerable<Chapter>> getChaptersDetailByBookId(int bookId)
        {
            try
            {
                if (bookId <= 0)
                {
                    throw new ArgumentException("BookId must be greater than 0", nameof(bookId));
                }

                var chapters = await _appContext.Chapters
                                        .Where(ch => ch.BookId == bookId)
                                        .AsNoTracking()
                                        .OrderBy(ch => ch.ChapterNumber)
                                        .ToListAsync();

                return chapters;
            }
            catch (ArgumentException)
            {
                throw; // Re-throw argument exceptions as they are
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException($"Failed to retrieve detailed chapters for book {bookId} due to database connection error", ex);
            }
            catch (Exception ex)
            {
                throw ex.InnerException ?? ex;;
            }
        }
    }
}
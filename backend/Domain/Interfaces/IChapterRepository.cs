
using backend.Application.DTOs.Responses;
using backend.Models;

namespace backend.Domain.Interfaces
{
    public interface IChapterRepository
    {
        public Task<Chapter> addChapter(Chapter chapter);
        public Task<IEnumerable<Chapter>> getAllChapters();

        public Task<Chapter?> GetChapterById(int chapter);
        public Task<List<ChapterResponseDto>> getChaptersByBookId(int bookId);
        public Task<Chapter> GetChapterByBookIdAndChapterNumber(int bookId, int chapterNumber);

        public Task<string> DeleteChapter(Chapter chapter);
    }
}
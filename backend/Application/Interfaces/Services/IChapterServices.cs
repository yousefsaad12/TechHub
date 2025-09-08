

using backend.Application.DTOs.Requests;
using backend.Application.DTOs.Responses;
using backend.Models;


namespace backend.Application.Interfaces.Services
{
    public interface IChapterServices
    {
        public Task<ChapterResponseDto> addChapter(ChapterRequestDto chapter);

        public Task<IEnumerable<ChapterDetailResponseDto>> getAllChapters();
        public Task<IEnumerable<ChapterDetailResponseDto>> getChaptersDetailByBookId(int bookId);
        
        public Task<ChapterDetailResponseDto?> GetChapterById(int chapterId);

        public Task<string> DeleteChapter(int chapterId);
        public Task<IEnumerable<ChapterResponseDto>> getChaptersByBookId(int bookId);
    }

    
}
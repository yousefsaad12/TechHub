using backend.Application.DTOs.Requests;
using backend.Application.DTOs.Responses;
using backend.Application.Interfaces;
using backend.Application.Interfaces.Services;
using backend.Application.Mappers;
using backend.Domain.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace backend.Application.Services
{
    public class ChapterServices : IChapterServices
    {
        private readonly IBookRepository _bookRepository;
        private readonly IChapterRepository _chapterRepository;

        public ChapterServices(IBookRepository bookRepository, IChapterRepository chapterRepository)
        {
            _bookRepository = bookRepository;
            _chapterRepository = chapterRepository;
        }

        public async Task<ChapterResponseDto> addChapter(ChapterRequestDto chapterRequestDto)
        {
            try
            {
                if (chapterRequestDto == null)
                {
                    throw new ArgumentNullException(nameof(chapterRequestDto), "Chapter request cannot be null");
                }

                if (!await _bookRepository.isBookExists(chapterRequestDto.BookId))
                {
                    throw new InvalidOperationException("Book does not exist");
                }

                Chapter chapter = chapterRequestDto.toChapter();
                await _chapterRepository.addChapter(chapter);

                return chapter.ToChapterResponseDto();
            }
            catch (ArgumentNullException)
            {
                throw;
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to add chapter", ex);
            }
        }

        public async Task<string> DeleteChapter(int chapterId)
        {
            try
            {
                Chapter? chapter = await _chapterRepository.GetChapterById(chapterId);

                if (chapter is null) return "Chapter not found";
                
                return await _chapterRepository.DeleteChapter(chapter);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public async Task<IEnumerable<ChapterDetailResponseDto>> getAllChapters()
        {
            try
            {
                IEnumerable<Chapter> chapters = await _chapterRepository.getAllChapters();
                return chapters.Select(ch => ch.ToChapterDetailResponseDto());
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException("Failed to retrieve all chapters", ex);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An unexpected error occurred while retrieving chapters", ex);
            }
        }

        public async Task<ChapterDetailResponseDto?> GetChapterById(int chapterId)
        {   
            return await _chapterRepository.GetChapterById(chapterId) is Chapter chapter ? chapter.ToChapterDetailResponseDto() : null;
        }

        public async Task<IEnumerable<ChapterResponseDto>> getChaptersByBookId(int bookId)
        {
            try
            {
                if (bookId <= 0)
                {
                    throw new ArgumentException("BookId must be greater than 0", nameof(bookId));
                }

                if (!await _bookRepository.isBookExists(bookId))
                {
                    throw new InvalidOperationException($"Book with ID {bookId} was not found");
                }

                return await _chapterRepository.getChaptersByBookId(bookId);
            }
            catch (ArgumentException)
            {
                throw;
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to retrieve chapters", ex);
            }
        }

        public async Task<IEnumerable<ChapterDetailResponseDto>> getChaptersDetailByBookId(int bookId)
        {
            try
            {
                if (bookId <= 0)
                {
                    throw new ArgumentException("BookId must be greater than 0", nameof(bookId));
                }

                if (!await _bookRepository.isBookExists(bookId))
                {
                    throw new InvalidOperationException("Book does not exist");
                }

                IEnumerable<Chapter> chapters = await _chapterRepository.getChaptersDetailByBookId(bookId);
                return chapters.Select(ch => ch.ToChapterDetailResponseDto());
            }
            catch (ArgumentException)
            {
                throw;
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to retrieve detailed chapters", ex);
            }
        }
    }
}

using backend.Application.DTOs;

namespace backend.Application.Interfaces
{
    public interface IBookServices
    {
        Task<IEnumerable<BookDetailDto>> getAllBooks();
        Task<BookDetailDto?> getBookDetailsById(int id);
        Task<BookDetailDto> addBook(BookRequestDto bookRequestDto);

        Task<bool> isBookExists(int bookId);
    }
}
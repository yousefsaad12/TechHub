
using backend.Models;


namespace backend.Domain.Interfaces
{
    public interface IBookRepository
    {


        Task<IEnumerable<Book>> getAllBooks();
        Task<Book?> getBookDetailsById(int id);
        Task<Book> addBook(Book book);
         Task<bool> isBookExists(int bookId);


    }
}
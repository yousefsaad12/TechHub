

using backend.Domain.Interfaces;
using backend.Infrastructure.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Infrastructure.Repository
{
    public class BookRepository : IBookRepository
    {
        private readonly AppDbContext _appContext;
        public BookRepository(AppDbContext appContext)
        {
            _appContext = appContext;
        }
        public async Task<Book> addBook(Book book)
        {
            await _appContext.AddAsync(book);
            await _appContext.SaveChangesAsync();

            return book;
        }

        public async Task<IEnumerable<Book>> getAllBooks()
        {
            return await _appContext.Books.ToListAsync();   
        }

        public Task<Book?> getBookDetailsById(int id)
        {
            return _appContext.Books.FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<bool> isBookExists(int bookId)
        {
            return await _appContext.Books.AnyAsync(b => b.Id == bookId);

        }
    }
}
using backend.Application.DTOs;
using backend.Application.Interfaces;
using backend.Application.Mappers;
using backend.Domain.Interfaces;
using backend.Models;

namespace backend.Application.Services
{
    public class BookServices : IBookServices
    {
        private readonly IBookRepository _bookRepository;
        private readonly IImageService _imageService;

        public BookServices(IBookRepository bookRepository, IImageService imageService)
        {
            _bookRepository = bookRepository;
            _imageService = imageService;
        }

        public async Task<BookDetailDto> addBook(BookRequestDto bookRequestDto)
        {
            try
            {
                if (bookRequestDto == null)
                {
                    throw new ArgumentNullException(nameof(bookRequestDto), "Book request cannot be null");
                }

                string? imageUrl = null;

                if (bookRequestDto.CoverImage != null)
                {
                    imageUrl = await _imageService.UploadImageAsync(bookRequestDto.CoverImage);
                }

                Book book = bookRequestDto.ToBook(imageUrl);
                Book savedBook = await _bookRepository.addBook(book);

                return savedBook.ToBookDetailDto();
            }
            catch (ArgumentNullException)
            {
                throw;
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException("Failed to upload image or save book", ex);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to add book", ex);
            }
        }

        public async Task<IEnumerable<BookDetailDto>> getAllBooks()
        {
            try
            {
                IEnumerable<Book> books = await _bookRepository.getAllBooks();
                IEnumerable<BookDetailDto> booksDetailDto = books.Select(b => b.ToBookDetailDto());

                return booksDetailDto;
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException("Failed to retrieve all books", ex);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An unexpected error occurred while retrieving books", ex);
            }
        }

        public async Task<BookDetailDto?> getBookDetailsById(int id)
        {
            try
            {
                if (id <= 0)
                {
                    throw new ArgumentException("Book ID must be greater than 0", nameof(id));
                }

                Book? book = await _bookRepository.getBookDetailsById(id);

                if (book is null) 
                    return null;

                return book.ToBookDetailDto();
            }
            catch (ArgumentException)
            {
                throw;
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException($"Failed to retrieve book with ID {id}", ex);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"An unexpected error occurred while retrieving book with ID {id}", ex);
            }
        }

        public async Task<bool> isBookExists(int bookId)
        {
            try
            {
                if (bookId <= 0)
                {
                    throw new ArgumentException("Book ID must be greater than 0", nameof(bookId));
                }

                return await _bookRepository.isBookExists(bookId);
            }
            catch (ArgumentException)
            {
                throw;
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException($"Failed to check if book with ID {bookId} exists", ex);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"An unexpected error occurred while checking book existence for ID {bookId}", ex);
            }
        }
    }
}
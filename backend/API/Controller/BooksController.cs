using backend.Application.DTOs;
using backend.Application.DTOs.Requests;
using backend.Application.DTOs.Responses;
using backend.Application.Interfaces;
using backend.Application.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.API.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookServices _bookServices;
        private readonly IChapterServices _chapterServices;
        public BooksController(IBookServices bookServices, IChapterServices chapterServices)
        {
            _bookServices = bookServices;
            _chapterServices = chapterServices;
        }

        [HttpGet]
        
        public async Task<IActionResult> GetAllBooks()
        {
            try
            {
                var books = await _bookServices.getAllBooks();
                return Ok(books);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while retrieving books.", error = ex.Message });
            }
        }

        [HttpPost]
        
        public async Task<IActionResult> CreateBook(BookRequestDto bookRequestDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                BookDetailDto bookAdd = await _bookServices.addBook(bookRequestDto);
                return Ok(bookAdd);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the book.", error = ex.Message });
            }
        }

        [HttpPost("chapter")]
        public async Task<IActionResult> CreateChapter([FromBody] ChapterRequestDto chapterRequestDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                ChapterResponseDto chapterResponseDto = await _chapterServices.addChapter(chapterRequestDto);
                return Ok(chapterResponseDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while adding the chapter.", error = ex.Message });
            }
        }

        [HttpGet]
        [Route("{bookId}/chapters")]
        public async Task<IActionResult> GetChaptersByBookId(int bookId)
        {
            try
            {
                var chapters = await _chapterServices.getChaptersByBookId(bookId);
                return Ok(chapters);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while retrieving chapters for BookId {bookId}.", error = ex.Message });
            }
        }

        [HttpGet]
        [Route("{bookId}/chapter/{chapterNumber}")]
        public async Task<IActionResult> GetChaptersDetailByBookId(int bookId, int chapterNumber)
        {
            try
            {
                var chaptersDetail = await _chapterServices.GetChapterByBookIdAndChapterNumber(bookId, chapterNumber);
                return Ok(chaptersDetail);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while retrieving chapter details for BookId {bookId}.", error = ex.Message });
            }
        }
    }
}


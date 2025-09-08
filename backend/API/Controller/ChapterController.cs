using backend.Application.DTOs.Requests;
using backend.Application.DTOs.Responses;
using backend.Application.Interfaces.Services;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.API.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChapterController : ControllerBase
    {
        private readonly IChapterServices _chapterServices;

        public ChapterController(IChapterServices chapterServices)
        {
            _chapterServices = chapterServices;
        }



        [HttpGet]
        public async Task<IActionResult> GetAllChapters()
        {
            try
            {
                IEnumerable<ChapterDetailResponseDto> chapters = await _chapterServices.getAllChapters();
                return Ok(chapters);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while retrieving all chapters.", error = ex.Message });
            }
        }

        [HttpGet]
        [Route("{chapterId}")]
        public async Task<IActionResult> GetChapter( int chapterId)
        {
            try
            {
                ChapterDetailResponseDto? chapterDetailResponseDto = await _chapterServices.GetChapterById(chapterId);
                if (chapterDetailResponseDto == null)
                {
                    return NotFound(new { message = $"Chapter with ID {chapterId} not found.", StatusCode = "404" });
                }

                return Ok(chapterDetailResponseDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while retrieving chapters by bookId.", error = ex.Message });
            }
        }

        [HttpDelete]
        [Route("{chapterId}")]

        public async Task<IActionResult> DeleteChapter( int chapterId)
        {
            try
            {
                string result = await _chapterServices.DeleteChapter(chapterId);
                if (result == "Chapter not found")
                {
                    return NotFound(new { message = $"Chapter with ID {chapterId} not found.", StatusCode = "404" });
                }
                return Ok(new { message = result });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while deleting the chapter.", error = ex.Message });
            }
        }

    }
}

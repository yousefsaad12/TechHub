

namespace backend.Application.Interfaces
{
    public interface IImageService
    {
        public Task<string> UploadImageAsync(IFormFile file);
    }
}
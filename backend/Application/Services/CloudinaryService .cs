using backend.Application.Interfaces;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace backend.Application.Services
{
    public class CloudinaryService : IImageService
    {
        private readonly Cloudinary _cloudinary;

        public CloudinaryService()
        {
            try
            {
                var cloudinaryUrl = Environment.GetEnvironmentVariable("CLOUDINARY_URL");
                
                if (string.IsNullOrEmpty(cloudinaryUrl))
                {
                    throw new InvalidOperationException("CLOUDINARY_URL environment variable is not configured");
                }

                _cloudinary = new Cloudinary(cloudinaryUrl);
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to initialize Cloudinary service", ex);
            }
        }

        public async Task<string> UploadImageAsync(IFormFile file)
        {
            try
            {
                if (file == null)
                {
                    throw new ArgumentNullException(nameof(file), "File cannot be null");
                }

                if (file.Length == 0)
                {
                    throw new ArgumentException("File cannot be empty", nameof(file));
                }

                if (string.IsNullOrEmpty(file.FileName))
                {
                    throw new ArgumentException("File name cannot be null or empty", nameof(file));
                }

                using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    Folder = "books"
                };

                var uploadResult = await _cloudinary.UploadAsync(uploadParams);

                if (uploadResult == null)
                {
                    throw new InvalidOperationException("Upload result is null");
                }

                if (uploadResult.Error != null)
                {
                    throw new InvalidOperationException($"Cloudinary upload failed: {uploadResult.Error.Message}");
                }

                if (uploadResult.SecureUrl == null)
                {
                    throw new InvalidOperationException("Upload succeeded but secure URL is null");
                }

                return uploadResult.SecureUrl.AbsoluteUri;
            }
            catch (ArgumentNullException)
            {
                throw;
            }
            catch (ArgumentException)
            {
                throw;
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            catch (UnauthorizedAccessException ex)
            {
                throw new InvalidOperationException("Cloudinary authentication failed. Check your credentials.", ex);
            }
            catch (TimeoutException ex)
            {
                throw new InvalidOperationException("Image upload timed out. Please try again.", ex);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An unexpected error occurred during image upload", ex);
            }
        }
    }
}
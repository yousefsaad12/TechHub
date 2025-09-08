using backend.Application.Interfaces;
using backend.Application.Interfaces.Services;
using backend.Application.Services;
using backend.Domain.Interfaces;
using backend.Infrastructure.Data;
using backend.Infrastructure.Repository;
using DotNetEnv;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

Env.Load();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
    
    // More specific policy (recommended for production)
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://yourdomain.com")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // Only use with specific origins
    });
});

builder.Configuration
    .AddJsonFile("Config/appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"Config/appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddScoped<IBookRepository, BookRepository>();
builder.Services.AddScoped<IBookServices, BookServices>();
builder.Services.AddScoped<IImageService, CloudinaryService>();
builder.Services.AddScoped<IChapterRepository, ChapterRepository>();
builder.Services.AddScoped<IChapterServices, ChapterServices>();



builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowAll");
app.MapControllers();
app.UseHttpsRedirection();

app.Run();

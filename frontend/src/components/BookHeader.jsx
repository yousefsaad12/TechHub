import React from 'react';
import { ArrowLeft, Calendar, FileText, User, Clock } from 'lucide-react';

const BookHeader = ({ bookData, chapters, totalReadTime, onBackClick }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const coverUrl = bookData.coverImageUrl || bookData.cover_image_url;
  const createdAt = bookData.createdAt || bookData.created_at;

  return (
    <div className="mb-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={onBackClick}
        className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 mb-6 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back to Books</span>
      </button>

      {/* Book Header */}
      <div className="flex items-start space-x-6 mb-6 p-6 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl shadow-sm">
        <div className="relative">
          {coverUrl ? (
            <img 
              src={coverUrl} 
              alt={bookData.title}
              className="w-full h-44 object-cover object-top flex-shrink-0"
            />
          ) : (
            <div className="w-full h-44 bg-neutral-100 flex items-center justify-center text-neutral-400">
              No Image
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-800 mb-2">
                {bookData.title}
              </h1>
              <div className="flex items-center space-x-4 mb-3 text-neutral-600">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{bookData.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{createdAt ? formatDate(createdAt) : ''}</span>
                </div>
              </div>
              <p className="text-neutral-600 mb-4 max-w-2xl">
                {bookData.description}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                  {bookData.category}
                </span>
                <div className="flex items-center space-x-1 text-neutral-500">
                  <FileText className="w-4 h-4" />
                  <span>{chapters.length} chapters</span>
                </div>
                <div className="flex items-center space-x-1 text-neutral-500">
                  <Clock className="w-4 h-4" />
                  <span>{totalReadTime >= 60 ? `${Math.floor(totalReadTime / 60)}h ${totalReadTime % 60}m` : `${totalReadTime}m`} total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHeader;

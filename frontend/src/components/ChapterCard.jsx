import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChevronRight, Calendar, FileText } from 'lucide-react';

const ChapterCard = ({ chapter, bookData, isSelected, onToggle }) => {
  const navigate = useNavigate();
  

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const chapterNumber = chapter.chapter_number ?? chapter.chapterNumber;
  const estimatedReadTime = chapter.estimated_read_time ?? chapter.estimatedReadTime;
  const createdAt = chapter.created_at ?? chapter.createdAt;
  const totalChapters = bookData?.chapter_count ?? bookData?.chapterCount;

  

  const handleStartReading = (e) => {
    e.stopPropagation();
    const chapterNumber = chapter.chapter_number ?? chapter.chapterNumber;
    const rawBookId = bookData?.id ?? bookData?.bookId ?? bookData?.title;
    const bookSlug = bookData?.title || String(rawBookId);
    navigate(`/read/${encodeURIComponent(bookSlug)}/${chapterNumber}`, { state: { bookTitle: bookData?.title || '', id: bookData?.id ?? bookData?.bookId } });
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-xl p-4 
        shadow-sm 
        hover:shadow-xl hover:shadow-blue-100/50 focus:shadow-xl active:shadow-xl 
        transform 
        hover:scale-[1.02] focus:scale-[1.01] active:scale-[1.005] 
        transition-all duration-500 ease-out cursor-pointer max-w-3xl mx-auto
        hover:border-blue-300/60 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30
        ${isSelected ? 'border-blue-400 bg-blue-50/50' : ''}`}
      onClick={() => onToggle(chapter.id)}
    >
      {/* Chapter Number */}
      <div className="absolute left-4 top-4">
        <span className="flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-neutral-600 group-hover:bg-black rounded-full transition-colors duration-300">
          {chapterNumber}
        </span>
      </div>

      <div className="flex items-center justify-between ml-10">
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-base font-semibold text-neutral-800 group-hover:text-black transition-colors duration-300">
              {chapter.title}
            </h3>
          </div>
          <p className="text-neutral-700 text-sm mb-3 leading-relaxed">
            {chapter.summary}
          </p>
          
          {/* Stats */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-neutral-500 group-hover:text-neutral-700 transition-colors duration-300">
              <Clock className="w-4 h-4" />
              <span>{estimatedReadTime} min read</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-500 group-hover:text-neutral-700 transition-colors duration-300">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(createdAt)}</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
              <FileText className="w-4 h-4" />
              <span>Read Chapter</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <ChevronRight className={`w-5 h-5 text-neutral-400 group-hover:text-black transition-all duration-300 ${
            isSelected ? 'rotate-90' : ''
          }`} />
        </div>
      </div>

      {/* Expanded Content */}
      {isSelected && (
        <div className="mt-4 pt-4 border-t border-neutral-200 ml-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-medium text-neutral-800 mb-2">Chapter Details</h4>
              <div className="space-y-1 text-sm text-neutral-600">
                <p>Chapter {chapterNumber}{typeof totalChapters === 'number' ? ` of ${totalChapters}` : ''}</p>
                <p>Estimated: {estimatedReadTime} minutes</p>
              </div>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-medium text-neutral-800 mb-2">Actions</h4>
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={handleStartReading}
                  className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-white hover:text-black hover:border-black border transition-colors"
                >
                  Start Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterCard;

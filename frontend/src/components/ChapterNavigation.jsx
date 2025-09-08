import React from 'react';
import { ChevronLeft, ChevronRight, Clock, BookOpen } from 'lucide-react';

const ChapterNavigation = ({
  chapterIndex,
  totalChapters,
  onPrev,
  onNext,
  readingTimeSeconds,
  estimatedMinutes,
}) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={chapterIndex === 0}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            chapterIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-500">Chapter {chapterIndex + 1} of {totalChapters}</p>
          <div className="flex items-center justify-center space-x-4 mt-2 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{Math.floor(readingTimeSeconds / 60)}m {readingTimeSeconds % 60}s</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{estimatedMinutes} min estimated</span>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={chapterIndex === totalChapters - 1}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            chapterIndex === totalChapters - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChapterNavigation;



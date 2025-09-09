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
  const safeTotal = Number.isFinite(totalChapters) && totalChapters > 0 ? totalChapters : 1;
  const safeIndex = Number.isFinite(chapterIndex) && chapterIndex >= 0 ? chapterIndex : 0;
  const isPrevDisabled = safeIndex <= 0;
  const isNextDisabled = safeIndex >= safeTotal - 1;

  const handlePrev = () => {
    if (!isPrevDisabled && typeof onPrev === 'function') onPrev();
  };

  const handleNext = () => {
    if (!isNextDisabled && typeof onNext === 'function') onNext();
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            isPrevDisabled
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-500">Chapter {safeIndex + 1} of {safeTotal}</p>
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
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            isNextDisabled
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



import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';

const ChapterHeader = ({ onBack, onShare, bookTitle, chapterNumber }) => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 z-40">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-500" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-black">{bookTitle}</h1>
              <p className="text-sm font-semibold text-neutral-700">Chapter {chapterNumber}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onShare}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-500"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChapterHeader;



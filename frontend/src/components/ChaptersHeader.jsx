import React from 'react';
import { Book } from 'lucide-react';

const ChaptersHeader = ({ chaptersCount }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Book className="w-6 h-6 text-neutral-600" />
        <h2 className="text-xl font-semibold text-neutral-800">Chapters</h2>
      </div>
      <div className="flex items-center space-x-2 text-sm text-neutral-600 bg-neutral-50 px-3 py-1 rounded-lg">
        <span>{chaptersCount} chapters</span>
      </div>
    </div>
  );
};

export default ChaptersHeader;

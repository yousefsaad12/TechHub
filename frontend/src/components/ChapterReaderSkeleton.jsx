import React from "react";

const ChapterReaderSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header skeleton */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
            <div className="space-y-2 w-full">
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-4">
          <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-9/12 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="space-y-4 mt-8">
          <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse" />
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChapterReaderSkeleton;

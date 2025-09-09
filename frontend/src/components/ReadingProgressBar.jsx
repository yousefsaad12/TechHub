import React, { useState, useEffect } from 'react';

const ReadingProgressBar = ({ sections = [] }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      
      // Update current section based on scroll position
      if (sections.length > 0) {
        const sectionHeight = docHeight / sections.length;
        const currentSectionIndex = Math.min(Math.floor(scrollTop / sectionHeight), sections.length - 1);
        setCurrentSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [sections]);

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="relative group">
        {/* Progress Track */}
        <div className="w-1 h-80 bg-gray-200/20 rounded-full backdrop-blur-sm group-hover:bg-gray-200/40 transition-colors duration-300 relative overflow-hidden">
          {/* Progress Fill */}
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-300/80 via-blue-400/80 to-blue-500/90 rounded-full transition-all duration-1000 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
          
          {/* Progress Indicator */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out shadow-lg border border-white/30"
            style={{ top: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Progress Percentage */}
        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
};

export default ReadingProgressBar;

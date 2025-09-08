import React, { useState, useEffect } from 'react';

const TableOfContents = ({ sections = [] }) => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const updateCurrentSection = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Update current section based on scroll position
      if (sections.length > 0) {
        const sectionHeight = docHeight / sections.length;
        const currentSectionIndex = Math.min(Math.floor(scrollTop / sectionHeight), sections.length - 1);
        setCurrentSection(currentSectionIndex);
      }
    };
    window.addEventListener('scroll', updateCurrentSection);
    return () => window.removeEventListener('scroll', updateCurrentSection);
  }, [sections]);

  const scrollToSection = (index) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const sectionHeight = docHeight / sections.length;
    const targetScroll = sectionHeight * index;
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  // Calculate tick positions
  const tickCount = sections.length;
  const ticks = Array.from({ length: tickCount }, (_, i) => i);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
      <div className="relative group">
        {/* Disconnected Ticks Container */}
        <div className="flex flex-col items-center justify-between h-36 w-6 cursor-pointer">
          <div className="relative h-full w-full transition-opacity duration-300 group-hover:opacity-0">
            {ticks.map((tick, i) => (
              <div
                key={i}
                onClick={() => scrollToSection(i)}
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-0.5 rounded transition-all duration-200 cursor-pointer
                  ${i === currentSection ? 'bg-blue-400 scale-110 shadow-lg' : 'bg-gray-400/60'}
                  hover:bg-blue-400/80 hover:scale-105`}
                style={{ top: `${(i / (Math.max(tickCount - 1, 1))) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Table of Contents Panel */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-64 bg-blue-50/50 backdrop-blur-md rounded-lg shadow-2xl border border-blue-400 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <div className="flex">
            {/* Accent Bar */}
            <div className="w-1 bg-blue-50/50 rounded-l-lg flex-shrink-0" />
            {/* Content */}
            <div className="flex-1 p-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3 border-b border-blue-200 pb-2">
                Table of Contents
              </h3>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className={`text-xs transition-all duration-200 cursor-pointer hover:text-blue-600 hover:bg-blue-50/50 rounded px-2 py-1.5 ${
                      index === currentSection
                        ? 'text-blue-600 font-medium bg-blue-50/80'
                        : 'text-gray-600'
                    }`}
                  >
                    <div className={`flex items-center ${section.indent === 'indent' ? 'ml-3' : ''}`}>
                      <div className={`w-1 h-1 rounded-full mr-2 flex-shrink-0 ${
                        index === currentSection ? 'bg-blue-400' : 'bg-gray-300'
                      }`} />
                      <span className={`truncate ${section.level === 3 ? 'text-gray-500' : ''}`}>
                        {section.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;

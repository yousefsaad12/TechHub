import React, { useState, useEffect, useRef } from 'react';

const TableOfContents = ({ sections = [] }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const clearTimers = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openWithDelay = () => {
    clearTimers();
    openTimeoutRef.current = setTimeout(() => setIsOpen(true), 100);
  };

  const closeWithDelay = () => {
    clearTimers();
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), 250);
  };

  useEffect(() => {
    // Focus on the first section by default when sections change
    setCurrentSection(0);
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
      <div
        className="relative"
        onMouseEnter={openWithDelay}
        onMouseLeave={closeWithDelay}
      >
        {/* Toggle / Tick Container */}
        <div
          className="flex flex-col items-center justify-between h-36 w-6 cursor-pointer"
          onMouseEnter={openWithDelay}
          onMouseLeave={closeWithDelay}
        >
          <div className="relative h-full w-full">
            {ticks.map((tick, i) => (
              <div
                key={i}
                onClick={(e) => { e.stopPropagation(); scrollToSection(i); }}
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-0.5 rounded transition-all duration-200 cursor-pointer ${
                  i === currentSection ? 'bg-blue-500 scale-110 shadow-lg' : 'bg-gray-400/70'
                } hover:bg-blue-400/80 hover:scale-105`}
                style={{ top: `${(i / (Math.max(tickCount - 1, 1))) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Table of Contents Panel (hover intent) */}
        <div
          className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 w-64 bg-blue-50/70 backdrop-blur-md rounded-lg shadow-2xl border border-blue-400 transition-all duration-200 transform ${
            isOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'
          }`}
          onMouseEnter={openWithDelay}
          onMouseLeave={closeWithDelay}
        >
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
                    <div className={`flex items-center ${section.indent === 'indent' ? 'ml-3' : ''} min-w-0`}>
                      <div className={`w-1 h-1 rounded-full mr-2 flex-shrink-0 ${
                        index === currentSection ? 'bg-blue-400' : 'bg-gray-300'
                      }`} />
                      <span className={`${section.level === 3 ? 'text-gray-500' : ''} block max-w-full break-words whitespace-normal leading-tight hyphens-auto`}>
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

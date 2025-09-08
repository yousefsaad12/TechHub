import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReadingProgressBar from '../components/ReadingProgressBar';
import TableOfContents from '../components/TableOfContents';
import ChapterHeader from '../components/ChapterHeader';
import ChapterArticle from '../components/ChapterArticle';
import ChapterNavigation from '../components/ChapterNavigation';
import { extractSectionHeadings } from '../utils/extractSectionHeadings';
import { booksData } from '../data/booksData';

const ChapterReader = () => {
  const { bookId, chapterId } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingTime, setReadingTime] = useState(0);

  // Get book and chapter data
  const bookData = booksData[decodeURIComponent(bookId)];
  const chapter = bookData?.chapters?.find(ch => ch.id === parseInt(chapterId));
  const chapterIndex = bookData?.chapters?.findIndex(ch => ch.id === parseInt(chapterId));
  const totalChapters = bookData?.chapters?.length || 0;

  // Only use actual chapter content; no placeholder sample text
  const markdownContent = chapter?.content || '';

  // Track reading time
  useEffect(() => {
    const interval = setInterval(() => {
      setReadingTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const goToPreviousChapter = () => {
    if (chapterIndex > 0) {
      const prevChapter = bookData.chapters[chapterIndex - 1];
      navigate(`/read/${encodeURIComponent(bookId)}/${prevChapter.id}`);
    }
  };

  const goToNextChapter = () => {
    if (chapterIndex < totalChapters - 1) {
      const nextChapter = bookData.chapters[chapterIndex + 1];
      navigate(`/read/${encodeURIComponent(bookId)}/${nextChapter.id}`);
    }
  };

  const goBackToChapters = () => {
    navigate(`/chapters/${encodeURIComponent(bookId)}`);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const shareChapter = () => {
    if (navigator.share) {
      navigator.share({
        title: chapter?.title,
        text: `Read "${chapter?.title}" from ${bookData?.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!bookData || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Chapter Not Found</h1>
          <button
            onClick={goBackToChapters}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Chapters
          </button>
        </div>
      </div>
    );
  }

  const sectionHeadings = markdownContent ? extractSectionHeadings(markdownContent) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ReadingProgressBar />
      {sectionHeadings.length > 0 && (
        <TableOfContents sections={sectionHeadings} />
      )}
      
      {/* Header */}
      <ChapterHeader
        onBack={goBackToChapters}
        onShare={shareChapter}
        bookTitle={bookData.title}
        chapterNumber={chapter.chapter_number}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/*
          To use 'Source Serif Pro' as the reading font, add this to your index.html:
          <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap" rel="stylesheet">
          And in your CSS:
          .reading-font { font-family: 'Source Serif Pro', Georgia, Cambria, 'Times New Roman', Times, serif; }
        */}
        <ChapterArticle markdownContent={markdownContent} />

        {/* Chapter Navigation */}
        <ChapterNavigation
          chapterIndex={chapterIndex}
          totalChapters={totalChapters}
          onPrev={goToPreviousChapter}
          onNext={goToNextChapter}
          readingTimeSeconds={readingTime}
          estimatedMinutes={chapter.estimated_read_time}
        />
      </main>

      {/* Styles now provided by ChapterArticle */}
    </div>
  );
};

export default ChapterReader;

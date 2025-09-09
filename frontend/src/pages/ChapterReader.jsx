import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ReadingProgressBar from '../components/ReadingProgressBar';
import TableOfContents from '../components/TableOfContents';
import ChapterHeader from '../components/ChapterHeader';
import ChapterArticle from '../components/ChapterArticle';
import ChapterReaderSkeleton from '../components/ChapterReaderSkeleton';
// ChapterNavigation removed
import { extractSectionHeadings } from '../utils/extractSectionHeadings';
import useChapter from '../hooks/useChapter';
import useChapters from '../hooks/useChapters';

const ChapterReader = () => {
  const { bookId, chapterNumber } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Fetch chapter data from backend
  const decodedBookId = decodeURIComponent(bookId);
  const numericBookId = Number(decodedBookId);
  const fallbackBookIdFromState = location.state && (location.state.id ?? location.state.bookId);
  const effectiveBookId = Number.isFinite(numericBookId) ? numericBookId : fallbackBookIdFromState ?? decodedBookId;
  const { chapter, loading, error } = useChapter(effectiveBookId, decodeURIComponent(chapterNumber));
  const { chapters: allChapters } = useChapters(effectiveBookId);
  const currentChapterNumber = Number(chapter?.chapter_number ?? chapter?.chapterNumber ?? decodeURIComponent(chapterNumber));
  const totalChapters = Array.isArray(allChapters) ? allChapters.length : 0;
  const chapterIndex = Number.isFinite(currentChapterNumber) && currentChapterNumber > 0 ? currentChapterNumber - 1 : 0;

  // Determine effective content for rendering and ToC (prefer content, fallback to summary)
  const markdownContent = chapter?.content || '';
  const effectiveContent = markdownContent || chapter?.summary || '';

  // Removed reading time tracking (no navigation component)

  // Navigation functions
  const goToPreviousChapter = () => {
    if (Number.isFinite(currentChapterNumber) && currentChapterNumber > 1) {
      navigate(`/read/${encodeURIComponent(bookId)}/${currentChapterNumber - 1}`, { state: { bookTitle: (location.state && location.state.bookTitle) || '' } });
    }
  };

  const goToNextChapter = () => {
    if (Number.isFinite(currentChapterNumber) && typeof totalChapters === 'number' && currentChapterNumber < totalChapters) {
      navigate(`/read/${encodeURIComponent(bookId)}/${currentChapterNumber + 1}`, { state: { bookTitle: (location.state && location.state.bookTitle) || '' } });
    }
  };

  const goBackToChapters = () => {
    const backId = (location.state && (location.state.id ?? location.state.bookId)) || bookId;
    navigate(`/chapters/${encodeURIComponent(backId)}`, {
      state: { id: (location.state && (location.state.id ?? location.state.bookId)) }
    });
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const shareChapter = () => {
    if (navigator.share) {
      navigator.share({
        title: chapter?.title,
        text: `Read "${chapter?.title}" from ${(location.state && location.state.bookTitle) || chapter?.book_title || ''}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{error}</h1>
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

  if (loading || !chapter) {
    return <ChapterReaderSkeleton />;
  }

  const sectionHeadings = effectiveContent ? extractSectionHeadings(effectiveContent) : [];

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
        bookTitle={(location.state && location.state.bookTitle) || chapter?.book_title || ''}
        chapterNumber={chapter.chapter_number ?? chapter.chapterNumber}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/*
          To use 'Source Serif Pro' as the reading font, add this to your index.html:
          <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap" rel="stylesheet">
          And in your CSS:
          .reading-font { font-family: 'Source Serif Pro', Georgia, Cambria, 'Times New Roman', Times, serif; }
        */}
        <ChapterArticle markdownContent={effectiveContent} />

        {/* Chapter Navigation removed */}
      </main>

      {/* Styles now provided by ChapterArticle */}
    </div>
  );
};

export default ChapterReader;

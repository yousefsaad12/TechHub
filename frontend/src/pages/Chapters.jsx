import React, { useMemo, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useBookContext } from '../context/BookContext.jsx';
import ChapterCard from '../components/ChapterCard';
import BookHeader from '../components/BookHeader';
import ChaptersHeader from '../components/ChaptersHeader';
import SearchInput from '../components/SearchInput';

import useChapters from '../hooks/useChapters';

const Chapters = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { bookId, bookSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const idFromParams = bookId ? decodeURIComponent(bookId) : '';
  const idFromState = location.state?.id ? decodeURIComponent(location.state.id) : '';
  const id = idFromParams || idFromState;
  const { selectedBook } = useBookContext();
  const bookData = location.state?.book || selectedBook || null;
  const { chapters, loading: chaptersLoading, error: chaptersError } = useChapters(id);

  const toggleChapter = (chapterId) => {
    setSelectedChapter(selectedChapter === chapterId ? null : chapterId);
  };

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
  };

  const filteredChapters = chapters.filter(
    (chapter) =>
      chapter.title.toLowerCase().includes(searchTerm) ||
      (chapter.summary || "").toLowerCase().includes(searchTerm)
  );

  const totalReadTime = useMemo(() => (
    chapters.reduce((total, chapter) => total + (chapter.estimated_read_time ?? chapter.estimatedReadTime ?? 0), 0)
  ), [chapters]);

  const handleBackClick = () => {
    navigate('/books');
  };

  return (
    <div className="container mb-30 mx-auto px-6 py-10 space-y-8">
      {/* Book Header Component */}
      {bookData && (
        <BookHeader 
          bookData={bookData}
          chapters={chapters}
          totalReadTime={totalReadTime}
          onBackClick={handleBackClick}
        />
      )}

      {/* Chapters Header Component */}
      <div className="max-w-3xl mx-auto">
        <ChaptersHeader chaptersCount={chapters.length} />
        
        {/* Search Input */}
        <div className="flex justify-center mb-6 mt-6">
          <div className="w-full max-w-md">
            <SearchInput placeholder="Search chapters..." onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* State Messages */}
      {(chaptersLoading && !chaptersError) && (
        <div className="max-w-3xl mx-auto"><p className="text-center text-neutral-500 py-8">Loading chapters...</p></div>
      )}
      {(chaptersError && !chaptersLoading) && (
        <div className="max-w-3xl mx-auto"><p className="text-center text-red-600 py-8">{chaptersError}</p></div>
      )}

      {/* Chapters Grid */}
      {(!chaptersLoading && !chaptersError) && (
        <div className="space-y-3">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                bookData={bookData}
                isSelected={selectedChapter === chapter.id}
                onToggle={toggleChapter}
              />
            ))
          ) : (
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-neutral-500 py-8">
                No chapters found matching your search.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chapters;
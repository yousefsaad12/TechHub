import { useNavigate } from 'react-router-dom';
import { useBookContext } from '../context/BookContext.jsx';

export default function BookCard({ book }) {
  const navigate = useNavigate();
  const { setSelectedBook } = useBookContext();

  const handleClick = () => {
    // Navigate to chapters page with book id as parameter
    const id = book.id || book.book_id;
    setSelectedBook(book);
    const slug = encodeURIComponent(book.title || `book-${id}`);
    navigate(`/books/${slug}/chapters`, { state: { book, id } });
  };

  const coverUrl = book.coverImageUrl || book.cover_image_url;
  const createdAt = book.createdAt || book.created_at;
  const chapterCount = book.chapterCount ?? book.chapter_count;
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    : null;

  return (
    <div
      tabIndex={0}
      onClick={handleClick}
      className="
        group bg-white border border-neutral-200/60 rounded-lg overflow-hidden
        shadow-sm hover:shadow-lg focus:shadow-lg active:shadow-lg
        transition-all duration-200 cursor-pointer w-full
        hover:border-blue-300/60
      "
      aria-label={`Open chapters for ${book.title}`}
    >
      <div className="relative">
        {coverUrl ? (
            <img
              src={coverUrl}
              alt={`${book.title} cover`}
              className="w-full h-44 object-cover object-top"
              loading="lazy"
            />
        ) : (
          <div className="w-full h-44 bg-neutral-100 flex items-center justify-center text-neutral-400">
            No Image
          </div>
        )}
      </div>

      <div className="p-4 space-y-1.5">
        <h2 className="text-base font-semibold text-neutral-900 line-clamp-1">
          {book.title}
        </h2>
        <div className="flex items-center justify-between gap-2 min-h-[1.25rem]">
          <p className="text-sm text-neutral-500 italic font-medium truncate m-0">
            {book.author}
          </p>
          {book.category && (
            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 whitespace-nowrap">
              {book.category}
            </span>
          )}
        </div>
        <p className="text-sm text-neutral-700 line-clamp-2 leading-relaxed">
          {book.description}
        </p>
        <div className="flex items-center justify-between pt-1 text-xs text-neutral-500">
          {typeof chapterCount === 'number' ? (
            <span>{chapterCount} chapters</span>
          ) : <span />}
          {formattedDate && (
            <span>{formattedDate}</span>
          )}
        </div>
      </div>
    </div>
  );
}

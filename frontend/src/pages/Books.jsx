import { useState } from "react";
import BookCard from "../components/BookCard";
import SearchInput from "../components/SearchInput";
import useBooks from "../hooks/useBooks";

export default function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const { books, loading, error } = useBooks("http://localhost:5217/api/books/");

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) 
  );

  return (
    <div className="container mb-30 mx-auto px-6 py-10 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-neutral-800 mb-4">
          Books Collection
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Discover amazing books and expand your knowledge
        </p>
      </div>

      <div className="flex justify-center mb-15 mt-10">
        <div className="w-full max-w-[800px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] transition-all duration-300 focus-within:max-w-[850px]">
          <SearchInput placeholder="Search books..." onSearch={handleSearch} />
        </div>
      </div>

      {loading && (
        <p className="text-center text-gray-500">Loading books...</p>
      )}
      {error && !loading && (
        <p className="text-center text-red-600">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {!loading && !error && filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => <BookCard key={index} book={book} />)
        ) : (
          !loading && !error && (
            <p className="col-span-full text-center text-gray-500">
              No books found.
            </p>
          )
        )}
      </div>
    </div>
  );
}

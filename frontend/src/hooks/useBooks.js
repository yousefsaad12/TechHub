import { useEffect, useState } from 'react';

export default function useBooks(apiUrl = 'http://localhost:5217/api/books/') {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isCancelled = false;
    const fetchBooks = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`Failed to fetch books: ${res.status}`);
        }
        const data = await res.json();
        if (!isCancelled) {
          setBooks(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Failed to load books');
          setBooks([]);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };
    fetchBooks();
    return () => { isCancelled = true; };
  }, [apiUrl]);

  return { books, loading, error };
}



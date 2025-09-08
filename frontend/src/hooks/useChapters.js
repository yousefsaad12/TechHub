import { useEffect, useState } from 'react';

export default function useChapters(bookId) {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!bookId) return;
    let isCancelled = false;
    async function fetchChapters() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`http://localhost:5217/api/books/${bookId}/chapters`);
        if (!res.ok) throw new Error(`Failed to fetch chapters: ${res.status}`);
        const data = await res.json();
        if (!isCancelled) setChapters(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Failed to load chapters');
          setChapters([]);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }
    fetchChapters();
    return () => { isCancelled = true; };
  }, [bookId]);

  return { chapters, loading, error };
}



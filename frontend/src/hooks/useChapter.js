import { useEffect, useState } from 'react';

export default function useChapter(bookId, chapterNumber) {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!bookId || !chapterNumber) return;
    let isCancelled = false;
    async function fetchChapter() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`http://localhost:5217/api/books/${bookId}/chapter/${chapterNumber}`);
        if (!res.ok) throw new Error(`Failed to fetch chapter: ${res.status}`);
        const data = await res.json();
        if (!isCancelled) setChapter(data || null);
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Failed to load chapter');
          setChapter(null);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }
    fetchChapter();
    return () => { isCancelled = true; };
  }, [bookId, chapterNumber]);

  return { chapter, loading, error };
}



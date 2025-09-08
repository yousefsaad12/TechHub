import React, { createContext, useContext, useMemo, useState } from 'react';

const BookContext = createContext(undefined);

export function BookProvider({ children }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const value = useMemo(() => ({ selectedBook, setSelectedBook }), [selectedBook]);
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export function useBookContext() {
  const ctx = useContext(BookContext);
  if (!ctx) throw new Error('useBookContext must be used within a BookProvider');
  return ctx;
}



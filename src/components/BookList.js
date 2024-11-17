// src/components/BookList.js

import React from 'react';
import BookCard from './BookCard'; // Ensure BookCard.js exists

function BookList({ books }) {
  return (
    <div>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;

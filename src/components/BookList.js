import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <BookDetails book={book} key={book.id}></BookDetails>
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">NO books to read now!!</div>
  );
};

export default BookList;

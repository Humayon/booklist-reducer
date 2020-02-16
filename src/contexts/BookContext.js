import React, { createContext, useReducer } from 'react';
import { BookReducers } from '../reducers/BookReducers';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducers, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;

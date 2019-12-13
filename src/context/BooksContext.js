import React, { createContext, useState } from "react";
export const BookContext = createContext();
console.log(BookContext.Provider, "<><<><><>");
const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "the art of war", id: 1 },
    { title: "1984 by george orwell", id: 2 },
    { title: "goosebumps", id: 3 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default BooksContextProvider;

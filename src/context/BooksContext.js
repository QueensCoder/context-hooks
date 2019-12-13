import React, { createContext, useState } from "react";
export const BooksContext = createContext();

console.log(BooksContext.Provider, "<><<><><>");

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "the art of war", id: 1 },
    { title: "1984 by george orwell", id: 2 },
    { title: "goosebumps", id: 3 }
  ]);
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

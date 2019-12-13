import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BooksContext } from "../context/BooksContext";

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { books, setBooks } = useContext(BooksContext);
  const { ui, syntax } = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ background: ui, color: syntax }}>
      <ul>
        {books.map(({ title, id }) => (
          <li style={{ background: ui }} key={id}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

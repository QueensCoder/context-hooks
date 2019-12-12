import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { ui, syntax } = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ background: ui, color: syntax }}>
      <ul>
        <li style={{ background: ui }}>the art of war</li>
        <li style={{ background: ui }}>mystic river</li>
        <li style={{ background: ui }}>Harry Potter</li>
      </ul>
    </div>
  );
};

export default BookList;

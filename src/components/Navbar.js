import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { ui, syntax } = isLightTheme ? light : dark;

  return (
    <nav style={{ background: ui, color: syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

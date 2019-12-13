import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // context for Theme
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { ui, syntax } = isLightTheme ? light : dark;

  //context for Auth
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ background: ui, color: syntax }}>
      <h1>Context App</h1>
      <button onClick={toggleAuth}>
        {isAuth ? "Khan Logged in" : "Wrath of Khan has ended"}
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Navbar, Booklist, ThemeToggle } from "./components";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

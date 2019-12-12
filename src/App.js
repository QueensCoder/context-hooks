import React from "react";
import { Navbar, Booklist } from "./components";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

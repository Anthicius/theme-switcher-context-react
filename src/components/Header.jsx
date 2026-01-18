import { useTheme } from "../context/ThemeContext";
import React from "react";

const Header = () => {
  const { theme, togleTheme } = useTheme();

  return (
    <header className="header">
      <button onClick={togleTheme}>Current mode: {theme}</button>
    </header>
  );
};

export default Header;

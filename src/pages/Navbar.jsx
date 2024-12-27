import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <Link className="link" to="/">
        <h1>My Blog</h1>
      </Link>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create">
          New Blog
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? "🌞" : "🌚"}
      </button>
    </div>
  );
};

export default Navbar;

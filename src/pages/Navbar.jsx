import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My blog</h1>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create">
          New blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

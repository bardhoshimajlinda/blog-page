import React from "react";
import { Link } from "react-router-dom";
import dark from "./../assets/moon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <h1>My blog</h1>
      </Link>
      <div className="links">
        <img src={dark} style={{ height: "35px", paddingTop: "20px" }} />
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

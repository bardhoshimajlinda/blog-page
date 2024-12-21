import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New blog</a>
      </div>
    </div>
  );
};

export default Navbar;

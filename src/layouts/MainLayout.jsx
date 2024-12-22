import React from "react";
import Navbar from "../pages/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <section>{children}</section>
      <footer className="footer">© 2024 My Blog</footer>
    </div>
  );
};

export default MainLayout;

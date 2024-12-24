import React from "react";
import { Link } from "react-router-dom";
import notFound from "./../assets/404.jpg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFound} />
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;

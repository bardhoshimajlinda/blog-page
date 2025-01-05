import React from "react";
import Blog from "../components/Blog";
import useFetch from "../hooks/useFetch";
import BackToTopButton from "../components/BackToTopButton";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <div className="content">
        {error && <p>{error}</p>}
        {isPending && <div className="spinner"></div>}
        {blogs && <Blog blogs={blogs} title="All Blogs" />}
      </div>
    </>
  );
};

export default Home;

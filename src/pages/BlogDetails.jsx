import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE",
      }).then(() => navigate("/"));
    }
  };

  return (
    <div className="blog-details">
      {isPending && <div className="spinner"></div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            <strong>Category:</strong> {blog.category}
          </p>
          <p>Written by {blog.author}</p>
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="blog-image" />
          )}

          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

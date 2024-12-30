import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

const Blog = ({ blogs, title }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [blogs, searchQuery]);

  return (
    <div className="blog-list">
      <h2>{title}</h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          padding: "8px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      />

      {filteredBlogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}

      {filteredBlogs.length === 0 && (
        <p>No blogs found matching your search.</p>
      )}
    </div>
  );
};

export default Blog;

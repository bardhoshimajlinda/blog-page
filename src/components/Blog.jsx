import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import BackToTopButton from "./BackToTopButton";

const Blog = ({ blogs, title }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const navigate = useNavigate();

  const filteredBlogs = useMemo(() => {
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [blogs, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

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

      {blogs.length === 0 ? (
        <div className="no-blogs">
          <p>No blogs yet. Create your first blog!</p>
          <button onClick={() => navigate("/create")}>Create a Blog</button>
        </div>
      ) : (
        <>
          {paginatedBlogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>
                  <strong>Category:</strong> {blog.category}
                </p>
                <p>Written by {blog.author}</p>
                {blog.date && <small>Created on: {blog.date}</small>}
              </Link>
            </div>
          ))}

          {paginatedBlogs.length === 0 && (
            <p>No blogs found matching your search.</p>
          )}

          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
          <BackToTopButton />
        </>
      )}
    </div>
  );
};

export default Blog;

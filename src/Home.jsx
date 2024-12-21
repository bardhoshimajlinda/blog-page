import { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Couldn't fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="content">
      {error && <p>{error}</p>}
      {isPending && <div>Loading..</div>}
      {blogs && <Blog blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

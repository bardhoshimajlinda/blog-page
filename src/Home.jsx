import Blog from "./Blog";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="content">
      {error && <p>{error}</p>}
      {isPending && <div>Loading..</div>}
      {blogs && <Blog blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

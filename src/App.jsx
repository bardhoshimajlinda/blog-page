import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import MainLayout from "./layouts/MainLayout";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

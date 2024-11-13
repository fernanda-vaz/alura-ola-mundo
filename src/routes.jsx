import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DefaultPage from "./pages/Default/DefaultPage";
import Post from "./pages/Post/Post";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="posts/:id*" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

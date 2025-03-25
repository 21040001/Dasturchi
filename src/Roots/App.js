
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../Pages/HomePage";
import CoursePage from "../Pages/CoursePage";
import BlogPage from "../Pages/BlogPage";
import ReadPage from "../Pages/ReadPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "../Pages/NonePage";
import Contact from "../Components/ContactMe";
import { HelmetProvider } from "react-helmet-async";
import MyBookPage from "../Pages/MyBookPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<NoPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/contactMe" element={<Contact />} />
          <Route path="/books" element={<MyBookPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

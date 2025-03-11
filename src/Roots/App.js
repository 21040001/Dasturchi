
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../Pages/HomePage";
import CoursePage from "../Pages/CoursePage";
import BlogPage from "../Pages/BlogPage";
import ReadPage from "../Pages/ReadPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="blogs" element={<BlogPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="read" element={<ReadPage />} />
        <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

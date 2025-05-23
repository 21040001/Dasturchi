
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
import JavaCompilerPage from "../Pages/JavaCompilerPage";
import SignIn from "../Components/Signs/SignIn";
import SignUp from "../Components/Signs/SignUp";
import Diabet from "../Components/ProjectLive";

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/JavaCompiler" element={<JavaCompilerPage />} />
          <Route path="/diabet" element={<Diabet />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

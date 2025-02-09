import Home from "../Components/Home/index"
import Project from "../Components/Projects";
import Skill from "../Components/Skills";
import Contact from "../Components/ContactMe";
import Body from "../MyCourseComponents/Body";
import Header from "../MyCourseComponents/Header";
import Navbar from "../MyCourseComponents/Navbar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="app">
      <Header></Header>
      <Navbar></Navbar>
      <Body></Body>
    </div>
    /*
    <div className="app">
      <Home/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>*/
  );
}

export default App;

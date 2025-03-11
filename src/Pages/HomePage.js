import Contact from "../Components/ContactMe";
import Project from "../Components/Projects";
import Skill from "../Components/Skills";
import Footer from "../BlogComponents/Footer";
import Home from "../Components/Home";

import "./style.css"
function HomePage() {
    return (
        <div>
            <Home />
            <Project />
            <Skill />
            <Contact />
            <hr></hr>
            <Footer></Footer>
        </div>
    )
}
export default HomePage;
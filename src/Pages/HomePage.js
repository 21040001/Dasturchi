import Contact from "../Components/ContactMe";
import Project from "../Components/Projects";
import Skill from "../Components/Skills";
import Footer from "../BlogComponents/Footer";
import Home from "../Components/Home";
import { Helmet } from "react-helmet-async";

import "./style.css"
function HomePage() {
    return (
        <div>
            <Helmet>
                <title>About Me - Davronbek Abdurazzokov</title>
                <meta name="description" content="Learn more about Davronbek Abdurazzokov and his projects." />

            </Helmet>
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
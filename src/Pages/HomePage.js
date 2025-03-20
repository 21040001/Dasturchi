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
                <title>Contact Us - My Website</title>
                <meta name="description" content="Get in touch with us for any inquiries." />
                <meta property="og:title" content="Contact Us - My Website" />
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
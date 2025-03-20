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
                <title>Davronbek Abdurazzokov | Home</title>
                <meta name="description" content="Welcome to the portfolio of Davronbek Abdurazzokov. Explore my projects and skills." />
                <meta name="keywords" content="Davronbek, Abdurazzokov, portfolio, dasturchi, dasturlash, developer, projects" />
                <meta property="og:title" content="Davronbek Abdurazzokov | Portfolio" />
                <meta property="og:description" content="Check out the amazing portfolio of Davronbek Abdurazzokov." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
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
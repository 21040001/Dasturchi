import Contact from "../Components/ContactMe";
import Project from "../Components/Projects";
import Skill from "../Components/Skills";
import Footer from "../Components/BlogComponents/Footer";
import Home from "../Components/Home";
import { Helmet } from "react-helmet-async";
import "./style.css"
function HomePage() {

    const downloadCV = () => {
        document.getElementById("cvButton").addEventListener("click", function () {
            const link = document.createElement("a");
            link.href = "/CV.pdf"; // Dosya yolu (aynı klasördeyse bu şekilde)
            link.download = "cv.pdf"; // İndirilecek dosyanın adı
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    return (
        <div>
            <Helmet>
                <title>Davronbek Abdurazzokov | Home</title>
                <meta name="description" content="Davronbek Abdurazzokov" />
                <meta name="keywords" content="Davronbek, Abdurazzokov, portfolio, dasturchi, dasturlash, developer, projects" />
                <meta property="title" content="Davronbek Abdurazzokov | Portfolio" />
                <meta property="description" content="Men bilan birgalikda dasturlashni 0'dan, hech qanday to'lo'vlarsiz o'rganing." />
                <meta property="type" content="website" />
                
            </Helmet>
            <Home />
            <Project />
            <Skill />
            <Contact />
            <hr></hr>
            <Footer></Footer>

            <button id="cvButton" onClick={downloadCV}>
                <span id="spanCV">Cv</span>
                <span id="spanImG">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                    </svg>
                </span>
            </button>
        </div>
    )
}
export default HomePage;
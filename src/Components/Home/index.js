import "./index.css";
import img from "../../Images/man.png"

function Home() {

    return (
        <div className="home">
            <div className="navbar">
                <button className="logo"></button>
                <div >
                    <a href="/"><span>Home</span></a>
                    <a href="/course"><span>My courses</span></a>
                    <a href="/blogs"><span>My blog</span></a>
                    <span >Contact me</span>
                </div>
                <div >
                    <span>uzb</span>
                    <span>tr</span>
                    <span>eng</span>
                </div>
            </div>
            <div className="body">
                <div className="text">
                <h4>-- <span>Hello</span></h4>
                <h1>I am <span>Davronbek</span> Abdurazzokov</h1>
                As a <span>passionate</span> and <span>versatile software developer,</span> I am continuously expanding my expertise in various domains, including full-stack web development, artificial intelligence, and backend systems. With proficiency in <span>Java, Python, C#,</span>  and modern frameworks like <span>Spring Boot</span> and <span>React.js,</span> I thrive on solving complex challenges and building innovative solutions. I am always eager to explore new technologies and enhance my skills to stay at the forefront of the ever-evolving tech industry.
                <div>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-github"></i>
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-linkedin"></i>
                </div>
                </div>
                <div className="imgCart">
                    <img  src={img}></img>
                </div>
            </div>
        </div>
    );
}

export default Home;

import "./index.css";
import img from "../../Images/man.png";
import { useTranslation } from 'react-i18next';

function Home() {

    const { t, i18n } = useTranslation();

    // Tilni o'zgartirish funksiyasi
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);  // Tilni o'zgartirish
    }
    const openNav = () => {
        const element = document.getElementById("navBar");
        element.classList.toggle("d-block");

    }

    return (
        <div className="home">
            <div className="navbar">
                <button className="logo"></button>
                <div>
                    <a href="/"><span>{t("Home")}</span></a>
                    <a href="/course"><span>{t("MyCourse")}</span></a>
                    <a href="/blogs"><span>{t("MyBlog")}</span></a>
                    <a href="/contactMe"><span>{t("MyContact")}</span></a>
                </div>
                <div>
                    <span onClick={() => handleClick("uz")}>uzb</span> {/* Tilni uzbekcha qilish */}
                    <span onClick={() => handleClick("tr")}>tr</span> {/* Tilni turkcha qilish */}
                    <span onClick={() => handleClick("en")}>en</span> {/* Tilni inglizcha qilish */}
                </div>
                <span className="spanMenu" onClick={openNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </span>
                <nav class="nav flex-column navMenu" id="navBar">

                    <a class="nav-link active" aria-current="page" href="/"><span>{t("Home")}</span></a>
                    <a class="nav-link" href="/course"><span>{t("MyCourse")}</span></a>
                    <a class="nav-link" href="/blogs"><span>{t("MyBlog")}</span></a>
                    <a class="nav-link " href="/ContactMe" ><span>{t("MyContact")}</span></a>
                    <br />
                    <span onClick={() => handleClick("uz")} class="ms-3"> uzb</span> {/* Tilni uzbekcha qilish */}
                    <span onClick={() => handleClick("tr")} class="ms-3"> tr</span> {/* Tilni turkcha qilish */}
                    <span onClick={() => handleClick("en")} class="ms-3"> en</span> {/* Tilni inglizcha qilish */}
                    <br /> <span>.</span>
                </nav>
            </div>
            <div className="body">
                <div className="text">
                    <h4>-- <span>{t("Hello")}</span></h4>
                    <h1>{t("Iam")}<span> Davronbek</span> Abdurazzokov</h1>
                    {t("About1")}<br /><br />
                    {t("About2")}
                    <div>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-github"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>
                <div className="imgCart">
                    <img src={img} alt="Davronbek" />
                </div>
            </div>
        </div>
    );
}

export default Home;

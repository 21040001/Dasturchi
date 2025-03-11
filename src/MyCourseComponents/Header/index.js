import "./index.css";
import { useTranslation } from 'react-i18next';

function Header() {

 const { t, i18n } = useTranslation();

    const openNav = () => {
        const element = document.getElementById("navBar");
        element.classList.toggle("d-block");
        
    }
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);  // Tilni o'zgartirish
    }
    return (
        <div className="header">
            <div className="navbar">
                <button className="logo"></button>
                <div>
                    <a href="/"><span>{t("Home")}</span></a>
                    <a href="/course"><span>{t("MyCourse")}</span></a>
                    <a href="/blogs"><span>{t("MyBlog")}</span></a>
                    <span >{t("MyContact")}</span>
                </div>
                <div >
                <span onClick={() => handleClick("uz")}>uzb</span> {/* Tilni uzbekcha qilish */}
                    <span onClick={() => handleClick("tr")}>tr</span> {/* Tilni turkcha qilish */}
                    <span onClick={() => handleClick("en")}>en</span> {/* Tilni inglizcha qilish */}
                </div>
                <nav class="nav flex-column navMenu" id="navBar">
                    <a class="nav-link active" aria-current="page" href="/"><span>{t("Home")}</span></a>
                    <a class="nav-link" href="/course"><span>{t("MyCourse")}</span></a>
                    <a class="nav-link" href="/blogs"><span>{t("MyBlog")}</span></a>
                    <a class="nav-link " href="#" ><span>{t("MyContact")}</span></a>
                </nav>
                <span  className="spanMenu" onClick={openNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default Header;

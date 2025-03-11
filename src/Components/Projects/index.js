import "./index.css";
import { useTranslation } from 'react-i18next';
function Project() {

    const { t, i18n } = useTranslation();

    return (
        <div className="project">
            <div className="navbar">

            </div>
            <div className="body">
                <h3>{t("My")} <span> {t("MyProject")}</span></h3>
                <div className="cards">
                    <div className="card">
                        <h4>Web shopping</h4>
                        <p>{t("WebShopping")} </p>
                        <a href="https://webshopping.uz/products">Project</a>
                    </div>
                    <div className="card">
                        <h4>RAPQON DRY FRUITS EXPORT</h4>
                        <p>{t("DryFruit")}</p>
                        <a href="https://dryfruitexport.uz/">Project</a>
                    </div>
                    <div className="card">
                        <h4>Hastane Randevu Sistemi</h4>
                        <p>{t("Hospital")}</p>
                        <a href="https://github.com/21040001/Hastane-Randevu-sistemi">Project</a>
                    </div>
                    
                </div>
                <div className="cards">
                   
                    <div className="card">
                        <h4>Kim Tezroq</h4>
                        <p>{t("WhoFaster")}</p>
                        <a href="https://github.com/21040001/Kim-Tezroq">Project</a>
                    </div>
                    <div className="card">
                        <h4>We started</h4>
                        <p>{t("WeStarted")}</p>
                        <a href="https://westarted.com.tr/">Project</a>
                    </div>
                    <div className="card">
                        <h4>Moda sari</h4>
                        <p>{t("ModaSari")}</p>
                        <a href="https://github.com/21040001/Moda-sari">Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

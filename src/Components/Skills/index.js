import "./index.css";
import css from "../../Images/css.png";
import html from "../../Images/html.png";
import java from "../../Images/java.png";
import js from "../../Images/js.png";
import c from "../../Images/c.png";
import api from "../../Images/api.png";
import git from "../../Images/git.png";
import python from "../../Images/python.png";
import react from "../../Images/react.png";
import spring from "../../Images/spring.png";
import android from "../../Images/android.png";
import Sql from "../../Images/sql.png";
function Skill() {

    return (
        <div className="skill">
            <div className="navbar">

            </div>
            <div className="body">
                <h3>My <span>Skills</span></h3>
                <div className="skills">
                    <div className="skillCard">
                        <img src={java}></img>
                        <h5>Java</h5>
                        <p>Nesne yönelimli ve platformdan bağımsız bir dil olup, büyük ölçekli web, mobil ve kurumsal uygulamalar geliştirmek için yaygın olarak kullanılır.</p>
                    </div>
                    <div className="skillCard">
                        <img src={c}></img>
                        <h5>C</h5>
                        <p>Düşük seviyeli, hızlı ve verimli bir programlama dili olup, sistem programlama, gömülü sistemler ve performans kritik uygulamalar için tercih edilir</p>
                    </div>
                    <div className="skillCard">
                        <img src={python}></img>
                        <h5>Python</h5>
                        <p>Basit sözdizimi ve geniş kütüphane desteğiyle yapay zeka, veri bilimi, web geliştirme ve otomasyon gibi birçok alanda kullanılan güçlü bir dildir.</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="skillCard">
                        <img src={js}></img>
                        <h5>JavaScript</h5>
                        <p>Dinamik ve etkileşimli web sayfaları oluşturmak için kullanılır. Tarayıcı tarafında çalışan, güçlü ve esnek bir programlama dilidir.</p>
                    </div>
                    <div className="skillCard">
                        <img src={css}></img>
                        <h5>CSS</h5>
                        <p>Web sitelerinin tasarımını ve görünümünü belirler. Renk, düzen ve animasyonlarla kullanıcı deneyimini iyileştirir.</p>
                    </div>
                    <div className="skillCard">
                        <img src={html}></img>
                        <h5>HTML</h5>
                        <p>Web sayfalarının temel yapı taşıdır. İçerikleri düzenlemek ve yapılandırmak için kullanılır.</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="skillCard">
                        <img src={react}></img>
                        <h5>React.js</h5>
                        <p>Kullanıcı arayüzleri geliştirmek için popüler bir JavaScript kütüphanesidir. Bileşen tabanlı yapısıyla dinamik ve hızlı web uygulamaları oluşturmayı sağlar.</p>
                    </div>
                    <div className="skillCard">
                        <img src={spring}></img>
                        <h5>Java Spring</h5>
                        <p>Modern ve ölçeklenebilir web uygulamaları geliştirmek için kullanılan güçlü bir Java çerçevesidir. Mikro servis mimarisi ve bağımlılık yönetimi ile verimli çözümler sunar.</p>
                    </div>
                    <div className="skillCard">
                        <img src={git}></img>
                        <h5>Git-Github</h5>
                        <p>Versiyon kontrol sistemi olup, projelerde değişiklikleri takip etmeye, ekip çalışmasını kolaylaştırmaya ve kod yönetimini optimize etmeye yardımcı olur.</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="skillCard">
                        <img src={android}></img>
                        <h5>Android Studio</h5>
                        <p>Android uygulamaları geliştirmek için resmi entegre geliştirme ortamıdır (IDE). Gelişmiş araçları ve emülatör desteğiyle mobil uygulama geliştirmeyi kolaylaştırır.</p>
                    </div>
                    <div className="skillCard">
                        <img src={Sql}></img>
                        <h5>Sql</h5>
                        <p>Verileri depolamak, yönetmek ve sorgulamak için kullanılan güçlü bir veritabanı sorgulama dilidir. Web, mobil ve kurumsal uygulamalarda yaygın olarak kullanılır.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skill;

import "./index.css";
import img from "../../Images/man.png"
function Project() {

    return (
        <div className="project">
            <div className="navbar">

            </div>
            <div className="body">
                <h3>My <span>projects</span></h3>
                <div className="cards">
                    <div className="card">
                        <h4>Web shopping</h4>
                        <p>Webshopping.uz, kullanıcıların çeşitli web elemanlarını hazır olarak bulabileceği ve kendi işlerinin web sitelerini kolayca hazırlayabileceği bir online alışveriş platformudur. Bu projeyi geliştirirken, kullanıcı dostu ve modern bir arayüz sunmayı hedefledik.
                        </p>
                        <a href="https://webshopping.uz/products">Project</a>
                    </div>
                    <div className="card">
                        <h4>RAPQON DRY FRUITS EXPORT</h4>
                        <p>DryFruitExport.uz, React.js, JavaScript ve CSS kullanılarak geliştirilmiş modern bir web platformudur. Kullanıcı dostu arayüzü ve dinamik tasarımı ile yüksek kaliteli kuru meyve ve kuruyemiş ihracatını kolaylaştırmayı hedefler.</p>
                        <a href="https://dryfruitexport.uz/">Project</a>
                    </div>
                    <div className="card">
                        <h4>Hastane Randevu Sistemi</h4>
                        <p>Bu projemiz bir hastane randevu sistemidir, kullanilan teknolojiler Swing, Java, Spring boot, Spring framework, Sql, Hibernate, JDBC, Maven gibi teknolojiler kulanildi. Kullanilan mimari turu "Katmanlı (Layered) Mimari</p>
                        <a href="https://github.com/21040001/Hastane-Randevu-sistemi">Project</a>
                    </div>
                    
                </div>
                <div className="cards">
                   
                    <div className="card">
                        <h4>Kim Tezroq</h4>
                        <p>Kim-Tezroq, Android Studio ve Java kullanılarak geliştirilmiş bir refleks ve hızlı düşünme oyunudur. Kullanıcıların en kısa sürede doğru yanıtları vermesini hedefleyen bu interaktif oyun, akıcı ve kullanıcı dostu bir deneyim sunar.</p>
                        <a href="https://github.com/21040001/Kim-Tezroq">Project</a>
                    </div>
                    <div className="card">
                        <h4>We started</h4>
                        <p>WeStarted, girişimciler ve işletmeler için modern çözümler sunan bir platformdur. React.js, JavaScript ve Firebase kullanılarak geliştirilmiş olup, kullanıcı dostu arayüzü ile dijital projelerinizi yönetmenize ve büyütmenize yardımcı olur.</p>
                        <a href="https://westarted.com.tr/">Project</a>
                    </div>
                    <div className="card">
                        <h4>Moda sari</h4>
                        <p>Moda-Sari, kullanıcıların en trend moda ürünlerini keşfetmesine ve alışveriş yapmasına olanak tanıyan bir e-ticaret platformudur. Android Studio ve Java kullanılarak geliştirilmiş olup, modern ve kullanıcı dostu bir alışveriş deneyimi sunar.</p>
                        <a href="https://github.com/21040001/Moda-sari">Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

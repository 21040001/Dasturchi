import "./index.css";
function Header() {

    return (
        <div className="header">
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
        </div>
    );
}

export default Header;

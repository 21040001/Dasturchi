import "./index.css";
function Header() {

    return (
        <div className="header">
            <div className="navbar">
                <button className="logo"></button>
                <div >
                    <span>Home</span>
                    <span>My courses</span>
                    <span>My blog</span>
                    <span>Contact me</span>
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

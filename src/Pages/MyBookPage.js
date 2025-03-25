import Footer from "../Components/BlogComponents/Footer";
import MyBooks from "../Components/MyBookCom";
import Header from "../Components/MyCourseComponents/Header";

function MyBookPage() {
    return(
        <div>
            <Header></Header>
            <hr/>
            <MyBooks></MyBooks>
            <hr/>
            <Footer></Footer>
        </div>
    )
}
export default MyBookPage;
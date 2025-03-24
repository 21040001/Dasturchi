import Header from "../Components/MyCourseComponents/Header";
import Navbar from "../Components/MyCourseComponents/Navbar";
import Body from "../Components/MyCourseComponents/Body";
import Footer from "../Components/BlogComponents/Footer";
import { Helmet } from "react-helmet-async";
function CoursePage() {
    return (
        <div>
            <Helmet>
                <title>Davronbek Abdurazzokov | Course</title>
                <meta name="description" content="Men birgalikda Dasturlashni har qanday bir to'lovlarsiz tekinga o'rganing" />
                <meta name="keywords" content="Davronbek's Courses, Abdurazzokov Course, portfolio, course, kurslar, Dasturchi, projects, proyektlar " />
                <meta property="title" content="Davronbek Abdurazzokov | Courses" />
                <meta property="type" content="website" />
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <Body></Body>
            <hr></hr>
            <Footer></Footer>
        </div>
    )
}
export default CoursePage;
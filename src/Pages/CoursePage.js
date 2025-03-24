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
                <meta name="description" content="Welcome to the portfolio of Davronbek Abdurazzokov. Explore my projects, courses and skills." />
                <meta name="keywords" content="Davronbek's Courses, Abdurazzokov Course, portfolio, course, kurslar, Dasturchi, projects, proyektlar " />
                <meta property="og:title" content="Davronbek Abdurazzokov | Courses" />
                <meta property="og:description" content="Course of Davronbek Abdurazzokov." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
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
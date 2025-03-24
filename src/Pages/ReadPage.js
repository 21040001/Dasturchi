import BlogHeader from "../Components/BlogComponents/Header";
import ReadBlog from "../Components/BlogComponents/ReadBlogs";
import Comments from "../Components/BlogComponents/Coments";
import Footer from "../Components/BlogComponents/Footer";
import { Helmet } from "react-helmet-async";
import "./style.css";
function ReadPage() {
    return (
        <div>
            <Helmet>
                <title>Davronbek Abdurazzokov | Read Blog</title>
                <meta name="description" content="Welcome to the portfolio of Davronbek Abdurazzokov. Explore my projects, courses and skills." />
                <meta name="keywords" content="Davronbek's Courses, Abdurazzokov Course, portfolio, course, Blog, kurslar, Dasturchi, projects, proyektlar " />
                <meta property="og:title" content="Davronbek Abdurazzokov | Courses" />
                <meta property="og:description" content="Blog of Davronbek Abdurazzokov." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <BlogHeader></BlogHeader>
            <ReadBlog></ReadBlog>
            <hr></hr>
            <Comments></Comments>
            <Footer></Footer>
        </div>
    )
}
export default ReadPage;
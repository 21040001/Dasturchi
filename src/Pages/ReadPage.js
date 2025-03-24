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
                <meta name="keywords" content="Davronbek's Courses, Abdurazzokov Course, portfolio, course, Blog, kurslar, Dasturchi, projects, proyektlar " />
                <meta property="title" content="Davronbek Abdurazzokov | Courses" />
                <meta property="description" content="Blog Sahifa | Davronbek Abdurazzokov" />
                <meta property="type" content="website" />
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
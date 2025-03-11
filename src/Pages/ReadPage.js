import BlogHeader from "../BlogComponents/Header";
import ReadBlog from "../BlogComponents/ReadBlogs";
import Comments from "../BlogComponents/Coments";
import Footer from "../BlogComponents/Footer";
import "./style.css";
function ReadPage() {
    return(
        <div>
            <BlogHeader></BlogHeader>
            <ReadBlog></ReadBlog>
            <hr></hr>
            <Comments></Comments>
            <Footer></Footer>
        </div>
    )
}
export default ReadPage;
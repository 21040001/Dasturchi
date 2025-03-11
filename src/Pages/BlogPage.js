import LastNews from "../BlogComponents/LastNews";
import News from "../BlogComponents/News";
import Footer from "../BlogComponents/Footer";
import BlogHeader from "../BlogComponents/Header";
function BlogPage() {
    return (
        <div>
            <BlogHeader></BlogHeader>
            <LastNews></LastNews>
            <News></News>
            <Footer></Footer>
        </div>
    )
}
export default BlogPage;
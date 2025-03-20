import LastNews from "../BlogComponents/LastNews";
import News from "../BlogComponents/News";
import Footer from "../BlogComponents/Footer";
import BlogHeader from "../BlogComponents/Header";
import { Helmet } from "react-helmet-async";
function BlogPage() {
    return (
        <div>
            <Helmet>
                <title>Davronbek Abdurazzokov | Blog</title>
                <meta name="description" content="Welcome to the portfolio of Davronbek Abdurazzokov. Explore my projects and skills." />
                <meta name="keywords" content="Davronbek's Blog, Abdurazzokov Blog, portfolio, blog, developer, projects " />
                <meta property="og:title" content="Davronbek Abdurazzokov | Blog" />
                <meta property="og:description" content="Check out the amazing Blog of Davronbek Abdurazzokov." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <BlogHeader></BlogHeader>
            <LastNews></LastNews>
            <News></News>
            <Footer></Footer>
        </div>
    )
}
export default BlogPage;
import LastNews from "../Components/BlogComponents/LastNews";
import News from "../Components/BlogComponents/News";
import Footer from "../Components/BlogComponents/Footer";
import BlogHeader from "../Components/BlogComponents/Header";
import { Helmet } from "react-helmet-async";
function BlogPage() {
    return (
        <div>
            <Helmet>
                <title>Davronbek Abdurazzokov | Blog</title>
                <meta name="keywords" content="Davronbek's Blog, Abdurazzokov Blog, portfolio, blog, developer, projects " />
                <meta property="title" content="Davronbek Abdurazzokov | Blog" />
                <meta property="description" content="Blog sahifamga xush kelibsiz! Bu yerda dasturlash olamiga bo'gliq bir biridan qiziqarli maqolalarni topa olasiz" />
                <meta property="type" content="website" />
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
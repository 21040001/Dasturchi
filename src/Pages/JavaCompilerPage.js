import Footer from "../Components/BlogComponents/Footer";
import Header from "../Components/MyCourseComponents/Header";
import JavaCompiler from "../Components/OnlineCompiler/Java/index";

function JavaCompilerPage() {
    return(
        <div>
            <Header></Header>
            <hr/>
            <JavaCompiler></JavaCompiler>
            <hr/>
            <Footer></Footer>
        </div>
    )
}
export default JavaCompilerPage;
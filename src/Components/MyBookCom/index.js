
import imgKapak from "../../Images/kapak.jpg"
import "./index.css"
function MyBooks() {
    return (
        <div className="myBook">
            <div className="body">
                <div class="cardB" >
                    <img src={imgKapak} class="card-img" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Java || Davronbek</h5>
                             <a href="/java.pdf" class="download">Download</a>
                        </div>
                </div>
            </div>
            
        </div>
    )

}
export default MyBooks;
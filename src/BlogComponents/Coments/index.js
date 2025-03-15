import "./index.css";
import img from "../../Images/git.png"
function Comments() {

    return (
        <div className="comments">
            <h3><b>Qoldirilgan fikrlar</b></h3>
            <ul>
                <li>
                    <div className="commentArea">
                        <img src={img} alt=""></img>
                        <div>
                            <h6>
                                <b>
                                Ronald
                                </b>
                            </h6>
                            <p className="zamon">
                            September 24, 2018 at 6:20 am
                            </p>
                            <p className="commentText">
                            When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay far from the plaza and in an untenanted portion of the great dead city I had little trouble in reaching the hills beyond.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <h3><b>O'z firkringni qoldiring</b></h3>
            <p>Emailingizni kiritgan holda fikrlaringizni yozib qoldiring</p>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comment <span>*</span></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="writeComment">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name<span>*</span></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Surname<span>*</span></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address<span>*</span></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Save my name, email, and website in this browser for the next time I comment.
                    </label>
            </div>
            <button>Fikrni joyla</button>
            
        </div>
    );
}

export default Comments;

import { Container, Row } from "reactstrap";
import img from "../../Images/Sign.png";
import { app } from "../../Firebase/firebase";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { user_fullname, user_email, username_action, user_password, userId, isSignIn } from "../../Redux/actions/actions";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import "./style.css";
function SignIn() {

    const auth = getAuth(app);
    const db = getFirestore(app);
    const dispatch = useDispatch();

    const [height, setHeight] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const seePassword = () => {
        const typeInput = document.getElementById("passwordInput").type;
        if (typeInput == "text") {
            document.getElementById("passwordInput").type = "password";
        } else {
            document.getElementById("passwordInput").type = "text";
        }
    }

    useEffect(() => {
        setHeight(window.innerHeight)
    })


    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const docRef = doc(db, "Users", userCredential.user.uid); 
                    const docSnap = await getDoc(docRef);
                    
                    if (docSnap.exists()) {
                        // Login qilingainida foydalanuvchining barcha ma'lumotlari Reduxga jo'natiladi va kerakli joylarda foydalnishni boshlashimiz mumkin
                        dispatch(userId(userCredential.user.uid));
                        dispatch(user_email(docSnap.data().email));
                        dispatch(user_fullname(docSnap.data().fullName));
                        dispatch(user_password(docSnap.data().password));
                        dispatch(username_action(docSnap.data().username));
                        dispatch(isSignIn(true));
                    } else {
                        // docSnap.data() will be undefined in this case
                        console.log("No such document!");
                    }
                })
            window.location.href = "/";
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="container_Sign_body " style={{ height:'100vh' }}>
            <Row >

                <img src={img} className="img_SignIn_Left"></img>

                <div className="rounded-4 card card_SignIn_firstCard" >
                    <div className="card rounded-4 card_SignIn_secondCard" >

                        <div className="mb-3">
                            <label className="form-label " >Email</label>
                            <input type="text" className="form-control input_SignIn_Rightusername" onChange={e => setEmail(e.target.value)} id="usernameInput" placeholder="Enter your email" />
                        </div>

                        <div className="position-relative ">
                            <label className="form-label">Password</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text " onClick={seePassword}>
                                <i class="bi bi-eye"></i>
                                </span>
                                <input type="password" className="form-control" id="passwordInput" onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required />
                                <div className="invalid-feedback">
                                    Enter your password
                                </div>
                            </div>
                        </div>

                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" >
                                Remember me !
                            </label>
                        </div>
                        <button className="btn btn-warning border border-secondary button_SignIn_Login" onClick={login} type="button">Login</button>
                    </div>
                    <a href="/forgot" className="a_SignIn_links"> <p className="text-center text-light mt-3 mb-1">Forgot password ?</p></a>
                    <a href="/signup" className="a_SignIn_links"><p className="text-center text-warning">Don't have an account ?</p></a>
                </div>


            </Row>
        </div>
    );
}

export default SignIn;
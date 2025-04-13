import { Container, Col, Row } from "reactstrap";
import img from "../../Images/Sign.png";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase/firebase";
import "./style.css";
function SignUp() {


    const [height, setHeight] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [fullname, setFullname] = useState();

    const db = getFirestore(app);
    const auth = getAuth(app);

    const seePassword = () => {
        const typeInput = document.getElementById("passwordInput").type;
        if (typeInput == "text") {
            document.getElementById("password1Input").type = "password";
            document.getElementById("passwordInput").type = "password";
        } else {
            document.getElementById("password1Input").type = "text";
            document.getElementById("passwordInput").type = "text";
        }
    }

    useEffect(() => {
        setHeight(window.innerHeight)
    })

    function validate(email, password, username, fullname) {
        if (!fullname) {
            alert("To'liq ismingizni kiriting!");
            return false;
        }
        if (!username) {
            alert("Foydalanuvchi ismingizni kiriting!");
            return false;
        }
        if (!email) {
            alert("Emailngizni kiriting!");
            return false;
        }
        if (!password) {
            alert("Parolingizni kiriting!");
            return false;
        }
        return true;
    }


    const signUpFonk = async () => {
        const isValid = validate(email, password, username, fullname);
        if (isValid) {

            await createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    try {
                        await setDoc(doc(db, "Users", userCredential.user.uid), {
                            fullname: fullname,
                            username: username,
                            email: email
                        });
                        window.location.href = "/signin"
                    } catch (e) {
                        console.error("Error writing document:", e);
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Signup error:", errorCode, errorMessage);
                });
            
        }
    }


    return (
        <div className="container_Sign_body " style={{ height: '100vh' }}>
            <Row>

                <img src={img} className="img_SignIn_Left"></img>

                <div className="rounded-4 card card_SignUp_firstCard" >
                    <div className="card rounded-4 card_SignUp_secondCard" >

                        <div className="mb-3">
                            <label className="form-label " >Fullname*</label>
                            <input type="text" className="form-control input_SignIn_Rightusername" onChange={e => setFullname(e.target.value)} id="fullnameInput" placeholder="Enter your fullname" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" >Username*</label>
                            <input type="text" className="form-control input_SignIn_Rightusername" onChange={e => setUsername(e.target.value)} id="usernameInput" placeholder="Enter your username" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" >Email*</label>
                            <input type="email" className="form-control input_SignIn_Rightusername" onChange={e => setEmail(e.target.value)} id="emailInput" placeholder="Enter your mail" />
                        </div>

                        <div className="position-relative">
                            <label className="form-label">Password*</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text " onClick={seePassword}>
                                    <i class="bi bi-eye"></i>
                                </span>
                                <input type="password" className="form-control" id="password1Input" placeholder="Enter your password" required />
                                <div className="invalid-feedback">

                                    Enter your password
                                </div>
                            </div>
                        </div>

                        <div className="position-relative mt-3">
                            <label className="form-label">Password*</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text " onClick={seePassword}>
                                    <i class="bi bi-eye"></i>
                                </span>
                                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="passwordInput" placeholder="Enter your password" required />
                                <div className="invalid-feedback">
                                    Enter your password
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-warning border border-secondary button_SignIn_Login" onClick={signUpFonk} type="button">Sign Up</button>
                    </div>
                    <a href="/signin" ><p className="text-center text-warning mt-4">Do have an account ?</p></a>
                </div>

            </Row>

        </div>
    );
}

export default SignUp;
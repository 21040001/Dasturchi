import { useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../Backgrounds/firebase";

function ForgotPassword() {
    const [height, setHeight] = useState()
    const [email, setEmail] = useState();

    const auth = getAuth(app);

    useEffect(() => {
        setHeight(window.innerHeight)
    })

    const handleClick = async (e) => {
        e.preventDefault();
        await sendPasswordResetEmail(auth, email)
        .then((data)=>{
            console.log(data);
            window.location.href = 'https://mail.google.com/mail';
        })
        .catch((error)=>{
            console.log(error)
        })
            .then(() => {

            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="divForgot forgotpass" style={{ height }}>
            <form onClick={handleClick}>
                <div className="w-100">
                    <div class="form-floating mb-3 inputPass mx-auto">
                        <input type="email" class="form-control" id="floatingInput" onChange={e => setEmail(e.target.value)} placeholder="name@example.com" />
                        <label >Your email address</label>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto inputBtn">
                        <input class="btn btn-primary" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
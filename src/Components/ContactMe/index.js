import React from "react";
import "./index.css"; // Stil dosyası
import { useTranslation } from 'react-i18next';
function Contact() {

    const { t, i18n } = useTranslation();

    return (
        <div className="contact">
            <div className="navbar" />
            <div className="contact-container">
                <div className="contact-box">
                    <h2>CONTACT ME</h2>
                    <p>
                    {t("TextContactME")} 
                    </p>
                    <div className="contact-info">
                        <h3>Address</h3>
                        <p>Altindag, Ankara, Turikiye</p>
                        <h3>Phone</h3>
                        <p>+90 534-295-3667</p>
                        <h3>Email</h3>
                        <p>Abdurazzoqovdavronbek3@gmail.com</p>
                    </div>
                </div>
                <div className="form-box">
                    <h4>GET IN TOUCH</h4>
                    <form>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating ">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating ">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">Phone Number</label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control " text="Leave a comment here" id="floatingTextarea2" ></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                        <input class="btn btn-primary" type="submit" value="Send message" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

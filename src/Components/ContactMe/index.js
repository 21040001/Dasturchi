import React, { useState } from "react";
import "./index.css"; // Stil dosyası
import { useTranslation } from "react-i18next";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase.js";
import { Helmet } from "react-helmet-async";
function Contact() {
  const { t } = useTranslation();
  const [isim, setIsim] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const submitButton = async (event) => {
    event.preventDefault(); // Sayfanın yenilenmesini önler

    try {
      await setDoc(doc(db, "Messages", "customID-" + email), {
        name: isim,
        number: number,
        email: email,
        message: message,
      });
      console.log("Belge başarıyla eklendi");
    } catch (e) {
      console.error("Hata oluştu: ", e);
    }
  };

  return (
    <div className="contact">
       <Helmet>
        <title>Contact - Davronbek Abdurazzokov</title>
        <meta name="description" content="Get in touch with me for collaborations and projects." />
        <meta name="keywords" content="Davronbek, Abdurazzokov, contact, email, projects" />
        <meta property="og:title" content="Contact Davronbek Abdurazzokov" />
        <meta property="og:description" content="Reach out to me for exciting projects and opportunities." />
      </Helmet>
      <div className="navbar" />
      <div className="contact-container">
        <div className="contact-box">
          <h2>CONTACT ME</h2>
          <p>{t("TextContactME")}</p>
          <div className="contact-info">
            <h3>Address</h3>
            <p>Altindag, Ankara, Türkiye</p>
            <h3>Phone</h3>
            <p>+90 534-295-3667</p>
            <h3>Email</h3>
            <p>Abdurazzoqovdavronbek3@gmail.com</p>
          </div>
        </div>
        <div className="form-box">
          <h4>GET IN TOUCH</h4>
          <form onSubmit={submitButton}>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                value={isim}
                onChange={(e) => setIsim(e.target.value)}
                placeholder="Name"
              />
              <label>Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <label>Email</label>
            </div>
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone Number"
              />
              <label>Phone Number</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave a comment here"
              ></textarea>
              <label>Comments</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { useSelector } from "react-redux";
import imgKapak from "../../Images/kapak.jpg";
import "./index.css";
import { useState, useEffect } from "react";
import { doc, setDoc, onSnapshot, getFirestore } from "firebase/firestore";
import { app } from "../../Firebase/firebase";

function MyBooks() {
  const [number, setNumber] = useState(0);

  const isSignIn = useSelector((state) => state.isSignInReducer);
  const uid = useSelector((state) => state.userIdReducer);
  const db = getFirestore(app);

  useEffect(() => {
    const docRef = doc(db, "Counts", "BookOfJavaDownloadNumbers");

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      if (data && data.number !== undefined) {
        setNumber(data.number);
      }
    });

    return () => unsubscribe();
  }, [db]);

  const link = async () => {
    if (isSignIn) {
      try {
        const updatedNumber = parseInt(number) + 1;

        await setDoc(doc(db, "Counts", "BookOfJavaDownloadNumbers"), {
          number: updatedNumber,
        });

        window.location.href = "/java.pdf";
      } catch (e) {
        console.error("Error writing document:", e);
      }
    } else {
      window.location.href = "/signin";
    }
  };

  return (
    <div className="myBook">
      <div className="body">
        <div className="cardB">
          <img src={imgKapak} className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Java || Davronbek</h5>
            <a onClick={link} className="download">
              Download
            </a>
            <h6 className="card-title" style={{ color: "white" }}>
              Number of downloads
            </h6>
            <h6 className="card-title" style={{ color: "white" }}>{number}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBooks;

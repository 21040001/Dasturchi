import React, { useState, useEffect } from 'react';
import jsonData from '../../../Data/Java.json';
import './index.css';

function Body() {
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [content, setContent] = useState('');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 750);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setData(jsonData.data);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 750);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam) {
      const foundDoc = jsonData.data
        .flatMap(collection => collection.documents)
        .find(doc => doc.Body === pageParam);
      if (foundDoc) {
        setSelectedDoc(foundDoc);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedDoc && selectedDoc.Body) {
      fetch(`/pages/${selectedDoc.Body}`)
        .then(response => response.text())
        .then(data => setContent(data))
        .catch(error => console.error('Error loading HTML content:', error));

      window.history.pushState({}, '', `?page=${selectedDoc.Body}`);

      if (isMobileView) {
        setShowPopup(true);
      }
    } else {
      fetch(`/pages/page1.html`)
        .then(response => response.text())
        .then(data => setContent(data))
        .catch(error => console.error('Error loading HTML content:', error));
    }
  }, [selectedDoc, isMobileView]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="Body">
      <div className="list">
        {data.map((item, index) => (
          <div key={item.collectionName} className="accordion-section">
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
              style={{
                cursor: 'pointer',
                backgroundColor: openAccordion === index ? '#333' : '#222',
                padding: '10px',
                color: 'white',
              }}
            >
              <strong>{item.collectionName}</strong>
            </div>

            {openAccordion === index && (
              <ul
                className="accordion-content"
                style={{
                  listStyle: 'none',
                  padding: '10px',
                  backgroundColor: '#1a1a1a',
                }}
              >
                {item.documents.map((doc) => (
                  <li
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    style={{
                      cursor: 'pointer',
                      padding: '5px',
                      color:
                        selectedDoc?.id === doc.id ? 'burlywood' : 'aliceblue',
                    }}
                  >
                    {doc.id}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {!isMobileView && (
        <div className="listBody">
          <div dangerouslySetInnerHTML={{ __html: content || '' }} />
        </div>
      )}

      {isMobileView && showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="popup-close" onClick={closePopup}>
              &times;
            </span>
            <div dangerouslySetInnerHTML={{ __html: content || '' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;

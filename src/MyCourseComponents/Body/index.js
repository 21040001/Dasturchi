
import React, { useState, useEffect } from 'react';
import jsonData from '../../Data/Java.json';
import './index.css';

function Body() {
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [content, setContent] = useState('');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 750);

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
    if (selectedDoc && selectedDoc.Body) {
      fetch(`/pages/${selectedDoc.Body}`)
        .then((response) => response.text())
        .then((data) => setContent(data))
        .catch((error) =>
          console.error('Error loading HTML content:', error)
        );
    } else {
      fetch(`/pages/page1.html`)
        .then((response) => response.text())
        .then((data) => setContent(data))
        .catch((error) =>
          console.error('Error loading HTML content:', error)
        );
    }
  }, [selectedDoc]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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

                    {/* Mobil görünümdeyse içerik buraya gömülür */}
                    {isMobileView &&
                      selectedDoc?.id === doc.id &&
                      content && (
                        <div
                          className="mobile-content"
                          style={{
                            padding: '10px',
                            marginTop: '10px',
                            backgroundColor: '#2a2a2a',
                            borderRadius: '5px',
                          }}
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Masaüstü görünümdeyse içerik sağda ayrı görünür */}
      {!isMobileView && (
        <div className="listBody">
          <div
            dangerouslySetInnerHTML={{ __html: content || '' }}
          />
        </div>
      )}
    </div>
  );
}

export default Body;

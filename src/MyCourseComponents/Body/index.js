import React, { useState, useEffect } from 'react';
import jsonData from '../../Data/Java.json'; // JSON dosyasını içeri aktarma
import './index.css';

function Body() {
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null); // Selected document state

  useEffect(() => {
    if (jsonData && jsonData.data) {
      setData(jsonData.data); // JSON verilerini duruma aktar
    } else {
      console.error("JSON verisi yüklenemedi veya beklenen formatta değil.");
    }
  }, []);
  
  useEffect(() => {
    if (selectedDoc && selectedDoc.Body) {
      fetch('http://localhost:3001/api/run-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scriptContent: selectedDoc.Body })
      })
      .then(response => response.text())
      .then(data => setSelectedDoc({ ...selectedDoc, fetchedBody: data }))
      .catch(error => console.error('Error running Node.js script:', error));
    }
  }, [selectedDoc]);

  return (
    <div className="Body">
      <div className="list">
        {data && data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.collectionName}>
                <strong>{item.collectionName}</strong>
                <ul>
                  {item.documents.map((doc) => (
                    <li
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc)} // Set the selected document on click
                      style={{ cursor: 'pointer', fontWeight: selectedDoc?.id === doc.id ? 'bold' : 'normal' }}
                    >
                      {doc.id}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>Veri yüklenemedi veya bulunamadı.</p>
        )}
      </div>
      <div className="listBody">
        <h2>{selectedDoc ? selectedDoc.id : 'Bir konu seçiniz.'}</h2>
        <div>
          {selectedDoc ? (
            <pre>{selectedDoc.Body}</pre>
          ) : (
            'Lütfen bir belge seçiniz.'
          )}
        </div>
      </div>
    </div>
  );
  
}

export default Body;

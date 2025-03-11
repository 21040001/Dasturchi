import React, { useState, useEffect } from 'react';
import jsonData from '../../Data/Java.json'; // JSON dosyasını içeri aktarma
import './index.css';

function Body() {
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null); // Selected document state
  const [content, setContent] = useState(''); // Loaded content

  useEffect(() => {
    setData(jsonData.data); // JSON verilerini duruma aktar
  }, []);

  useEffect(() => {
    if (selectedDoc && selectedDoc.Body) {
      fetch(`/pages/${selectedDoc.Body}`)
        .then(response => response.text())
        .then(data => setContent(data))
        .catch(error => console.error('Error loading HTML content:', error));
    }else{
      fetch(`/pages/page1.html`)
        .then(response => response.text())
        .then(data => setContent(data))
        .catch(error => console.error('Error loading HTML content:', error));
    }
  }, [selectedDoc]);

  return (
    <div className="Body">
      <div className="list">
        <ul>
          {data.map((item) => (
            <li key={item.collectionName}>
              <strong>{item.collectionName}</strong>
              <ul>
                {item.documents.map((doc) => (
                  <li
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)} // Set the selected document on click
                    style={{ cursor: 'pointer', color: selectedDoc?.id === doc.id ? 'burlywood' : 'aliceblue' }}
                  >
                    {doc.id}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="listBody">
        <div dangerouslySetInnerHTML={{ __html:  content || ""}} />
      </div>
    </div>
  );
}

export default Body;

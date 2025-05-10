import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function Diabet() {
  const [features, setFeatures] = useState({
    Age: '',
    Gender: '',
    Polyuria: '',
    Polydipsia: '',
    Sudden_weight_loss: '',
    Weakness: '',
    Polyphagia: '',
    Genital_thrush: '',
    Visual_blurring: '',
    Itching: '',
    Irritability: '',
    Delayed_healing: '',
    Partial_paresis: '',
    Muscle_stiffness: '',
    Alopecia: '',
    Obesity: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChangeI = (e) => {
    const { value } = e.target;
    setFeatures(prev => ({
      ...prev,
      Age: value
    }));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeatures({
      ...features,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    setPrediction(null);
    e.preventDefault();
    const valuesOnly = Object.values(features).map(val => Number(val));
    const trimmedValues = valuesOnly.slice(0, -1); // oxirgi elementni olib tashlaydi
    console.log(trimmedValues);

    try {
      const response = await axios.post('https://diabetapi.onrender.com/predict', {
        features: trimmedValues
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setPrediction(response.data.prediction);
      console.log('Prediction:', response.data.prediction);
    } catch (error) {
      console.error('Error fetching the prediction', error);
    }
  };




  return (
    <div className="diabet-container">
      <h1>Diabetes Prediction</h1>
      <form onSubmit={handleSubmit}>

        {/* Age Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Yaşınızı giriniz?</div>
          <div className="card-body">
            <div class="col">
              <input type="number" class="form-control" placeholder="Yaş" aria-label="Yaş" onChange={handleChangeI} />
            </div>
          </div>
        </div>

        {/* Gender Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Cinsiyetiniz nedir?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Gender" value="1" onChange={handleChange} />
              <label className="form-check-label">Erkek</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Gender" value="0" onChange={handleChange} />
              <label className="form-check-label">Kadin</label>
            </div>
          </div>
        </div>

        {/* Polyuria Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Sık sık idrara çıkıyor musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Polyuria" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Polyuria" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Polydipsia Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Sürekli susuzluk hissediyor musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Polydipsia" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Polydipsia" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Sudden Weight Loss Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Son zamanlarda hızla kilo kaybettiniz mi?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Sudden_weight_loss" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Sudden_weight_loss" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Weakness Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Genel zayıflık hissediyor musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Weakness" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Weakness" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Polyphagia Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Sürekli açlık hissediyor musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Polyphagia" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Polyphagia" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Genital Thrush Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Genital bölgede mantar enfeksiyonu sıkça yaşar mısınız?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Genital_thrush" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Genital_thrush" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Visual Blurring Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Görmeniz bulanık mı?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Visual_blurring" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Visual_blurring" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Itching Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Vücudunuzda sık sık kaşıntı hissediyor musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Itching" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Itching" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Irritability Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Son zamanlarda sinirli veya huysuz musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Irritability" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Irritability" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Delayed Healing Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Yaralarınız ve kesikleriniz normalden daha uzun sürede iyileşiyor mu?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Delayed_healing" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Delayed_healing" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Partial Paresis Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Vücudunuzun bir kısmında güç kaybı veya hareket zorluğu yaşıyor musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Partial_paresis" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Partial_paresis" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Muscle Stiffness Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Kaslarınızda sertlik veya gerginlik hissediyor musunuz?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Muscle_stiffness" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Muscle_stiffness" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Alopecia Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Son zamanlarda saç dökülmesi yaşadınız mı?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Alopecia" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Alopecia" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Obesity Field */}
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Fazla kilonuz var mı?</div>
          <div className="card-body">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Obesity" value="1" onChange={handleChange} />
              <label className="form-check-label">Evet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Obesity" value="0" onChange={handleChange} />
              <label className="form-check-label">Hayir</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Prediction result */}
      {prediction !== null && (
        <div>
          <h2>Prediction: {prediction[0] === 1 ? 'Diabetic' : 'Not Diabetic'}</h2>
        </div>
      )}

    </div>
  );
}

export default Diabet;

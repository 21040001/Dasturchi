import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Roots/App';
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from './Roots/i18next.js';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import {store} from "./Redux/reducers/configureStore"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>

);

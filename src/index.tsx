import React from 'react';
import ReactDOM from 'react-dom/client';
import RecorridoGrafos from './RecorridoGrafos';
import './Styles/Styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecorridoGrafos />
  </React.StrictMode>
);


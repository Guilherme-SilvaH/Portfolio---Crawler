import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { forecast } from './Api/Forecast';

const cidade = 'Campinas';
forecast(cidade);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
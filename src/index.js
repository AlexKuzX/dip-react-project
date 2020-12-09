import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/slick-carousel/slick/slick"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './css/slider.css';
import './css/main.css';

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
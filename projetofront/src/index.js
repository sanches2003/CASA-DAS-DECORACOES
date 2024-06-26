import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import 'bootswatch/dist/journal/bootstrap.css'
import 'toastr/build/toastr.min.js';
import 'toastr/build/toastr.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
  <MainRoutes></MainRoutes> 
  </BrowserRouter>
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

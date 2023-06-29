import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import Header from './routes/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
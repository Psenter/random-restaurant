import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import Header from './routes/Header';
import Appetizers from './routes/Appetizers';
import Navbar from './routes/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Appetizers />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

import Header from './routes/Header';
import Navbar from './routes/Navbar';
import Appetizers from './routes/Appetizers';
import Lunch from './routes/Lunch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
  </React.StrictMode>
);
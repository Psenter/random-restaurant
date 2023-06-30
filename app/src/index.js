//imports what i need from react
import React from "react";
import ReactDOM from "react-dom/client";

//imports bootstrap and my css file
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

//imports all my functions that make up the app
import Header from "./routes/Header";
import Navbar from "./routes/Navbar";
import Appetizers from "./routes/Appetizers";
import Lunch from "./routes/Lunch";
import Dinner from "./routes/Dinner";

//renders my files onto the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Appetizers />
    <Lunch />
    <Dinner />
  </React.StrictMode>
);

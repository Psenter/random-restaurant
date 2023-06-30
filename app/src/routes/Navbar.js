import React from "react";

//exports my navbar to be rendered on the DOM
export default function Navbar() {
  return (
    <nav className="navbar bg-lightblue">
      <div className="container justify-content-center">
        <button className="border-bottom border-dark ps-3 pe-3">Home</button>
        <button className="border-bottom border-dark ps-3 pe-3">Appetizers</button>
        <button className="border-bottom border-dark ps-3 pe-3">Lunch</button>
        <button className="border-bottom border-dark ps-3 pe-3">Dinner</button>
      </div>
    </nav>
  );
}

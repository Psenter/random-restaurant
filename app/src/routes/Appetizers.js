//imports what I need
import React, { useEffect, useState } from "react";
import axios from "axios";

//exports my function
export default function Appetizers() {
  //sets state to show the appetizer data
  const [appetizers, setAppetizers] = useState([]);

  useEffect(() => {
    //makes the call to the API
    axios.get("http://127.0.0.1:8000/menu/menu/").then((response) => {
      //sets setAppetizers to the data from API
      setAppetizers(response.data);
    });
  }, []);

  //filters out all data that isnt in the appetizer category
  const appItems = appetizers.filter((item) => item.category === "Appetizer");

  //returns the displayed data
  return (
    <>
      <h1 className="text-center text-color-lb pt-5">Appetizers</h1>
      <div className="row">
        {/* maps through the data array and puts it into divs */}
        {appItems.map((item) => (
          <div
            key={item.id}
            className="col-6 text-center text-color-lb pt-5 ps-5 pe-5"
          >
            <h2 className="card-title">{item.title}</h2>
            <div>Category: {item.category}</div>
            <div>Description: {item.description}</div>
            <div>{item.price}</div>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

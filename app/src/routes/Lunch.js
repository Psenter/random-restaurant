//imports what I need
import React, { useEffect, useState } from "react";
import axios from "axios";

//exports my function
export default function Lunch() {
  //sets state to the data
  const [lunch, setLunch] = useState([]);

  
  useEffect(() => {
    //makes the call to the API
    axios.get("https://www.jsonkeeper.com/b/MDXW").then((response) => {
      //sets setAppetizers to the data from API
      setLunch(response.data);
    });
  }, []);

  //filters out all data that isnt 
  const lunchItems = lunch.filter((item) => item.category === "Lunch");

  //returns the displayed data
  return (
    <>
      <h1 className="text-center text-color-lb pt-5">Lunch</h1>
      <div className="row">
        {/* maps through the data array and puts it into divs */}
        {lunchItems.map((item) => (
          <div
            key={item.id}
            className="col-6 text-center text-color-lb pt-5 ps-5 pe-5"
          >
            <h2 className="card-title">{item.title}</h2>
            <h4>Category: {item.category}</h4>
            <h5>Description: {item.description}</h5>
            <h6>{item.price}</h6>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
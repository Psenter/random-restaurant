//imports what I need from react and axios
import React, { useEffect, useState } from "react";
import axios from "axios";

//exports my function so it can be rendered
export default function Lunch() {
  //sets state to show the lunch data
  const [lunch, setLunch] = useState([]);

  //useEffect is a hook that allows me to fetch data
  useEffect(() => {
    //makes the call to the API
    axios.get("https://www.jsonkeeper.com/b/MDXW").then((response) => {
      //sets setLunch to the data from API
      setLunch(response.data);
    });
  }, []);

  //filters out all data that isnt in the lunch category
  const lunchItems = lunch.filter((item) => item.category === "Lunch");

  //returns the displayed data to be rendered on DOM
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

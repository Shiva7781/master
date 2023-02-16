import "./Classes.css";
import React from "react";
import data from "../db.json";

const Classes = () => {
  console.log("data:", data);

  return (
    <div>
      <h1>Classes</h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        officiis ipsa magnam voluptatibus sed porro labore culpa pariatur.
      </p>

      <div className="Cards">
        {data.map((item, i) => {
          const { ID, ImageUrl, Name, ShortDesc } = item;

          return (
            <div key={ID} className="Card">
              <img src={ImageUrl} alt="" />
              <h3>{Name}</h3>
              <p>{ShortDesc}</p>
              <button>View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;

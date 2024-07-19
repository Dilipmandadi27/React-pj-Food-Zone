import React from "react";
import { BASE_URL } from "../../App";

const FetchedData = ({ data }) => {
  return (
    <section className="foodcards-container">
      <div className="foodcards">
        {data?.map((food) => (
            <div className="foodcard" key={food.name} >
            <div className="food_image">
              <img src={BASE_URL + food.image} alt="food-image" />
            </div>
            <div className="food_info">
                <div className="info">
                <h3>{food.name} </h3>
                <p>{food.text}</p>
            </div>
            <button className="btn">${food.price.toFixed(2)}</button>
            </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default FetchedData;


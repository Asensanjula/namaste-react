import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/resData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);

  useEffect(() => {
    console.log("useEffect Renders!")
  }, [])

  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard resData={listOfRestaurant} />
      </div>
    </div>
  );
};

export default Body;

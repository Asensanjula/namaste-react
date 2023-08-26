import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/resData";
import { useState, useEffect } from "react";
import { SWIGGY_DATA } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(listOfRestaurant);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_DATA);

    const json = await data.json();
    let filteredRestaurants = json.data.cards
      .filter((x) => x.card.card.hasOwnProperty("info"))
      .map((x) => x.card.card.info);

    // console.log(filteredRestaurants);

    setListOfRestaurant(
      json.data.cards
        .filter((x) => x.card.card.hasOwnProperty("info"))
        .map((x) => x.card.card.info)
    );
  };

  return (
    <div className="body">
      <div className="res-container">
        {listOfRestaurant?.map((res) => {
          return <RestaurantCard resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;

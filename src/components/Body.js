import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/resData";
import { useState, useEffect } from "react";
import { SWIGGY_DATA } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [originalResList, setOriginalResList] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(originalResList);
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_DATA);

    const json = await data.json();
    let filteredRestaurants = json.data.cards
      .filter((x) => x.card.card.hasOwnProperty("info"))
      .map((x) => x.card.card.info);

    // console.log(filteredRestaurants);

    setListOfRestaurant(filteredRestaurants);
    setOriginalResList(filteredRestaurants);
  };

  const searchRestaurants = () => {
    console.log(originalResList);
    let filteredRestaurant = originalResList?.filter((res) =>
      res?.name.toLowerCase().includes(searchText?.toLowerCase())
    );
    setListOfRestaurant(filteredRestaurant);
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="searchBtn" onClick={searchRestaurants}>
          Search
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant?.map((res) => {
          return <RestaurantCard key={res.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;

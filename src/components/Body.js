import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_DATA } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [originalResList, setOriginalResList] = useState([]);

  const onlineStatus = useOnlineStatus();

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

  if(!onlineStatus) return <h1>User is Offline!. Please check the Internet Connection!!!</h1>

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
          return (
            <Link key={res.id} to={"/restaurant/" + res.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

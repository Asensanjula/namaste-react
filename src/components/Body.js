import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_DATA } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const [originalResList, setOriginalResList] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
    console.log(originalResList);
  }, []);

  console.log("list of res ", listOfRestaurant);
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

  if (!onlineStatus)
    return <h1>User is Offline!. Please check the Internet Connection!!!</h1>;

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-text mx-1 my-3 border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className=" px-4 py-1 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:shadow-indigo-500/40 text-white rounded" 
          onClick={searchRestaurants}>
          Search
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-between">
        {listOfRestaurant?.map((res) => {
          return (
            <Link key={res.id} to={"/restaurant/" + res.id} className="flex m-4 w-[200px] rounded-[10px] shadow-md transition cursor-pointer">
              
              {
                res?.promoted ? <RestaurantCardPromoted resData={res}/> : <RestaurantCard resData={res} />
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

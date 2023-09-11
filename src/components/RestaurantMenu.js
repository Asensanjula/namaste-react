import { useEffect, useState } from "react";
import { SWIGGY_DATA_RESTAURANT_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState({});
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(SWIGGY_DATA_RESTAURANT_MENU + resId);
    let jsonData = await data.json();

    console.log(jsonData);

    let filteredData = jsonData.data.cards
      .filter((x) => x?.card?.card.hasOwnProperty("info"))
      .map((x) => x.card.card.info);

    // console.log(jsonData.data.cards[0].card.card.info);
    setMenu(filteredData);
  };

  console.log(menu);

  return (
    <div className="res-menu">
      <h1>{menu[0]?.name}</h1>

    </div>
  );
};

export default RestaurantMenu;

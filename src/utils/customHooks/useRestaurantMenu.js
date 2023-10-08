import { useState,useEffect } from "react";
import { SWIGGY_DATA_RESTAURANT_MENU } from "../constants";

/**
 * 
    Custom hook 
    follow the Single Responsibility Principle
    Now this hook is responsible for fetch the Menu only.
 */
const useRestaurantMenu = (resId) => {

    const [menu, setMenu] = useState([]);
    const [Categories, setCategories] = useState([]);
    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        let data = await fetch(SWIGGY_DATA_RESTAURANT_MENU + resId);
        let jsonData = await data.json();
    
        console.log(jsonData);
    
        let filteredData = jsonData.data.cards
          .filter((x) => x?.card?.card.hasOwnProperty("info"))
          .map((x) => x.card.card.info);
    
        // console.log(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

        let itemCategories = jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
        .filter(card => card?.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        .map(x => x.card?.card);
        
        setMenu(filteredData);
        setCategories(itemCategories);

        console.log("Categories ",Categories);
        console.log("Menu ",menu);
      };



    return [menu, Categories];

}

export default useRestaurantMenu;
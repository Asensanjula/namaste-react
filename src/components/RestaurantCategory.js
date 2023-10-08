import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  console.log("Res Category Data ", data);
  const [showItems, setShowItems] = useState(false);

  const handleAccordian = () => {
    setShowItems(!showItems);
  };
  return (
    <>
      <div className="category-header w-6/12 bg-gray-100 shadow-md p-4 my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleAccordian}
        >
          <span className="text-gray-900 font-bold">
            {data?.title} ({data.itemCards.length})
          </span>
          <label className="">🔽</label>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};

export default RestaurantCategory;

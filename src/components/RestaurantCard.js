import { RES_LOG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card flex flex-col p-2">
      <img className="res-logo h-[214px] w-full object-cover rounded-[10px]" src={RES_LOG + resData.cloudinaryImageId} />
      <h3 className="res-name font-semibold">{resData?.name}</h3>
      <p className="res-cuisines text-sm my-2 text-gray-500">{resData?.cuisines?.join(", ")}</p>
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white rounded px-4 py-1 mt-auto">Read More</button>
    </div>
  );
};

/**
 * 
 * Higher Order Component for Promoted
 */

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => 
    ( <>
      <label className="absolute p-1 bg-black text-gray-200 rounded text-sm">Promoted</label>
      <RestaurantCard {...props}/>
    </>
    );
  ;
};

export default RestaurantCard;

import { RES_LOG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card flex flex-col p-2">
      <img className="res-logo h-[214px] w-full object-cover rounded-[10px]" src={RES_LOG + resData.cloudinaryImageId} />
      <h3 className="res-name font-semibold text-lg ">{resData?.name}</h3>
      <p className="res-cuisines text-sm my-2">{resData?.cuisines?.join(", ")}</p>
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white rounded px-4 py-1 mt-auto">Read More</button>
    </div>
  );
};

export default RestaurantCard;

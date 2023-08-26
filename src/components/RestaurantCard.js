import { RES_LOG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" src={RES_LOG + resData.cloudinaryImageId} />
      <h3 className="res-name">{resData?.name}</h3>
      <p className="res-cuisines">{resData?.cuisines?.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;

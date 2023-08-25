import { RES_LOG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RES_LOG + resData.data.cloudinaryImageId}
      />
      <h3>{resData?.data.name}</h3>
      <h3>{resData?.data.cuisines}</h3>
    </div>
  );
};

export default RestaurantCard;

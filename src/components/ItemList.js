import { RES_LOG } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="">
      {items?.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="border-b-2 border-gray-200 py-2 mt-2 mx-2 flex justify-between items-center"
          >
            <div>
              <p className="text-md font-semibold text-gray-600 my-1">
                {item.card.info.name}
              </p>
              <p className="text-sm">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <div>
              {item.card.info.imageId ? (
                <img
                  className="h-[96px] w-[118px] object-cover rounded-[6px]"
                  src={RES_LOG + item.card.info.imageId}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

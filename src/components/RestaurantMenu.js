import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [menu, setMenu] = useState({});
  const { resId } = useParams();

  const [menu, Categories] = useRestaurantMenu(resId);
  console.log(menu);
  console.log("Inside Menu categories ",Categories);

  const { name , cuisines} = menu.length > 0 ? menu[0] : [];

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="font-bold text-lg bg-cyan-400  p-2 rounded text-white">{name}</h1>
      <p className="p-4 text-gray-400">{cuisines?.join(", ")}</p>

      {
        Categories.map( card => {
              return (
                <RestaurantCategory data={card} key={card.title}/>
              );
          }
          )
      }
    </div>
  );
};

export default RestaurantMenu;

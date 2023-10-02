import logo from "../../resources/img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between">
      <div className="logo-container">
        <img className="logo w-36" src={logo} />
      </div>
      <div className="nav-items flex items-center mr-8">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "💚" : "💔"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

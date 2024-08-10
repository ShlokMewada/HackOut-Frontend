import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    dispatch(removeUser());
  };
  return (
    <div className="p-8">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="text-xl font-bold ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-bold ">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-bold ">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-bold ">
            Cart
          </Link>
        </li>
        <li>
          <button onClick={handleSignOut} className="text-xl font-bold ">
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

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
    <div className="p-8 bg-gradient-to-b from-green-600 to-green-200">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="text-xl font-bold text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-bold text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-bold text-white">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-bold text-white">
            Cart
          </Link>
        </li>
        <li>
          <button
            onClick={handleSignOut}
            className="text-xl font-bold text-white"
          >
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

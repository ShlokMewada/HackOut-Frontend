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
    <div className="w-full flex justify-between p-6 bg-gradient-to-b from-black absolute z-10">
      <div>
        <img src="C:\Users\HyderAli\OneDrive\Desktop\HackOut-Frontend\HackOut-Frontend\src\assest\logo-removebg-preview.png" alt="logo"/>
      </div>
      <div>
        <ul className="flex gap-x-20">
          <li>
            <Link to="/" className="text-xl font-bold text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-xl font-bold text-white hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/yield-analysis" className="text-xl font-bold text-white hover:underline">
              Yield Analysis
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-bold text-white hover:underline">
              Cart
            </Link>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="text-xl font-bold text-white hover:underline"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

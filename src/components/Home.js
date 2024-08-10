import { Outlet } from "react-router-dom";
import Header from "./Header";
import useAuth from "../hooks/useAuth";

const Home = () => {
  // useAuth();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;

import { Outlet } from "react-router-dom";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
import Footer from "./Footer";

const Home = () => {
  // useAuth();
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;

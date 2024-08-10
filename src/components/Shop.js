import Footer from "./Footer";
import Header from "./Header";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-32">
        <h1 className="text-6xl text-center font-extrabold text-white drop-shadow-lg">
          Our Products
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-16 px-8 md:px-16 lg:px-24">
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;

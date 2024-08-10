import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div className="bg-black">
      <h1 className="text-xl font-bold">Products</h1>
      <div className="flex flex-wrap gap-3">
        <ProductCard />
      </div>
    </div>
  );
};

export default Shop;

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ productData }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart(productData));
  };
  return (
    <div>
      <div className="flex w-[400px] flex-col gap-y-2 items-center hover:scale-105 transition-all duration-200 justify-center border-2 border-blue-600 rounded-lg p-4">
        <img src="" alt="" />
        <h1>Product Name</h1>
        <p>Product decription</p>
        <p>Product Price</p>
        <div className="flex gap-x-2">
          <button
            className="text-xl p-2 font-semibold border-2 bg-yellow-500 rounded-lg"
            onClick={() => {
              console.log("purchase method will come here");
            }}
          >
            Purchase
          </button>
          <button
            onClick={addItem}
            className="flex gap-x-1 items-baseline p-2 border-2 bg-green-600 rounded-lg"
          >
            <p className="text-xl font-semibold">Add</p>
            <i className="fa-solid fa-plus fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

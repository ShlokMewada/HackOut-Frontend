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
      <div className=""></div>
      <button
        onClick={() => {
          console.log("purchase method will come here");
        }}
      >
        Purchase
      </button>
      <button onClick={addItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default ProductCard;

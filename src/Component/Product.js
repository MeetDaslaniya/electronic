import React from "react";
import { Data } from "./Data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  // initialize wishlist
  const initialwishlist = () => {
    let wishlist = localStorage.getItem("wishlist");
    wishlist = JSON.parse(wishlist);
    const myArray = [];
    if (wishlist === myArray) {
      return [];
    } else {
      return wishlist;
    }
  };

  // initilize cart
  const initialcart = () => {
    let cartdata = localStorage.getItem("cartitem");
    cartdata = JSON.parse(cartdata);
    const myArray = [];
    if (cartdata === myArray) {
      return [];
    } else {
      return cartdata;
    }
  };

  const [cart, setCart] = useState(initialcart);
  const [wishlist, setWishlist] = useState(initialwishlist);
  useEffect(() => {
    localStorage.setItem("cartitem", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const { id } = useParams();
  return (
    <div>
      <img src={Data[id - 1].img} alt="img" />

      {Data[id - 1].id}
      {Data[id - 1].name}
      {Data[id - 1].Reating}
      {Data[id - 1].price}

      <button
        onClick={() => {
          setCart([...cart, Number(id)]);
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          setWishlist([...wishlist, Number(id)]);
        }}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default Product;

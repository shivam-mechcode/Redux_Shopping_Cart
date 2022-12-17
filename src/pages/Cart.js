import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    console.log(productId);
    dispatch(remove(productId));
    // return products;
  };
  console.log(products);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

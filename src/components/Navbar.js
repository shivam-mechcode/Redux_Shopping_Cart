import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link
          style={{ margin: "2rem", textDecoration: "none", color: "black" }}
          className="nowLink"
          to="/"
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          className="nowLink"
          to="/cart"
        >
          Cart
        </Link>
        <span className="cartCount">Cart Items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;

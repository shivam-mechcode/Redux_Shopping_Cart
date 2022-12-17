import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="heading">Welcome to Redux Toolkit Store</h2>
      <section>
        {" "}
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;

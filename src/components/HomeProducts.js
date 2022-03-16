import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";

const HomeProducts = () => {
  const { products } = useGlobalContext();

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "2rem" }}>Dress Up</h2>
      <div className="products">
        {products.slice(0, 3).map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              className="link"
              key={product.id}
            >
              <img src={product.image} alt={product.title} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomeProducts;

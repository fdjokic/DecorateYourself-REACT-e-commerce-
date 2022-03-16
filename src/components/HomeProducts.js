import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";

const HomeProducts = () => {
  const { products, product_loading: loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="products">
      {products.slice(0, 3).map((product) => {
        return (
          <Link to={`/product/${product.id}`} className="link" key={product.id}>
            <img src={product.image} alt={product.title} />
          </Link>
        );
      })}
    </div>
  );
};

export default HomeProducts;

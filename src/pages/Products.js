import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import Product from "../components/Product";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useFilterContext } from "../context/filterContext";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import PageHero from "../components/PageHero";

const productsVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Products = () => {
  const { products, product_loading } = useGlobalContext();
  const { filtered_products } = useFilterContext();

  if (product_loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <PageHero title="Products" />
      <section className="filters-products">
        <Filters />
        <LazyMotion features={domAnimation}>
          <motion.section
            layout
            className="products"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filtered_products.map((product) => {
              const { id } = product;
              return (
                <Link to={`/product/${id}`} className="link" key={id}>
                  <Product key={id} product={product} />
                </Link>
              );
            })}
          </motion.section>
        </LazyMotion>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .filters-products {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
  }
  .products {
    width: 60vw;
    min-height: 80vh;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;
export default Products;

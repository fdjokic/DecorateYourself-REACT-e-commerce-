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
import { GiClick } from "react-icons/gi";

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
                  <GiClick className="click-hover" />
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
  margin-bottom: 5rem;
  .filters-products {
    display: flex;
    flex-wrap: wrap;

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
    position: relative;
    transition: 0.3s;
  }
  .link:hover .click-hover {
    opacity: 1;
    transition: 0.3s;
    z-index: 50;
  }

  .click-hover {
    position: absolute;
    top: 40%;
    left: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    background: black;
    opacity: 0;
    cursor: pointer;
    transition: 0.3s;
  }
  .link:hover {
    transform: scale(0.9);
    transition: 0.3s;
    opacity: 0.8;
  }
  @media only screen and (max-width: 843px) {
    .products {
      width: 90vw;
    }
  }
`;
export default Products;

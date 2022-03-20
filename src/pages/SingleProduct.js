import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import Loading from "../components/Loading";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import PageHero from "../components/PageHero";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    fetchSingleProduct,
    single_product: product = {},
    single_product_loading: loading,
  } = useGlobalContext();

  const {
    title,
    price,
    description,
    id: amountId,
    image,
    rating = {},
  } = product;
  const { rate = "", count = "" } = rating;

  useEffect(() => {
    fetchSingleProduct(`https://fakestoreapi.com/products/${id}`);
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <PageHero title={title} product={product} />
      <div className="container">
        <div className="img-btns">
          <img src={image} alt="product" />
          <AddToCart product={product} />
        </div>
        <div className="content-container">
          <h3>{title}</h3>
          <span className="price">${price}</span>
          <Stars rate={rate} count={count} />
          <p className="desc">{description}</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  .container {
    color: black;
    width: 70%;
    display: flex;
    margin: 3rem auto;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  img {
    height: 25rem;
    width: 25rem;
    object-fit: contain;
  }
  .img-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .price {
    color: #cc9966;
    border: 1px solid #cc9966;
    margin-bottom: 0.5rem;
    padding: 0.3rem;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    h3 {
      width: 70%;
      text-align: center;
      margin-bottom: 1rem;
    }
    p {
      text-align: center;
      margin-top: 2rem;
      width: 60%;
      border-right: 2px solid black;
      border-left: 2px solid black;
      padding: 1.5rem;
    }
  }

  @media only screen and (max-width: 1450px) {
    .content-container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 992px) {
  }
  @media only screen and (max-width: 768px) {
  }
`;
export default SingleProduct;

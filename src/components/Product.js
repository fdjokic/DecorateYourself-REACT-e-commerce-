import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
const Product = ({ product }) => {
  const {
    title,
    image,
    category,
    price,
    rating: { count, rate },
    description,
  } = product;
  return (
    <Wrapper>
      <article>
        <div className="img-title">
          <img src={image} alt="item" />
          <h5>{title.slice(0, 20)}...</h5>
        </div>
        <div className="bottom-part">
          <h6>{category}</h6>
          <p>${price}</p>
        </div>
        <div className="desc">{description.slice(0, 60)}...</div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  article {
    border: 3px solid transparent;
    border-radius: 15px;

    border-image: linear-gradient(grey, #414a4c, black);

    border-image-slice: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 10rem;
    height: 15rem;
    transition: 0.4s;
  }
  h5 {
    margin-top: 0.5rem;
    text-align: center;
  }
  .img-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 8.5rem;
    border-bottom: 2px solid black;
  }
  img {
    height: 6rem;
    object-fit: contain;
    width: 6rem;
  }
  .bottom-part {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h6 {
      text-transform: capitalize;
    }
    p {
      color: #c96;
      width: fit-content;
      border-radius: 10px;
      padding: 0.2rem;
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
  .desc {
    font-size: 0.7rem;
  }
  article:hover {
    transform: scale(0.9);
    transition: 0.4s;
  }
`;
export default Product;

import React from "react";
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
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  article {
    border-radius: 15px;

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
    height: 14.5rem;
    border-bottom: 2px solid black;
  }
  img {
    height: 11rem;
    object-fit: contain;
    width: 8rem;
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
`;
export default Product;

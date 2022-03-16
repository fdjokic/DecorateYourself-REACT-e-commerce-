import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";
const Stars = ({ rate = {}, count = {} }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rate > number ? (
          <BsStarFill />
        ) : rate > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">
        {tempStars} by {count} customer reviews
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: black;
    font-size: 1rem;
    padding: 0.1rem 0.2rem;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;

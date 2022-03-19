import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title = "", product }) => {
  return (
    <Wrapper>
      <div>
        <h3>
          <Link to="/" className="link-style">
            Home
          </Link>{" "}
          {product && (
            <Link to="/products" className="link-style">
              / Products
            </Link>
          )}{" "}
          / {title.slice(0, 10)}
          {title.length > 10 && <span> ...</span>}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  justify-content: flex-start;
  align-items: center;
  min-height: 5vh;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  font-size: 0.7rem;
  color: white;
  .link-style {
    text-decoration: none;
    color: khaki;
  }
  div {
    margin: 0.5rem;
    width: 80%;
    h3 {
      margin-left: 2rem;
    }
  }
`;
export default PageHero;

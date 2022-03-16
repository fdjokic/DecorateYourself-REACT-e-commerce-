import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div>
        <h3>
          <Link to="/" className="link">
            Home
          </Link>{" "}
          {product && (
            <Link to="/products" className="link">
              /Products
            </Link>
          )}{" "}
          /{title}
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
  min-height: 10vh;
  background-color: grey;
  font-size: 1.5rem;
  color: white;
  .link {
    text-decoration: none;
    color: black;
  }
  div {
    margin: 0.5rem;
    h3 {
      margin-left: 2rem;
    }
  }
`;
export default PageHero;

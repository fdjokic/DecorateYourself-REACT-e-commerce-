import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h6>
        <span>&copy;</span> {new Date().getFullYear()}{" "}
        <span>Decorate Yourself</span> All Rights Reserved
      </h6>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #2d2e2d;
  width: 100vw;
  max-width: 100%;

  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h6 {
    color: white;
    text-align: center;
  }
  span {
    margin: 0 0.5rem;
  }
`;
export default Footer;

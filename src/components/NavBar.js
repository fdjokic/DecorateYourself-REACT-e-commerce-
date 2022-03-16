import React, { useState } from "react";
import styled from "styled-components";
import { links } from "../constants/constants";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import { useCartContext } from "../context/cartContext";

const NavBar = () => {
  const { openSidebar } = useGlobalContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper>
      <div className="nav-text">
        <div className="links">
          {links.map((link) => {
            return (
              <Link to={link.url} key={link.id} className="link">
                {link.title}
              </Link>
            );
          })}
        </div>
        <svg
          className="svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openSidebar}
        >
          <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
        </svg>
        <Link to="/" className="heading-2">
          <h2>Decorate Yourself</h2>
        </Link>
        <div>
          <BiUserPlus className="icon" />

          <Link to="/cart" className="link">
            <span className="icon">
              <BsCart4 />
              <span className="amount">{total_items}</span>
            </span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  max-width: 100%;
  background: transparent;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;

  .heading-2 {
    color: black;
    text-decoration: none;
  }
  .amount {
    position: absolute;
    top: -20%;
    right: -50%;
    padding: 0.2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    width: 0.8rem;
    height: 0.8rem;
    font-size: 0.8rem;
    color: white;
    border-radius: 50%;
    background-color: black;
  }
  .nav-text {
    padding: 0.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .links {
    display: flex;
    gap: 3rem;
  }
  .link {
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: 0.4s;
  }
  .link:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  .icon {
    position: relative;
    font-size: 1.5rem;
    margin-right: 2rem;
    cursor: pointer;
  }
  .svg {
    display: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 992px) {
    .nav-text {
      padding: 0.5srem;
      justify-content: space-around;
      width: 100%;
    }
    .links {
      display: none;
    }
    h2 {
      font-size: 1.3rem;
    }
    .icon {
      margin-right: 1rem;
    }
    .svg {
      display: block;
    }
  }
  @media only screen and (max-width: 768px) {
    .links {
      display: none;
    }
    .svg {
      display: block;
    }
  }
`;
export default NavBar;

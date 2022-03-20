import React from "react";
import styled from "styled-components";
import { links } from "../constants/constants";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import { useCartContext } from "../context/cartContext";
import { motion } from "framer-motion";

const svgVariants = {
  initial: {
    rotate: -100,
  },
  animate: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 0.5,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

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
        <motion.svg
          variants={svgVariants}
          animate="animate"
          initial="initial"
          className="svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openSidebar}
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
          ></motion.path>
        </motion.svg>
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
  display: flex;
  justify-content: center;
  align-items: center;
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
    display: flex;
    height: 4rem;
    width: 100vw;
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
    margin-right: 1rem;
    cursor: pointer;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 992px) {
    .nav-text {
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
      font-size: 1.3rem;
      margin-right: 0.6rem;
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
  @media only screen and (max-width: 280px) {
    .heading-2 {
      font-size: 1rem;
      h2 {
        font-size: 0.9rem;
      }
    }
    .icon {
      font-size: 1rem;
    }
    .svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    .amount {
      width: 0.5rem;
      height: 0.5rem;
      font-size: 0.5rem;
    }
  }
`;
export default NavBar;

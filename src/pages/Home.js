import React, { useState, useEffect } from "react";
import { services } from "../constants/constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeProducts from "../components/HomeProducts";
import { BiCircle } from "react-icons/bi";

const Home = () => {
  const [index, setIndex] = useState(1);
  const imgs = [1, 2, 3];
  console.log(index);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((oldIndex) => {
        if (oldIndex === imgs.length) {
          setIndex(1);
        }
        return oldIndex + 1;
      });
    }, 7000);

    return () => clearTimeout(timeout);
  }, [index]);

  const handleImgs = (index) => {
    setIndex(index + 1);
  };
  return (
    <Wrapper>
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + `/assets/hero${index}.jpg`}
          alt="hero-img"
        />
        <div className="img-circles">
          {imgs.map((img, idx) => {
            return (
              <BiCircle
                key={idx}
                onClick={() => handleImgs(idx)}
                className={idx + 1 === index ? "circle-active" : null}
                style={{ cursor: "pointer" }}
              />
            );
          })}
          <div className="text-and-button">
            <div className="text-grey">
              <h2>Create Your Style of Life!</h2>
              <p>Show Us Your True Self</p>
            </div>
            <Link to="/products" className="shop-btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="slider-products">
        <HomeProducts />
        <Link to="/products" className="check-btn">
          check it out
        </Link>
      </div>
      <div className="services">
        {services.map((item, index) => {
          const { icon, text, title } = item;
          return (
            <div className="service-circle" key={index}>
              <h5 className="service-title">{title}</h5>
              <div className="service-icon">{icon}</div>
              <p className="service-text">{text}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;

  .img-container {
    width: 100vw;
    max-width: 100%;
    height: 80vh;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100vw;
      max-width: 100%;
      height: 80vh;
    }
  }
  .text-grey {
    border-radius: 10px;
    text-align: center;
    padding: 1rem;
    font-size: 0.9rem;
    color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  .img-circles {
    position: absolute;
    bottom: 20%;
    left: 50%;
    width: 6rem;
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    color: white;
  }
  .circle-active {
    border-radius: 50%;
    background-color: white;
  }
  .slider-products {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .link {
      margin-bottom: 2rem;
      transition: 2s;
    }
    .link:hover {
      transition: 2s;
      transform: rotateY(360deg);
    }
    .check-btn {
      margin-top: 2rem;
      background: #2d2e2d;
      align-self: center;
      padding: 1rem;
      border-radius: 40px;
      text-decoration: none;
      text-align: center;
      color: white;
      transition: 0.2s;
      text-transform: capitalize;
      width: 10rem;
    }
    .check-btn:hover {
      color: khaki;
    }
    img {
      height: 15rem;
      width: 15rem;
      object-fit: contain;
    }
  }
  .text-and-button {
    color: #ff0000;
    position: absolute;
    bottom: 550%;
    left: -120%;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
  }

  .shop-btn {
    margin-top: 2rem;
    background: #2d2e2d;
    padding: 1rem;
    border-radius: 40px;
    text-decoration: none;
    color: white;
    transition: 0.2s;
  }
  .shop-btn:hover {
    color: khaki;
  }
  .services {
    max-width: 90%;
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 8rem auto;
  }
  .service-circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: white;
    background: #2d2e2d;
    width: 15rem;
    margin-top: 1rem;
    height: 15rem;
    border-radius: 50%;
    transition: 0.5s;
  }
  .service-circle:hover {
    opacity: 0.9;
    transition: 0.5s;
  }
  .service-title {
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  .service-icon {
    font-size: 2rem;
  }
  .service-text {
    text-align: center;
  }
  @media only screen and (max-width: 668px) {
    .img-circles {
      left: 40%;
    }
  }
`;
export default Home;

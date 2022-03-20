import React, { createContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id } = product;
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();
  const decrease = () => {
    if (amount === 1) {
      setAmount(1);
    } else {
      setAmount((oldAmount) => {
        return oldAmount - 1;
      });
    }
  };

  const increase = () => {
    if (amount === 10) {
      setAmount(10);
    } else {
      setAmount((oldAmount) => {
        return oldAmount + 1;
      });
    }
  };
  return (
    <Wrapper>
      <div className="inc-dec">
        <button className="amount-btn" onClick={decrease}>
          <AiOutlineMinus />
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={increase}>
          <AiOutlinePlus />
        </button>
      </div>
      <Link to="/cart" className="add">
        <button onClick={() => addToCart(id, amount, product)}>
          Add To Cart
        </button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  .inc-dec {
    width: 7rem;
    display: flex;
    justify-content: space-between;
  }
  .amount-btn {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .amount {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .add {
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    background: black;
    margin: 1rem 0;
    button {
      background-color: transparent;
      color: white;
      border: none;
    }
  }
`;
export default AddToCart;

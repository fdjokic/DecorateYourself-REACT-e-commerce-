import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const { cart, removeItem, total_amount, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      {cart.length < 1 ? (
        <div className="empty-cart">
          <h2>Your cart appears to be empty.</h2>
          <Link className="link" to="/products">
            see products
          </Link>
        </div>
      ) : (
        <section className="items">
          {cart.map((item) => {
            const { id, image, name, price, amount } = item;
            return (
              <div key={id} className="container">
                <img src={image} alt={name} />
                <h4>{name.slice(0, 20)}...</h4>
                <p className="amount">{amount}</p>
                <span className="price">${price}</span>
                <AiOutlineDelete onClick={() => removeItem(id)} />
              </div>
            );
          })}
        </section>
      )}
      {cart.length > 0 && (
        <div className="cart-totals">
          <div className="subtotal">
            <h4>Subtotal :</h4>
            <p>${total_amount.toFixed(2)}</p>
          </div>
          <div className="shipping">
            <h4>Shipping Fee:</h4>
            <p>${shipping_fee}</p>
          </div>
          <div className="total">
            <h3>Order Total:</h3>
            <p>${(shipping_fee + total_amount).toFixed(2)}</p>
          </div>
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  .cart-totals {
    border-radius: 5px;
    padding: 2rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30rem;
    border: 2px solid grey;
    height: fit-content;
    margin: 2rem;
  }
  .subtotal {
    display: flex;
    justify-content: space-evenly;
  }
  .shipping {
    display: flex;
    color: grey;
    justify-content: space-evenly;
  }
  .total {
    display: flex;
    justify-content: space-evenly;
  }
  .items {
    display: inline-block;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 2rem;
    width: 80vw;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    max-height: 70vh;
    min-height: fit-content;
  }
  .items::-webkit-scrollbar {
    background-color: white;
    width: 8px;
  }
  .items::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
  }

  img {
    max-width: 4rem;
  }
  .container {
    display: flex;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
    width: 70vw;
    max-width: 100%;
  }
  .amount {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .price {
    color: #cc9966;
    font-weight: bold;
  }
  .empty-cart {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 4rem;
    .link {
      background-color: black;
      padding: 0.6rem;
      border-radius: 15px;
      margin-top: 2rem;
      color: white;
      text-decoration: none;
      text-transform: capitalize;
    }
  }
  @media only screen and (max-width: 1200px) {
    .items {
      width: 100%;
      height: 50%;
      margin-right: 2rem;
      font-size: 0.8rem;
      .container {
        width: 95%;
        width: 100vw;
        margin: 1rem;
      }
      img {
        height: 70%;
      }
    }
    .cart-totals {
      margin: 2rem auto;
      width: 60%;
    }
  }
  @media only screen and (max-width: 992px) {
    height: fit-content;
    .items {
      width: 90%;
      margin: 1rem 0;
    }

    display: block;
  }
  @media only screen and (max-width: 768px) {
    height: 90vh;
    .container {
      width: 100%;
    }
    .amount {
      font-size: 1rem;
    }
  }
  @media only screen and (max-height: 520px) {
    .items {
      height: 30%;
    }

    .cart-totals {
      height: 7rem;
    }
  }
  @media only screen and (max-width: 520px) {
    .container {
      img {
        height: 50%;
      }
      font-size: 0.7rem;
    }
  }
`;
export default Cart;

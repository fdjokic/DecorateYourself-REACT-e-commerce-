import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 5,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // add item to cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};

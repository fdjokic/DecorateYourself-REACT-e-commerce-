import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/reducer";
import axios from "axios";
import { urlProducts as url } from "../helpers/helpers";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  LOAD_PRODUCTS,
} from "../actions.js";
const AppContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  product_loading: false,
  product_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios(url);
      const products = response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    const data = await axios(url);
    console.log(data.data);
    const singleProduct = data.data;
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        closeSideBar,
        openSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

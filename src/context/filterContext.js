import { useContext, useEffect, useReducer } from "react";
import React from "react";
import { filterReducer } from "../reducers/filterReducer";
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useGlobalContext } from "./context";

const FilterContext = React.createContext();

const initialState = {
  filtered_products: [],
  all_products: [],

  filters: {
    text: "",
    sort: "-",
    min_price: 0,
    max_price: 0,
    price: 0,
    category: "all",
  },
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { products } = useGlobalContext();

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "price") {
      value = parseFloat(value);
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [products, state.filters]);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, updateFilters, handleSubmit, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

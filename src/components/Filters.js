import React from "react";
import styled from "styled-components";
import { getUniqueValue } from "../helpers/helpers";
import { useGlobalContext } from "../context/context";
import { useFilterContext } from "../context/filterContext";

const Filters = () => {
  const { products } = useGlobalContext();
  const {
    handleSubmit,
    updateFilters,
    clearFilters,
    filters: { min_price, price, max_price, text, category, sort },
  } = useFilterContext();

  const categories = getUniqueValue(products, "category");
  console.log(price);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h3>Filters</h3>
        <div className="text">
          <input
            type="text"
            className="text-input"
            onChange={updateFilters}
            name="text"
            value={text}
            placeholder="Search"
          />
        </div>
        <div className="categories">
          <label htmlFor="category">Categories</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={updateFilters}
          >
            {categories.map((category, index) => {
              return (
                <option value={category} key={index}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="sorting">
          <label htmlFor="sort">Sort</label>
          <select name="sort" id="sort" value={sort} onChange={updateFilters}>
            <option value="-">-</option>
            <option value="price-lowest">price-lowest</option>
            <option value="price-highest">price-highest</option>
            <option value="name a-z">name a-z</option>
            <option value="name z-a">name z-a</option>
          </select>
        </div>
        <div className="price">
          <label htmlFor="price">Price</label>
          <div>
            <span>${min_price}</span>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              id="price"
              step="0.01"
              onChange={updateFilters}
            />
            <span>${price}</span>
          </div>
        </div>
        <button className="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 20rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: fixed;
    width: 20rem;
  }
  .clear-filters {
    background-color: black;
    padding: 0.3rem;
    border: none;
    color: white;
    border-radius: 5px;
  }
  .text-input {
    border-radius: 15px;
    padding: 7px;
    font-weight: bold;
    font-size: 0.8rem;
    border: 2px solid grey;
    outline: none;
  }
  @media only screen and (max-width: 840px) {
    form {
      position: relative;
    }
  }
  @media only screen and (max-width: 653px) {
    form {
      position: relative;
      width: 80%;
      margin: 0 auto;
    }
  }
`;
export default Filters;

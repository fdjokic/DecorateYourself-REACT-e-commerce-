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
        <h4>Filters</h4>
        <div className="text">
          <input
            type="text"
            onChange={updateFilters}
            name="text"
            value={text}
            placeholder="Search"
          />
        </div>
        <div className="categories">
          <label htmlFor="category">
            Categories
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
          </label>
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
  width: 15vw;
  border: 2px solid black;
  .clear-filters {
    background-color: #800000;
    padding: 0.3rem;
    border: none;
    color: white;
    border-radius: 5px;
  }
`;
export default Filters;

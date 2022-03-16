import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      maxPrice.toFixed(2);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { category, price, sort, text } = state.filters;

      let tempProducts = [...all_products];
      tempProducts = tempProducts.filter((item) => item.price <= price);

      if (category !== "all") {
        tempProducts = tempProducts.filter((item) => {
          return item.category === category;
        });
      }
      if (sort !== "-") {
        if (sort === "price-lowest") {
          tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        }
        if (sort === "price-highest") {
          tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }
        if (sort === "name a-z") {
          tempProducts = tempProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        }
        if (sort === "name z-a") {
          tempProducts = tempProducts.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        }
      }
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.title.toLowerCase().includes(text.toLowerCase());
        });
        return { ...state, filtered_products: tempProducts };
      }
      return { ...state, filtered_products: tempProducts };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          price: state.filters.max_price,
          sort: "-",
          category: "all",
        },
      };
    default:
      return state;
  }
};

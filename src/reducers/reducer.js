import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions.js";

const reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, product_loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, product_loading: false };
    case GET_PRODUCTS_ERROR:
      return { ...state, product_loading: false, product_error: true };
    case GET_SINGLE_PRODUCT_BEGIN:
      return { ...state, single_product_loading: true };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product: action.payload,
        single_product_loading: false,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };

    default:
      return state;
  }
};
export default reducer;

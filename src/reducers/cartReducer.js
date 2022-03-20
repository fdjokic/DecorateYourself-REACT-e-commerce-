import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
} from "../actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, amount, product } = action.payload;
      const exist = state.cart.find((cartItem) => cartItem.id === id);
      if (exist) {
        const tempCart = state.cart.map((x) => {
          if (x.id === id) {
            let newAmount = x.amount + amount;
            return { ...x, amount: newAmount };
          } else {
            return x;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id,
          name: product.title,
          image: product.image,
          price: product.price,
          amount,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case REMOVE_CART_ITEM:
      const newItems = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newItems };
    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += amount * price;
          return total;
        },
        { total_items: 0, total_amount: 0 }
      );
      return { ...state, total_amount, total_items };
    default:
      return state;
  }
};

export default cartReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => {
        return (item.id !== action.payload);
      });
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;


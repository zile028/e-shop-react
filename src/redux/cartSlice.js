import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let cartIndex = null;
      console.log(action.payload);
      let product = { ...action.payload };
      let founded = state.cart.find((el, index) => {
        cartIndex = index;
        return (el.id = parseInt(product.id));
      });
      if (founded) {
        state.cart[cartIndex].count = state.cart[cartIndex].count + 1;
      } else {
        product.count = 1;
        state.cart.push(product);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

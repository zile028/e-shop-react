import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    changeAmount: (state, { payload }) => {
      state.cart[payload.index].count += payload.increment;
      if (state.cart[payload.index].count === 0) {
        state.cart.splice(payload.index, 1);
      }
    },
    addToCart: (state, action) => {
      let cartIndex = null;
      let product = { ...action.payload };
      let founded = state.cart.find((el, index) => {
        cartIndex = index;
        return el.id === parseInt(product.id);
      });
      if (founded) {
        state.cart[cartIndex].count = state.cart[cartIndex].count + 1;
        state.cart[cartIndex].total =
          state.cart[cartIndex].count * state.cart[cartIndex].price;
      } else {
        product.count = 1;
        product.total = product.price;
        state.cart.push(product);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart.splice(payload, 1);
    },
  },
});

export const { addToCart, changeAmount, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

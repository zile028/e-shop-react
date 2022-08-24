import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    productsStore: productSlice,
    cartStore: cartSlice,
  },
});
export default store;

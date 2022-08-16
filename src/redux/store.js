import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
export default store;

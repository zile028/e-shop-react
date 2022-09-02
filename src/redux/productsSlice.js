import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filtered: [],
    category: [],
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
      state.filtered = [...payload];
    },
    setCategory: (state, action) => {
      let cat = new Set();
      state.products.forEach((el) => {
        cat.add(el.category);
      });
      state.category = [...cat];
    },

    setFiltered: (state, { payload }) => {
      console.log(payload);
      state.filtered = payload;
    },
  },
});

export const { setProducts, setFiltered, setCategory } = productsSlice.actions;
export default productsSlice.reducer;

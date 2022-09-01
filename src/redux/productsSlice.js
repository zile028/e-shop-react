import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		filtered: []
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
			state.filtered = [...action.payload]
		},
		setFiltered: (state, {payload}) => {
			state.filtered = state.products.filter(el => (payload.category === null ? true : el.category === payload.category) && el.price < payload.priceLimit)
		}
	},
});

export const {setProducts, setFiltered} = productsSlice.actions;
export default productsSlice.reducer;

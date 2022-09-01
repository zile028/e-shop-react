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
		},
		setFiltered: (state, action) => {
			console.log(action.payload)
		}
	},
});

export const {setProducts, setFiltered} = productsSlice.actions;
export default productsSlice.reducer;

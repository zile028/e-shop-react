import {useEffect, useState} from "react";
import "./filterProduct.scss";
import {useDispatch, useSelector} from "react-redux";
import {setFiltered} from "../../redux/productsSlice";

function FilterProduct() {
	const [filter, setFilter] = useState({
		category: null,
		priceLimit: 0
	});
	const dispatch = useDispatch()
	const {filtered} = useSelector(state => state.productsStore)

	useEffect(() => {
		console.log(filtered)
	}, [filtered])

	function applyFilter() {
		dispatch(setFiltered(filter))
	}

	function onInputHandler(e) {
		let copyFilter = {...filter}
		copyFilter[e.target.name] = e.target.value
		setFilter(copyFilter)
	}

	return (
	  <div className="filter-wrapper">
		  <button>Filter</button>
		  <div className="filter-options">
			  <select
				name="category"
				className="filter-options-category"
				defaultValue={"default"}
				onChange={onInputHandler}
			  >
				  <option value={"default"} disabled>
					  Category
				  </option>
				  <option value="smartphones">smartphones</option>
				  <option value="laptops">laptops</option>
			  </select>
			  <div className="filter-options-price">
				  <span>Price less then:</span><span>{filter.priceLimit}$</span>
				  <input type="range" min={0} max={3000} name="priceLimit" onChange={onInputHandler}/>
			  </div>
			  <button onClick={applyFilter}>Apply</button>
		  </div>
	  </div>
	);
}

export default FilterProduct;

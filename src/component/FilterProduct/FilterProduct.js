import {useState} from "react";
import "./filterProduct.scss";
import {useDispatch} from "react-redux";
import {setFiltered} from "../../redux/productsSlice";

function FilterProduct() {
	const [filter, setFilter] = useState({});
	const dispatch = useDispatch

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
				  <option value="Phone">Phone</option>
				  <option value="Laptop">Laptop</option>
			  </select>
			  <div className="filter-options-price">
				  <span>Price less then:</span><span>0$</span>
				  <input type="range" min={0} max={300000} name="priceLimit" onChange={onInputHandler}/>
			  </div>
			  <button onClick={applyFilter}>Apply</button>
		  </div>
	  </div>
	);
}

export default FilterProduct;

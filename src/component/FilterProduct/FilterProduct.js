import React from "react";
import "./filterProduct.scss";
function FilterProduct() {
  return (
    <div className="filter-wrapper">
      <button>Filter</button>
      <div className="filter-options">
        <select className="filter-option-category" name="" id="">
          <option defaultChecked disabled>
            Category
          </option>
          <option value="">Phone</option>
          <option value="">Laptop</option>
        </select>
        <div className="filter-option-price">
          <input type="range" min={0} max={100} />
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;

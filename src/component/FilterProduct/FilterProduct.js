import { useEffect, useState } from "react";
import "./filterProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setFiltered } from "../../redux/productsSlice";
import { useSearchParams } from "react-router-dom";
import { useDelayUnmount } from "../../hooks/useDelayUnmount";

function FilterProduct() {
  const { category } = useSelector((state) => state.productsStore);
  const [searchParam, setSearchParam] = useSearchParams();
  const [filter, setFilter] = useState({
    category: null,
    priceLimit: 0,
  });
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const renderFilter = useDelayUnmount(isMounted, 300);
  const mountedStyle = {
    animationName: "inFilter",
    animationDuration: "300ms",
    transformOrigin: "left top",
  };

  const unmountedStyle = {
    animationName: "outFilter",
    animationDuration: "320ms",
    transformOrigin: "left top",
  };

  useEffect(() => {
    dispatch(setCategory());
  }, []);

  function applyFilter() {
    dispatch(setFiltered(filter));
    setSearchParam({ ...searchParam, page: 1 });
    setIsMounted(false);
  }

  function onInputHandler(e) {
    let copyFilter = { ...filter };
    copyFilter[e.target.name] = e.target.value;
    setFilter(copyFilter);
  }

  return (
    <div className="filter-wrapper">
      <button onClick={() => setIsMounted(!isMounted)}>Filter</button>
      {renderFilter && (
        <div
          style={isMounted ? mountedStyle : unmountedStyle}
          className="filter-options"
        >
          <select
            name="category"
            className="filter-options-category"
            defaultValue={"default"}
            onChange={onInputHandler}
          >
            <option value={"default"} disabled>
              Category
            </option>
            {category.map((el, index) => {
              return (
                <option key={index} value={el}>
                  {el}
                </option>
              );
            })}
            {/* <option value="laptops">laptops</option> */}
          </select>
          <div className="filter-options-price">
            <span>Price less then:</span>
            <span>{filter.priceLimit}$</span>
            <input
              type="range"
              min={0}
              max={3000}
              name="priceLimit"
              onChange={onInputHandler}
            />
          </div>
          <button onClick={applyFilter}>Apply</button>
        </div>
      )}
    </div>
  );
}

export default FilterProduct;

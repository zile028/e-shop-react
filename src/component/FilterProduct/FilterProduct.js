import { useEffect, useState } from "react";
import "./filterProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setFiltered } from "../../redux/productsSlice";
import { useSearchParams } from "react-router-dom";
import { useDelayUnmount } from "../../hooks/useDelayUnmount";
import useFilter from "../../hooks/useFilter";
import { FilterAnimate } from "../../Animation/Animation";

function FilterProduct() {
  const dispatch = useDispatch();
  const { products, category } = useSelector((state) => state.productsStore);
  const [searchParam, setSearchParam] = useSearchParams();
  const [filter, setFilter] = useState({
    category: null,
    priceLimit: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const renderFilter = useDelayUnmount(isMounted, 300);
  const filteredProduct = useFilter({
    products: [...products],
    category: filter.category,
    priceLimit: filter.priceLimit,
  });

  useEffect(() => {
    dispatch(setCategory());
  }, []);

  function onInputHandler(e) {
    let copyFilter = { ...filter };
    copyFilter[e.target.name] = e.target.value;
    setFilter(copyFilter);
  }

  function applyFilter() {
    dispatch(setFiltered(filteredProduct));
    setParam((filteredProduct.length % 4) * 4);
    setIsMounted(false);
  }

  function resetFilter() {
    setFilter({
      category: null,
      priceLimit: 0,
    });
    dispatch(setFiltered(products));
    setParam(20);
    setIsMounted(false);
  }

  function setParam(pageSize) {
    setSearchParam({ pageSize: pageSize, page: 1 });
  }

  return (
    <div className="filter-wrapper">
      <button
        onClick={() => {
          setIsMounted(!isMounted);
        }}
      >
        Filter
      </button>
      {renderFilter && (
        <div
          style={isMounted ? FilterAnimate.mounted : FilterAnimate.unmounted}
          className="filter-options"
        >
          <select
            name="category"
            className="filter-options-category"
            onChange={onInputHandler}
            value={filter.category ? filter.category : "default"}
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
              value={filter.priceLimit}
            />
          </div>
          <button className="btn-tomato" onClick={resetFilter}>
            Reset
          </button>
          <button className="btn-black" onClick={applyFilter}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterProduct;

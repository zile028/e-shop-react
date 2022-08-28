import React from "react";
import { useSelector } from "react-redux";
import "./paggination.scss";

function Paggination({ setSearchParam }) {
  const { products } = useSelector((state) => state.productsStore);
  const setPage = (num) => {
    setSearchParam({ page: num });
  };

  const numBox = () => {
    let tempBox = [];
    for (let i = 0; i < Math.ceil(products.length / 8); i++) {
      tempBox.push(
        <button key={i} className="box" onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      );
    }
    return tempBox;
  };

  return (
    <div className="pagination-wrapper">
      <div className="pagination-boxes">
        <button className="box">
          <i className="fa-solid fa-angles-left"></i>
        </button>
        {numBox()}
        <button className="box">
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Paggination;

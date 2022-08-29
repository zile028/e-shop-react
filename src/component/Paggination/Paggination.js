import React from "react";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import "./paggination.scss";

function Paggination({ totalPge, currentPage, onChangePage, siblingCount }) {
  const pagination = usePagination();

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

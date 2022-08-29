import React from "react";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import "./paggination.scss";

function Paggination({ totalPge, currentPage, onChangePage, siblingCount }) {
  const paginationRange = usePagination({
    currentPage: 1,
    pageSize: 8,
    totalCount: 100,
    siblingCount: 1,
  });

  if (currentPage === 1 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="pagination-wrapper">
      <div className="pagination-boxes">
        <button className="box">
          <i className="fa-solid fa-angles-left"></i>
        </button>

        <button className="box">
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Paggination;

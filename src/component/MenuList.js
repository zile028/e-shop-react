import React from "react";
import { NavLink } from "react-router-dom";
import { initSearch } from "../pages/ShopPage";

export default function MenuList() {
  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to={`/shop?pageSize=${initSearch.pageSize}&page=${initSearch.page}`}
        >
          Shop
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
function Logo() {
  return (
    <NavLink className="navbar-brand" to="/">
      <img src={logo} alt="" />
    </NavLink>
  );
}

export default Logo;

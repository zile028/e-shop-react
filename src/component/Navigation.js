import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import CartList from "./CartList";
import { useDelayUnmount } from "../hooks/useDelayUnmount";

function Navigation() {
  const { cart } = useSelector((state) => state.cartStore);
  const [isMounted, setIsMounted] = useState(false);
  const loc = useLocation();

  const shouldRenderChild = useDelayUnmount(isMounted, 300);
  const mountedStyle = { animation: "inAnimation 300ms linear" };
  const unmountedStyle = { animation: "outAnimation 310ms linear" };

  useEffect(() => {
    console.log(loc.pathname);
    setIsMounted(false);
  }, [loc.pathname]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {shouldRenderChild && (
            <CartList style={isMounted ? mountedStyle : unmountedStyle} />
          )}
          <ul className="navbar-nav ms-auto">
            <MenuList />
            <li className="cart-icon nav-item">
              <NavLink
                className="nav-link"
                to="/cart"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMounted(!isMounted);
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                {cart.length > 0 && <span>{cart.length}</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

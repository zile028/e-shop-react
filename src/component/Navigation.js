import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import CartList from "./CartList";

function Navigation() {
  const { cart } = useSelector((state) => state.cartStore);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <nav className="navbar navbar-expand-lg">
      <CartList />
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
          <ul className="navbar-nav ms-auto">
            <MenuList />
            <li className="cart-icon nav-item">
              <NavLink
                className="nav-link"
                to="/cart"
                onClick={(e) => {
                  !cart.length && e.preventDefault();
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

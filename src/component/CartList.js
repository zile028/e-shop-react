import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Amount from "./Amount/Amount";

function CartList({ style }) {
  const { cart } = useSelector((state) => state.cartStore);
  const list = cart.map((el, index) => {
    return (
      <div className="cart-list-ads" key={index}>
        <img src={el.thumbnail} alt="" />
        <div>
          <p>{el.title}</p>
          <p>${el.price}</p>
        </div>
        <div className="amount-wrapper">
          <Amount increment={1} index={index} />
          <p>{el.count}</p>
          <Amount increment={-1} index={index} />
        </div>
      </div>
    );
  });

  return (
    <div className="cart-list" style={style}>
      <h5>Cart list</h5>
      <div className="cart-list-ads-wrapper">{list}</div>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default CartList;

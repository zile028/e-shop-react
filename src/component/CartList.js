import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeAmount } from "../redux/cartSlice";

function CartList({ style }) {
  const { cart } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();

  const onClickChangeAmount = (amount, index) => {
    dispatch(changeAmount({ amount, index }));
  };

  const list = cart.map((el, index) => {
    return (
      <div className="cart-list-ads" key={index}>
        <img src={el.thumbnail} alt="" />
        <div>
          <p>{el.title}</p>
          <p>${el.price}</p>
        </div>
        <div>
          <span onClick={() => onClickChangeAmount(1, index)}>+</span>
          <p>{el.count}</p>
          <span onClick={() => onClickChangeAmount(-1, index)}>-</span>
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

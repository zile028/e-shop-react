import React from "react";
import { useSelector } from "react-redux";

function CartList() {
  const { cart } = useSelector((state) => state.cartStore);
  const list = cart.map((el, index) => {
    return <div key={index}>{el.title}</div>;
  });
  return (
    <div className="cart-list">
      <h5>Cart list</h5>
      {list}
    </div>
  );
}

export default CartList;

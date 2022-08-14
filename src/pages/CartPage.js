import React, { useEffect, useState } from "react";
import CartProduct from "../component/CartProduct";
import Header from "../component/Header";

const intitialTotal = { price: null, item: null, quantity: null };

function CartPage({ cart, removeFromCart }) {
  const [total, setTotal] = useState(intitialTotal);

  useEffect(() => {
    let tempTotal = { ...intitialTotal };
    cart.forEach((el) => {
      tempTotal.price += el.price * el.count;
      tempTotal.quantity += el.count;
    });
    tempTotal.item = cart.length;
    setTotal(tempTotal);
  }, [cart]);

  const productsLayout = () => {
    return cart.map((el, index) => {
      return (
        <CartProduct
          product={el}
          removeFromCart={removeFromCart}
          index={index}
          key={el.id}
        />
      );
    });
  };

  return (
    <>
      <Header title={"my cart"} />
      <section className="cart-page container py-5">
        <aside>
          <ul className="list-group">
            <li className="list-group-item">
              Total item: <span>{total.item}</span>{" "}
            </li>
            <li className="list-group-item">
              Total quantity: <span>{total.quantity}</span>{" "}
            </li>
            <li className="list-group-item">
              Total price: <span>${total.price}</span>
            </li>
            <li className="list-group-item">
              <button className="btn btn-danger w-100">CHECKOUT</button>
            </li>
          </ul>
        </aside>
        <article className="bg-light p-2 rounded-2">{productsLayout()}</article>
      </section>
    </>
  );
}

export default CartPage;

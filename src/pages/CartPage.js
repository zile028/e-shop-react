import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import Checkout from "../component/Checkout";
import Header from "../component/Header";
import { useDelayUnmount } from "../hooks/useDelayUnmount";

const intitialTotal = { price: null, item: null, quantity: null };

function CartPage({ removeFromCart, clearCart }) {
  const { cart } = useSelector((state) => state.cartStore);
  const [total, setTotal] = useState(intitialTotal);

  const redirect = useNavigate();

  const [isMounted, setIsMounted] = useState(false);
  const renderChild = useDelayUnmount(isMounted, 300);
  const mountedStyle = { animation: "inRigth 1000ms linear" };
  const unmountedStyle = { animation: "fadeOut 300ms linear" };

  useEffect(() => {
    cart.length === 0 && redirect("/shop");
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
      {renderChild && (
        <Checkout
          style={isMounted ? mountedStyle : unmountedStyle}
          setIsMounted={setIsMounted}
        />
      )}
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
              <button
                className="btn btn-danger w-100"
                onClick={() => setIsMounted(true)}
              >
                CHECKOUT
              </button>
            </li>
          </ul>
        </aside>
        <article className="bg-light p-2 rounded-2">{productsLayout()}</article>
      </section>
    </>
  );
}

export default CartPage;

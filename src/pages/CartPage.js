import React from "react";
import Header from "../component/Header";
import Product from "../component/Product";

function CartPage({ cart }) {
  return (
    <>
      <Header title={"Cart"} />
      <section className="py-5 container">
        <aside>
          <ul>
            <li>Total item:</li>
            <li>Total price:</li>
          </ul>
        </aside>
        <article className="products-wraper products-row-4">
          {cart.map((el, index) => (
            <Product product={el} key={index} />
          ))}
        </article>
      </section>
    </>
  );
}

export default CartPage;

import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Product from "../component/Product";

function CartPage({ cart }) {
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    let price = 0;
    cart.forEach((el) => {
      price += el.price * el.count;
    });
    setTotalPrice(price);
  }, []);

  const productsLayout = () => {
    return cart.map((el, index) => {
      return (
        <Product product={el} canDelete={true} index={index} key={el.id} />
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
              Total item: <span>{cart.length}</span>{" "}
            </li>
            <li className="list-group-item">
              Total price: <span>${totalPrice}</span>
            </li>
          </ul>
        </aside>
        <article className="products-wraper products-row-3">
          {productsLayout()}
        </article>
      </section>
    </>
  );
}

export default CartPage;

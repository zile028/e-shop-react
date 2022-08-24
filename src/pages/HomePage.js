import React from "react";
import { useSelector } from "react-redux";
import Header from "../component/Header";
import Product from "../component/Product";

function HomePage() {
  const { products } = useSelector((state) => state.productsStore);

  const randomProducts = () => {
    let copyProducts = [...products];
    let arr = [];
    for (let i = 0; i < 6; i++) {
      let rnd = Math.floor(Math.random() * copyProducts.length);
      arr.push(
        <Product product={copyProducts[rnd]} key={copyProducts[rnd].id} />
      );
      copyProducts.splice(rnd, 1);
    }
    return arr;
  };

  return (
    <>
      <Header title={"Welcome to e-shop"} />
      <section className="products container py-5">
        <h2 className="text-center mb-5">best sellers</h2>
        <div className="products-wraper products-row-3">
          {products.length && randomProducts()}
        </div>
      </section>
    </>
  );
}

export default HomePage;

import React from "react";
import { useSelector } from "react-redux";
import Header from "../component/Header";
import Product from "../component/Product";

function ShopPage() {
  const { products } = useSelector((state) => state.productsStore);
  return (
    <>
      <Header title={"shop"} />
      <section className="products container py-5">
        <div className="products-wraper products-row-4">
          {products.map((el) => {
            return <Product product={el} key={el.id} />;
          })}
        </div>
      </section>
    </>
  );
}

export default ShopPage;

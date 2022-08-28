import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../component/Header";
import Paggination from "../component/Paggination/Paggination";
import Product from "../component/Product";
import { usePagination } from "../hooks/CustomHooks";

function ShopPage() {
  const { products } = useSelector((state) => state.productsStore);
  const [searchParam, setSearchParam] = useSearchParams();
  const { item, boxes, current, setConfig } = usePagination({
    currentPage: searchParam.get("page"),
    perPage: 10,
    totalItem: products,
  });

  useEffect(() => {
    setSearchParam({ page: current });
  }, [current]);

  return (
    <>
      <Header title={"shop"} />
      <section className="products container py-5">
        <div className="products-wraper products-row-4">
          {item.length > 0 &&
            item.map((el) => {
              return <Product product={el} key={el.id} />;
            })}
        </div>
        <select
          onChange={(e) => {
            setConfig((prev) => {
              return { ...prev, perPage: parseInt(e.target.value) };
            });
            console.log(e.target.value);
          }}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
        {boxes}
        {/* <Paggination setSearchParam={setSearchParam} /> */}
      </section>
    </>
  );
}

export default ShopPage;

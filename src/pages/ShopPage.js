import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../component/Header";
import Paggination from "../component/Paggination/Paggination";
import Product from "../component/Product";
import usePagination from "../hooks/usePagination";

function ShopPage() {
  const { products } = useSelector((state) => state.productsStore);
  const [searchParam, setSearchParam] = useSearchParams();
  const renderItem = usePagination({
    currentPage: searchParam.get("page"),
    perPage: 4,
    totalItem: products,
  });

  useEffect(() => {
    console.log(renderItem);
  }, [renderItem]);

  return (
    <>
      <Header title={"shop"} />
      <section className="products container py-5">
        <div className="products-wraper products-row-4">
          {renderItem.length > 0 &&
            renderItem.map((el) => {
              return <Product product={el} key={el.id} />;
            })}
        </div>
        <Paggination setSearchParam={setSearchParam} />
      </section>
    </>
  );
}

export default ShopPage;

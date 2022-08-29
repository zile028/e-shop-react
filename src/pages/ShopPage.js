import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../component/Header";
import Paggination from "../component/Paggination/Paggination";
import Product from "../component/Product";

function ShopPage() {
  const { products } = useSelector((state) => state.productsStore);
  const [searchParam, setSearchParam] = useSearchParams();
  const currentPage = parseInt(searchParam.get("page"));
  const [perPage, setPerPage] = useState(8);

  const changePage = (page) => {
    setSearchParam({ page });
  };

  const spliceProduct = () => {
    let copyProducts = [...products];
    let offset = (currentPage - 1) * perPage;
    let renderItem = copyProducts.splice(offset, perPage);
    return renderItem;
  };

  return (
    <>
      <Header title={"shop"} />

      <section className="products container py-5">
        <div className="products-wraper products-row-4">
          {spliceProduct().map((el) => {
            return <Product product={el} key={el.id} />;
          })}
        </div>

        <select
          className="pagination-perPage"
          onChange={(e) => {
            setSearchParam({ page: 1 });
            setPerPage(parseInt(e.target.value));
          }}
          value={perPage}
        >
          {products.map((el, ind) => {
            if (ind % 4 === 0 && ind > 0 && ind <= products.length / 2) {
              return (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              );
            }
          })}
          <option value={products.length}>All</option>
        </select>
        <Paggination
          currentPage={currentPage}
          totalPage={products.length}
          perPage={perPage}
          onChangePage={changePage}
          siblingCount={1}
        />
      </section>
    </>
  );
}

export default ShopPage;

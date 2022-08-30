import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../component/Header";
import Paggination from "../component/Paggination/Paggination";
import Product from "../component/Product";

function ShopPage() {
  const { products } = useSelector((state) => state.productsStore);
  const [searchParam, setSearchParam] = useSearchParams({
    pageSize: 8,
    page: 1,
  });
  const currentPageParam = parseInt(searchParam.get("page"));
  const pageSizeParam = parseInt(searchParam.get("pageSize"));
  const [pageSize, setPageSize] = useState(pageSizeParam);

  useEffect(() => {
    let search = Object.fromEntries(searchParam);
    if (!search.page) {
      search.page = 1;
    }
    if (!search.pageSize) {
      search.pageSize = 4;
    }
    setSearchParam(search);
  }, []);

  const changePage = (page) => {
    let search = Object.fromEntries(searchParam);
    search.page = page;
    setSearchParam(search);
  };

  const spliceProduct = () => {
    let copyProducts = [...products];
    let offset = (currentPageParam - 1) * pageSize;
    let renderItem = copyProducts.splice(offset, pageSize);
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
            setPageSize(parseInt(e.target.value));
          }}
          value={pageSize}
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
          currentPage={currentPageParam}
          totalPage={products.length}
          pageSize={{ pageSize, setPageSize }}
          onChangePage={changePage}
          siblingCount={1}
        />
      </section>
    </>
  );
}

export default ShopPage;

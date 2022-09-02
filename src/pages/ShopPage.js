import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import FilterProduct from "../component/FilterProduct/FilterProduct";
import Header from "../component/Header";
import Pagination from "../component/Pagination/Pagination";
import Product from "../component/Product";

export const initSearch = { pageSize: 20, page: 1 };

function getSearch(arg) {
  return Object.fromEntries(arg);
}

function ShopPage() {
  const { filtered } = useSelector((state) => state.productsStore);
  const [searchParam, setSearchParam] = useSearchParams(initSearch);
  const [pageParam, setPageParam] = useState(initSearch);

  useEffect(() => {
    let search = getSearch(searchParam);
    if (!search.pageSize) {
      search.pageSize = initSearch.pageSize;
    }
    if (!search.page) {
      search.page = initSearch.page;
    }
    setSearchParam(search);
    setPageParam(search);
  }, [searchParam, setSearchParam]);

  useEffect(() => {
    console.log(getSearch(searchParam));
    setPageParam(getSearch(searchParam));
  }, [searchParam]);

  const changePage = (page) => {
    let search = getSearch(searchParam);
    search.page = page;
    setSearchParam(search);
    setPageParam({ ...pageParam, page: page });
  };

  const onChangeSize = (num) => {
    setPageParam({ page: 1, pageSize: num });
    setSearchParam({ page: 1, pageSize: num });
  };

  const spliceProduct = () => {
    let copyProducts = [...filtered];
    let offset = (pageParam.page - 1) * pageParam.pageSize;
    return copyProducts.splice(offset, pageParam.pageSize);
  };

  return (
    <>
      <Header title={"shop"} />
      <section className="products container py-5">
        <div className="products-navigate">
          <FilterProduct />
          <Pagination
            currentPage={parseInt(searchParam.get("page"))}
            totalPage={filtered.length}
            pageSize={parseInt(searchParam.get("pageSize"))}
            onChangePage={changePage}
            onChangeSize={onChangeSize}
            siblingCount={1}
          />
        </div>
        <div className="products-wraper products-row-4">
          {spliceProduct().map((el) => {
            return <Product product={el} key={el.id} />;
          })}
        </div>
        <div className="products-navigate">
          <Pagination
            currentPage={parseInt(pageParam.page)}
            totalPage={filtered.length}
            pageSize={parseInt(pageParam.pageSize)}
            onChangePage={changePage}
            onChangeSize={onChangeSize}
            siblingCount={1}
          />
        </div>
      </section>
    </>
  );
}

export default ShopPage;

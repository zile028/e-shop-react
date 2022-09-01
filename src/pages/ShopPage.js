import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import FilterProduct from "../component/FilterProduct/FilterProduct";
import Header from "../component/Header";
import Pagination from "../component/Pagination/Pagination";
import Product from "../component/Product";

export const initSearch = {pageSize: 20, page: 1};

function getSearch(arg) {
	return Object.fromEntries(arg);
}

function ShopPage() {
	const products = useSelector((state) => state.productsStore).filtered;
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
		setPageParam(getSearch(searchParam));
	}, [searchParam]);

	const changePage = (page) => {
		let search = getSearch(searchParam);
		search.page = page;
		setSearchParam(search);
		setPageParam({...pageParam, page: page});
	};

	const onChangeSize = (num) => {
		setPageParam({page: 1, pageSize: num});
		setSearchParam({page: 1, pageSize: num});
	};

	const spliceProduct = () => {
		let copyProducts = [...products];
		let offset = (pageParam.page - 1) * pageParam.pageSize;
		return copyProducts.splice(offset, pageParam.pageSize);
	};

	return (
	  <>
		  <Header title={"shop"}/>
		  <section className="products container py-5">
			  <div className="products-navigate">
				  <FilterProduct/>
				  <Pagination
					currentPage={parseInt(searchParam.get("page"))}
					totalPage={products.length}
					pageSize={parseInt(searchParam.get("pageSize"))}
					onChangePage={changePage}
					onChangeSize={onChangeSize}
					siblingCount={1}
				  />
			  </div>
			  <div className="products-wraper products-row-4">
				  {spliceProduct().map((el) => {
					  return <Product product={el} key={el.id}/>;
				  })}
			  </div>

			  <Pagination
				currentPage={parseInt(pageParam.page)}
				totalPage={products.length}
				pageSize={parseInt(pageParam.pageSize)}
				onChangePage={changePage}
				onChangeSize={onChangeSize}
				siblingCount={1}
			  />
		  </section>
	  </>
	);
}

export default ShopPage;

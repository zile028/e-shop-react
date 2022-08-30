import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import Header from "../component/Header";
import Pagination from "../component/Pagination/Pagination";
import Product from "../component/Product";

const initSearch = {pageSize: 8, page: 1}

function getSearch(arg) {
	return Object.fromEntries(arg)
}

function ShopPage() {
	const {products} = useSelector((state) => state.productsStore);
	const [searchParam, setSearchParam] = useSearchParams(initSearch);
	const [pageParam, setPageParam] = useState({initSearch});

	useEffect(() => {
		let search = getSearch(searchParam);
		if (!search.pageSize) {
			search.pageSize = 4;
		}
		if (!search.page) {
			search.page = 1;
		}
		setSearchParam(search);
		setPageParam(search)
	}, []);

	useEffect(() => {
		setPageParam(getSearch(searchParam))
	}, [searchParam])

	const changePage = (page) => {
		let search = getSearch(searchParam);
		search.page = page;
		setSearchParam(search);
	};

	const onChangeSize = (num) => {
		let search = getSearch(searchParam);
		setPageParam({...pageParam, pageSize: num})
		setSearchParam({...search, pageSize: num})
	}

	const spliceProduct = () => {
		let copyProducts = [...products];
		let offset = (pageParam.page - 1) * pageParam.pageSize;
		return copyProducts.splice(offset, pageParam.pageSize);
	};

	return (
	  <>
		  <Header title={"shop"}/>
		  <section className="products container py-5">
			  <Pagination
				currentPage={parseInt(searchParam.get("page"))}
				totalPage={products.length}
				pageSize={parseInt(searchParam.get("pageSize"))}
				onChangePage={changePage}
				onChangeSize={onChangeSize}
				siblingCount={1}
			  />
			  
			  <div className="products-wraper products-row-4">
				  {spliceProduct().map((el) => {
					  return <Product product={el} key={el.id}/>;
				  })}
			  </div>
			  <Pagination
				currentPage={parseInt(searchParam.get("page"))}
				totalPage={products.length}
				pageSize={parseInt(searchParam.get("pageSize"))}
				onChangePage={changePage}
				onChangeSize={onChangeSize}
				siblingCount={1}
			  />
		  </section>
	  </>
	);
}


export default ShopPage;

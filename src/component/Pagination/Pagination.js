import {DOTS, usePagination} from "../../hooks/usePagination";
import "./pagination.scss";

function Pagination({totalPage, currentPage, pageSize, onChangePage, siblingCount, onChangeSize}) {

	const paginationRange = usePagination({
		currentPage: currentPage,
		pageSize: pageSize,
		totalCount: totalPage,
		siblingCount: siblingCount,
	});

	if (paginationRange.length < 2) {
		return null;
	}

	const onPrevious = () => {
		onChangePage(currentPage - 1);
	};
	const onNext = () => {
		onChangePage(currentPage + 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
	  <div className="pagination-wrapper">
		  <div className="pagination-boxes">

			  <select
				className="pagination-perPage"
				onChange={(e) => {
					onChangeSize(e.target.value)
					// setSearchParam({page: 1, pageSize: e.target.value});
				}}
				value={pageSize}
			  >
				  {Array(totalPage).fill("").map((el, ind) => {
					  if (ind % 4 === 0 && ind > 0 && ind <= totalPage / 2) {
						  return (
							<option key={ind} value={ind}>
								{ind}
							</option>
						  );
					  }
				  })}
				  <option value={totalPage}>All</option>
			  </select>


			  {/*<select*/}
			  {/*	className="pagination-perPage"*/}
			  {/*	onChange={(e) => {*/}
			  {/*		currentPage = 1;*/}
			  {/*		pageSize.setPageSize(parseInt(e.target.value));*/}
			  {/*	}}*/}
			  {/*	value={pageSize.pageSize}*/}
			  {/*>*/}
			  {/*	{Array(totalPage).map((el, ind) => {*/}
			  {/*		if (ind % 4 === 0 && ind > 0 && ind <= totalPage / 2) {*/}
			  {/*			return (*/}
			  {/*				<option key={ind} value={ind}>*/}
			  {/*					{ind}*/}
			  {/*				</option>*/}
			  {/*			);*/}
			  {/*		}*/}
			  {/*	})}*/}
			  {/*	<option value={totalPage}>All</option>*/}
			  {/*</select>*/}
			  <button
				className="box"
				disabled={currentPage === 1}
				onClick={onPrevious}
			  >
				  <i className="fa-solid fa-angles-left"></i>
			  </button>
			  {paginationRange.map((el, ind) => {
				  if (el === DOTS) {
					  return (
						<button className="box" key={ind}>
							{el}
						</button>
					  );
				  }
				  return (
					<button
					  className={el === currentPage ? "box active" : "box"}
					  key={ind}
					  onClick={() => onChangePage(el)}
					>
						{el}
					</button>
				  );
			  })}
			  <button
				className="box"
				onClick={onNext}
				disabled={lastPage === currentPage}
			  >
				  <i className="fa-solid fa-angles-right"></i>
			  </button>
		  </div>
	  </div>
	);
}

export default Pagination;

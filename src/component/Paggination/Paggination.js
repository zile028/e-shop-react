import { DOTS, usePagination } from "../../hooks/usePagination";
import "./paggination.scss";

function Paggination({
  totalPage,
  currentPage,
  pageSize,
  onChangePage,
  siblingCount,
}) {
  const paginationRange = usePagination({
    currentPage: parseInt(currentPage),
    pageSize: pageSize.pageSize,
    totalCount: totalPage,
    siblingCount: siblingCount,
  });

  if (paginationRange.length < 2) {
    return null;
  }

  const onPrevius = () => {
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
            currentPage = 1;
            pageSize.setPageSize(parseInt(e.target.value));
          }}
          value={pageSize.pageSize}
        >
          {Array(totalPage).map((el, ind) => {
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
        <button
          className="box"
          disabled={currentPage === 1}
          onClick={onPrevius}
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

export default Paggination;

import { useEffect, useMemo, useState } from "react";

export const DOTS = "...";
const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (el, index) => index + start);
};

export const usePagination = ({
  totalCount, //total item we have
  pageSize, //number of item while be display
  siblingCount = 1, //number of page are display around current page, default is 1
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    // number page we need
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSibilingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSibilingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    let displayLeftDots = leftSibilingIndex > 2;
    let displayRightDots = rightSibilingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!displayLeftDots && displayRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (displayLeftDots && !displayRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (displayLeftDots && displayRightDots) {
      let middleRange = range(leftSibilingIndex, rightSibilingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

export default usePagination;

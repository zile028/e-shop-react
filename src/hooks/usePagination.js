import { useEffect, useState } from "react";

function usePagination({ currentPage, totalItem, perPage }) {
  const [renderItem, setRenderItem] = useState([]);

  useEffect(() => {
    let copyTotalItem = [...totalItem];
    let offset = (currentPage - 1) * perPage;
    setRenderItem(copyTotalItem.splice(offset, perPage));
  }, [totalItem, currentPage, perPage]);
  return renderItem;
}

export default usePagination;

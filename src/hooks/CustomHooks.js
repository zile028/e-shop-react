import { useEffect, useState } from "react";

export const usePagination = ({ currentPage, totalItem, perPage }) => {
  const [item, setItem] = useState([]);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    let copyTotalItem = [...totalItem];
    let offset = (currentPage - 1) * perPage;
    let offsetItem = copyTotalItem.splice(offset, perPage);

    setItem(offsetItem);

    const numBox = offsetItem.map((el, index) => (
      <button
        key={index}
        className="box"
        onClick={() => setCurentPage(index + 1)}
      >
        {index + 1}
      </button>
    ));

    setBoxes(numBox);
  }, [totalItem, currentPage, perPage]);

  const setCurentPage = (e) => {
    console.log(e);
  };

  return { item, boxes };
};

export const useDelayUnmount = (isMounted, delayTime) => {
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    let timer = null;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timer = setTimeout(() => {
        setShouldRender(false);
      }, delayTime);
    }
    return () => clearTimeout(timer);
  }, [isMounted, shouldRender, delayTime]);

  return shouldRender;
};

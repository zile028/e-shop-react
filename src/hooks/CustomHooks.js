import { useEffect, useState } from "react";

export const usePagination = ({ currentPage, totalItem, perPage }) => {
  const [config, setConfig] = useState({ currentPage, totalItem, perPage });
  const [item, setItem] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [current, setCurrent] = useState(currentPage);

  useEffect(() => {
    console.log(config);
    let copyTotalItem = [...totalItem];
    let offset = (currentPage - 1) * config.perPage;
    setBoxes(
      createBoxes(
        Array(Math.ceil(copyTotalItem.length / config.perPage)).fill("")
      )
    );
    let offsetItem = copyTotalItem.splice(offset, config.perPage);

    setItem(offsetItem);
  }, [totalItem, currentPage, config]);

  const createBoxes = (items) => {
    return items.map((el, index) => (
      <button key={index} className="box" onClick={() => setCurrent(index + 1)}>
        {index + 1}
      </button>
    ));
  };

  return { item, boxes, current, setConfig };
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

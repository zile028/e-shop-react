import { useEffect, useState } from "react";

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

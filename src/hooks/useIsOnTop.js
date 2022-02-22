import { useEffect, useRef, useState } from "react";

const useIsOnTop = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  let lastScrollTop = useRef(0);
  let isOnTopRef = useRef();

  const onScroll = () => {
    const spaceTop = window.pageYOffset;

    lastScrollTop.current = spaceTop <= 0 ? 0 : spaceTop;

    const isOnTop = window.scrollY === 0;

    if (isOnTop !== isOnTopRef.current) setIsOnTop(isOnTop);

    isOnTopRef.current = isOnTop;
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isOnTop;
};

export default useIsOnTop;

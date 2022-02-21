import React, { memo, useEffect, useRef } from "react";
import clsx from "clsx";

import { useIsMobile } from "hooks";

import { addClassOnScrollOver } from "utils";

const FadeOnScrollOver = ({ children, delay, fadeOnMobile }) => {
  const ref = useRef();

  const isMobile = useIsMobile();

  useEffect(() => {
    if (ref.current) {
      addClassOnScrollOver({
        target: ref.current,
        className: "animate-fade-sm",
        delay,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <span
      className={clsx(
        (fadeOnMobile || !isMobile) && "opacity-0 transition-opacity"
      )}
      ref={ref}
    >
      {children}
    </span>
  );
};

export default memo(FadeOnScrollOver);

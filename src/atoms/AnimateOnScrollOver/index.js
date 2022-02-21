import React, { memo, useEffect, useRef } from "react";
import clsx from "clsx";

import { useIsMobile } from "hooks";

import { addClassOnScrollOver } from "utils";

const AnimateOnScrollOver = ({
  children,
  delay,
  animateOnMobile,
  animation,
}) => {
  const ref = useRef();

  const isMobile = useIsMobile();

  const shouldAnimate = !(isMobile && !animateOnMobile);

  useEffect(() => {
    if (ref.current && shouldAnimate) {
      addClassOnScrollOver({
        target: ref.current,
        className: animation,
        delay,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  console.log("shouldAnimate", shouldAnimate);

  return (
    <div
      className={clsx(shouldAnimate && "opacity-0 transition-opacity")}
      ref={ref}
    >
      {children}
    </div>
  );
};

AnimateOnScrollOver.defaultProps = {
  delay: 0,
  animateOnMobile: true,
  animation: "animate-fade-sm",
};

export default memo(AnimateOnScrollOver);

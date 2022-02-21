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

  useEffect(() => {
    const shouldAnimate = !(isMobile && !animateOnMobile);
    if (ref.current && shouldAnimate) {
      addClassOnScrollOver({
        target: ref.current,
        className: `animate-${animation}`,
        delay,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <div
      className={clsx(
        (animateOnMobile || !isMobile) && "opacity-0 transition-opacity"
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

AnimateOnScrollOver.defaultProps = {
  delay: 0,
  animateOnMobile: true,
  animation: "fade-sm",
};

export default memo(AnimateOnScrollOver);

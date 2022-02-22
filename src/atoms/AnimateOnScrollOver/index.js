import React, { memo, useEffect, useRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { useIsMobile } from "hooks";

import { addClassOnScrollOver } from "utils";

const AnimateOnScrollOver = ({
  children,
  delay,
  animateOnMobile,
  animation,
  className,
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

  return (
    <div
      className={clsx(
        className,
        shouldAnimate && "opacity-0 transition-opacity"
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
  animation: "animate-fade-sm",
  className: "",
};

AnimateOnScrollOver.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  animateOnMobile: PropTypes.bool,
  animation: PropTypes.string,
  className: PropTypes.string,
};

export default memo(AnimateOnScrollOver);

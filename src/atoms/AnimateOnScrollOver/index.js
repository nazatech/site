import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { addClassOnScrollOver, isMobile, isDesktop, isTablet } from "utils";

const AnimateOnScrollOver = ({
  children,
  delay,
  animation,
  className,
  beforeAnimate,
}) => {
  const [classNames, setClassNames] = useState(beforeAnimate);
  const ref = useRef();

  const animate = useMemo(() => {
    if (isMobile) {
      return animation.mobile;
    }
    if (isTablet) {
      return animation.tablet;
    }
    if (isDesktop) {
      return animation.desktop;
    }

    return null;
  }, [animation.desktop, animation.mobile, animation.tablet]);

  const useDelay = useMemo(() => {
    if (delay.all) {
      return delay.all;
    }

    if (isMobile) {
      return delay.mobile;
    }
    if (isTablet) {
      return delay.tablet;
    }
    if (isDesktop) {
      return delay.desktop;
    }

    return 0;
  }, [delay.all, delay.desktop, delay.mobile, delay.tablet]);

  useEffect(() => {
    if (ref.current && animate) {
      addClassOnScrollOver({
        target: ref.current,
        className: animate,
        delay: useDelay,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    setClassNames(clsx(className, beforeAnimate));
  }, [animate, beforeAnimate, className]);

  return (
    // <div className={classNames} ref={ref}>
    <div>{children}</div>
  );
};

AnimateOnScrollOver.defaultProps = {
  delay: {
    all: 0,
    desktop: 0,
    mobile: 0,
    tablet: 0,
  },
  beforeAnimate: "opacity-0",
  animation: {
    mobile: "animate-fade-sm",
    tablet: "animate-fade-sm",
    desktop: "animate-fade-sm",
  },
  className: "",
};

AnimateOnScrollOver.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.shape({
    all: PropTypes.number,
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
  }),
  animation: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default memo(AnimateOnScrollOver);

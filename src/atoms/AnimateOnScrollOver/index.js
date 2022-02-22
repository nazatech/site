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
  const ref = useRef();
  const [classNames, setClassNames] = useState("");

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

  useEffect(() => {
    if (ref.current && animate) {
      addClassOnScrollOver({
        target: ref.current,
        className: animate,
        delay,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    setClassNames(clsx(className, animate && beforeAnimate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate]);

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  );
};

AnimateOnScrollOver.defaultProps = {
  delay: 0,
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
  delay: PropTypes.number,
  animation: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default memo(AnimateOnScrollOver);

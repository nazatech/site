import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { AnimateOnScrollOver, Container } from "atoms";

const Section = ({
  variant,
  withContainer,
  title,
  className,
  children,
  id,
}) => {
  const render = () => (
    <Fragment>
      {title && (
        <h2
          className={clsx("mb-6 text-3xl lg:text-5xl font-extrabold lg:mb-10", {
            "text-white": variant === "secondary",
          })}
        >
          <AnimateOnScrollOver>{title}</AnimateOnScrollOver>
        </h2>
      )}
      {children}
    </Fragment>
  );

  return (
    <div
      className={clsx(`py-14 lg:py-20 ${className}`, {
        "bg-blue": variant === "secondary",
      })}
      id={id}
    >
      {withContainer ? <Container>{render()}</Container> : render()}
    </div>
  );
};

Section.defaultProps = {
  variant: "primary",
  withContainer: true,
  className: "",
};

Section.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  withContainer: PropTypes.bool,
  title: PropTypes.string,
};

export default memo(Section);

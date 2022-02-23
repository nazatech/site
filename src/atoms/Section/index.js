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
  containerClass,
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
    <section
      className={clsx(`py-14 lg:py-20 ${className} scroll-mt-[62px]`, {
        "bg-blue": variant === "secondary",
      })}
      id={id}
    >
      {withContainer ? (
        <Container className={containerClass}>{render()}</Container>
      ) : (
        render()
      )}
    </section>
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

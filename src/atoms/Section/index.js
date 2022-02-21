import { Container } from "atoms";
import AnimateOnScrollOver from "atoms/AnimateOnScrollOver";
import React, { Fragment, memo } from "react";

const Section = ({ withContainer, title, className, children }) => {
  const render = () => (
    <Fragment>
      {title && (
        <h2 className="mb-6 text-3xl lg:text-5xl font-extrabold lg:pb-6">
          <AnimateOnScrollOver>{title}</AnimateOnScrollOver>
        </h2>
      )}
      {children}
    </Fragment>
  );

  return (
    <div className={`py-14 lg:py-20 ${className}`}>
      {withContainer ? <Container>{render()}</Container> : render()}
    </div>
  );
};

export default memo(Section);

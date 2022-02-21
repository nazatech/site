import { Container } from "atoms";
import FadeOnScrollOver from "atoms/FadeOnScrollOver";
import React, { Fragment, memo } from "react";

const Section = ({ withContainer, title, className, children }) => {
  const render = () => (
    <Fragment>
      {title && (
        <h2 className="mb-6 text-3xl lg:text-5xl font-extrabold lg:pb-6">
          <FadeOnScrollOver>{title}</FadeOnScrollOver>
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

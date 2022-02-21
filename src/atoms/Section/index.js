import { Container } from "atoms";
import React, { Fragment, memo, useEffect, useRef } from "react";
import { addClassOnScrollOver } from "utils";

const Section = ({ withContainer, title, className, children }) => {
  const titleRef = useRef();

  useEffect(() => {
    if (titleRef.current) {
      addClassOnScrollOver({
        target: titleRef.current,
        className: "opacity-100",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleRef]);

  const render = () => (
    <Fragment>
      {title && (
        <h2
          ref={titleRef}
          className="mb-6 text-3xl lg:text-5xl font-extrabold lg:pb-6 opacity-0 transition-opacity duration-1000"
        >
          {title}
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

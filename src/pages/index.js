import React, { Fragment, memo } from "react";
import Navbar from "molecules/Navbar";

const IndexPage = () => {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
};

export default memo(IndexPage);

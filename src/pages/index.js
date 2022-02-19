import React, { Fragment, memo } from "react";
import Navbar from "molecules/Navbar";
import { PageHeader } from "molecules";

const IndexPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageHeader />
    </Fragment>
  );
};

export default memo(IndexPage);

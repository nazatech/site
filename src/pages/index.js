import React, { Fragment, memo } from "react";
import Navbar from "molecules/Navbar";
import { PageHeader, AboutUs } from "molecules";

const IndexPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageHeader />
      <AboutUs />
    </Fragment>
  );
};

export default memo(IndexPage);

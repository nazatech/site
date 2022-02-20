import React, { Fragment, memo } from "react";
import Navbar from "molecules/Navbar";
import { PageHeader, AboutUs } from "molecules";
import { Hero } from "atoms";

const IndexPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageHeader />
      <AboutUs />
      <Hero>Uma família para pertencer</Hero>
    </Fragment>
  );
};

export default memo(IndexPage);

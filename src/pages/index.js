import React, { memo } from "react";

import { Navbar, PageHeader, AboutUs } from "molecules";
import { Hero } from "atoms";
import { Ministries } from "organisms";
import { ModalProvider } from "contexts/Modal";

const IndexPage = () => {
  return (
    <ModalProvider>
      <Navbar />
      <PageHeader />
      <AboutUs />
      <Hero>Uma família para pertencer</Hero>
      <Ministries />
    </ModalProvider>
  );
};

export default memo(IndexPage);

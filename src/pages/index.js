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
      <Hero content="Uma família para pertencer" />
      <Ministries />
    </ModalProvider>
  );
};

export default memo(IndexPage);

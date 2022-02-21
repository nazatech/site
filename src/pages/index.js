import React, { memo } from "react";

import { Navbar } from "molecules";
import { Hero } from "atoms";
import {
  Donate,
  SocialProjects,
  Ministries,
  AboutUs,
  PageHeader,
  Schedule,
} from "organisms";
import { ModalProvider } from "contexts/Modal";

const IndexPage = () => {
  return (
    <ModalProvider>
      <Navbar />
      <PageHeader />
      <AboutUs />
      <Hero content="Uma família para pertencer" />
      <Ministries />
      <Schedule />
      <SocialProjects />
      <Donate />
    </ModalProvider>
  );
};

export default memo(IndexPage);

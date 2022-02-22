import React, { memo } from "react";

import { Navbar, Footer } from "molecules";
import { Hero } from "atoms";
import {
  Contact,
  Donate,
  SocialProjects,
  Ministries,
  AboutUs,
  PageHeader,
  Schedule,
} from "organisms";
import { ModalProvider } from "contexts/Modal";
import { MenuProvider } from "contexts/Menu";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <ModalProvider>
      <Helmet
        htmlAttributes={{
          class: "scroll-smooth",
        }}
        title="Igreja do Nazareno Central de Barueri"
        description="Uma comunidade de fé comissionada a levar as Boas Novas da vida em Jesus Cristo às pessoas em todos os lugares e a espalhar a mensagem da santidade bíblica para todos."
      />
      <MenuProvider>
        <Navbar />
      </MenuProvider>
      <PageHeader />
      <AboutUs />
      <Hero content="Uma família para pertencer" />
      <Ministries />
      <Schedule />
      <SocialProjects />
      <Donate />
      <Contact />
      <Footer />
    </ModalProvider>
  );
};

export default memo(IndexPage);

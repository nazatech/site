import React, { memo } from "react";
import { Container } from "atoms";

import Logo from "images/logo.svg";
import CentralBarueri from "images/central-barueri.svg";
import IgrejaDoNazareno from "images/igreja-do-nazareno.svg";
import ArrowDown from "images/arrow-down.svg";

const PageHeader = () => {
  return (
    <div className="bg-black-86 pb-10">
      <Container>
        <article className="flex items-center flex-col text-center text-white pt-44 pb-28 lg:pt-52">
          <Logo className="w-36 lg:w-[455px] md:w-60 animate-fade" />
          <IgrejaDoNazareno className="animate-fade" />
          <div className="w-full h-[2px] bg-white mt-2 mb-4 animate-width mr-auto  opacity-0" />
          <CentralBarueri className="animate-fade-up opacity-0 animation-delay-1000" />
        </article>
        <div className="flex justify-center items-center flex-col animate-scroll cursor-pointer lg:hidden ">
          <ArrowDown />
          <ArrowDown />
        </div>
      </Container>
    </div>
  );
};

export default memo(PageHeader);

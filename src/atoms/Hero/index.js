import React, { memo } from "react";
import clsx from "clsx";

import { AnimateOnScrollOver, Container } from "atoms";

const Hero = ({ content }) => {
  return (
    <div
      className={clsx(
        `py-10 md:py-32 bg-fixed bg-bottom bg-blue bg-no-repeat bg-contain bg-[url('../images/logo-transparent.png')]`
      )}
    >
      <Container className="uppercase text-center text-3xl font-bold text-white md:text-6xl ">
        <AnimateOnScrollOver>{content}</AnimateOnScrollOver>
      </Container>
    </div>
  );
};

export default memo(Hero);

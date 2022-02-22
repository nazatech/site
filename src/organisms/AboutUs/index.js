import React, { memo } from "react";
import OurValues from "./OurValues";
import Presentation from "./Presentation";

const AboutUs = () => {
  return (
    <div id="quem-somos" className="scroll-mt-[62px]">
      <Presentation />
      <OurValues />
    </div>
  );
};

export default memo(AboutUs);

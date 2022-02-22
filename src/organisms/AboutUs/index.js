import React, { memo } from "react";
import OurValues from "./OurValues";
import Presentation from "./Presentation";

const AboutUs = () => {
  return (
    <div id="quem-somos">
      <Presentation />
      <OurValues />
    </div>
  );
};

export default memo(AboutUs);

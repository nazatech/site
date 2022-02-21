import React, { Fragment, memo } from "react";
import OurValues from "./OurValues";
import Presentation from "./Presentation";

const AboutUs = () => {
  return (
    <Fragment>
      <Presentation />
      <OurValues />
    </Fragment>
  );
};

export default memo(AboutUs);

import React, { memo } from "react";
import Navbar from "molecules/Navbar";

import "style/main.css";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default memo(IndexPage);

import React, { memo } from "react";

const Container = ({ children }) => {
  return <div className="px-4 mx-auto max-w-6xl">{children}</div>;
};

export default memo(Container);

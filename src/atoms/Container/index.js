import React, { memo } from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`px-4 mx-auto max-w-6xl md:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default memo(Container);

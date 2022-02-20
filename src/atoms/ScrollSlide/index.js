import React, { memo } from "react";

const ScrollSlide = React.forwardRef(({ children }, ref) => {
  return (
    <div
      className="flex overflow-x-auto lg:overflow-x-visible scrollbar-hide"
      ref={ref}
    >
      {children}
    </div>
  );
});

export default memo(ScrollSlide);

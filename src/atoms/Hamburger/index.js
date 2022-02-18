import React, { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Hamburger = ({ initialState, className, onClick }) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = useCallback(() => {
    setIsActive(!isActive);
    onClick(!isActive);
  }, [isActive, onClick]);

  return (
    <div
      className={`flex flex-col h-6 justify-between cursor-pointer relative z-20 ${className}`}
      onClick={toggle}
    >
      <div
        className={clsx(
          "rounded h-[2px] relative w-8 transition bg-white",
          isActive && "bg-transparent"
        )}
      />
      <div
        className={clsx(
          "rounded h-[2px] relative w-8 transition bg-white",
          isActive && "absolute rotate-45 top-0"
        )}
      />
      <div
        className={clsx(
          "rounded h-[2px] relative w-8 transition bg-white",
          isActive && "absolute rotate-[135deg] bottom-[11px]"
        )}
      />
    </div>
  );
};

Hamburger.defaultProps = {
  initialState: false,
  onClick: () => {},
};

Hamburger.propTypes = {
  initialState: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(Hamburger);

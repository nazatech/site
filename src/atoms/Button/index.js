import React, { memo } from "react";
import PropTypes from "prop-types";

import ArrowRight from "images/arrow-right.svg";
import clsx from "clsx";

const Button = ({ variant, onClick, children }) => {
  return (
    <button
      className={clsx(
        "p-4 flex items-center justify-center hover:shadow-md hover:scale-105 transition duration-300 active:scale-100 ",
        {
          "bg-blue text-white": variant === "primary",
        }
      )}
      onClick={onClick}
    >
      <span className="mr-4">{children}</span>
      <ArrowRight />
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default memo(Button);
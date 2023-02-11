import React from "react";
import clsx from "clsx";

const NavLink = ({ href, onClick, children }) => {
  const isActive = href === window.location.pathname;

  return (
    <a
      className={clsx(
        "font-bold text-base leading-5 not-italic  tracking-wider text-white lg:text-sm lg:leading-loose underline-offset-[6px]",
        isActive ? "underline" : "no-underline"
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;

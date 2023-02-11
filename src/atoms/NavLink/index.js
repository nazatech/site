import React from "react";
import clsx from "clsx";

const isBrowser = typeof window !== "undefined";

const NavLink = ({ href, onClick, children }) => {
  const isActive = isBrowser ? href === window.location.pathname : false;

  console.log("test>>>", {
    isBrowser,
    href,
    windowLocationPathname: window.location.pathname,
    isActive,
  });

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

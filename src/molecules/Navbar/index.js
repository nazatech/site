import React, { memo } from "react";

import { Container, Hamburger, AnimateOnScrollOver } from "atoms";
import { useMenu } from "hooks";

import Menu from "./Menu";

import Logo from "images/logo.svg";
import { useIsOnTop } from "hooks";
import clsx from "clsx";

const Navbar = () => {
  const { toggleMenu, isOpen } = useMenu();

  const isOnPageTop = useIsOnTop();

  return (
    <nav
      className={clsx(
        "sticky top-0 left-0 right-0 bg-black-86 py-4 lg:py-6 z-10 transition-all backdrop-blur-md",
        {
          "lg:py-4": !isOnPageTop,
        }
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <AnimateOnScrollOver delay={1000}>
            <Logo
              className={clsx("w-10 lg:w-14 transition-all", {
                "lg:w-10": !isOnPageTop,
              })}
            />
          </AnimateOnScrollOver>

          <AnimateOnScrollOver delay={500}>
            <Hamburger
              isActive={isOpen}
              onClick={toggleMenu}
              className="lg:hidden"
            />
          </AnimateOnScrollOver>
          <Menu />
        </div>
      </Container>
    </nav>
  );
};

export default memo(Navbar);

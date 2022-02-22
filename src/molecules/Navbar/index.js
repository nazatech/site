import React, { memo } from "react";

import { Container, Hamburger } from "atoms";
import { useMenu } from "hooks";

import Menu from "./Menu";

import Logo from "images/logo.svg";

const Navbar = () => {
  const { toggleMenu, isOpen } = useMenu();

  return (
    <nav className="absolute top-0 left-0 right-0 bg-black-86 py-4 lg:py-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="navbar__logo">
            <Logo className="w-10 lg:w-14" />
          </div>
          <Hamburger
            isActive={isOpen}
            onClick={toggleMenu}
            className="lg:hidden"
          />
          <Menu />
        </div>
      </Container>
    </nav>
  );
};

export default memo(Navbar);

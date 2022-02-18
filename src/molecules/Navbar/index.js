import React, { memo, useState } from "react";
import Logo from "images/logo.svg";
import Container from "atoms/Container";
import Hamburger from "atoms/Hamburger";
import Menu from "./Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 bg-black-86 py-4 lg:py-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="navbar__logo">
            <Logo className="w-10 lg:w-14" />
          </div>
          <Hamburger onClick={setMenuOpen} className="lg:hidden" />
          <Menu active={menuOpen} />
        </div>
      </Container>
    </nav>
  );
};

export default memo(Navbar);

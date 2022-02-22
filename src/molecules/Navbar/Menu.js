import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimateOnScrollOver } from "atoms";
import { useMenu } from "hooks";
import { isDesktop } from "utils";

const LinkWrap = ({ children, last, className }) => {
  return (
    <div
      className={clsx(
        `${className} mb-7 relative text-right  transition-all duration-700 lg:text-center lg:mb-0 lg:static lg:p-0 lg:inline-block`,
        !last && "lg:pr-8"
      )}
    >
      {children}
    </div>
  );
};

const Href = ({ children, href, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const target = document.querySelector(`${href}`);

  const onScroll = () => {
    const bounding = target?.getBoundingClientRect();

    if (!isDesktop) {
      return setIsActive(
        bounding?.top <= 64 &&
          window.scrollY < bounding?.height + (target?.offsetTop - 100)
      );
    }

    setIsActive(
      bounding?.top <= 300 &&
        window.scrollY < bounding?.height + (target?.offsetTop - 300)
    );
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const Menu = () => {
  const { closeMenu, isOpen } = useMenu();

  return (
    <div
      className={clsx(
        "min-h-screen  overflow-hidden p-8 fixed z-10 inset-0 bg-black-86 transition lg:min-h-0 lg:p-0 lg:w-auto lg:flex lg:justify-between lg:pb-0 lg:static lg:opacity-100 lg:bg-transparent lg:pointer-events-auto",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <AnimateOnScrollOver>
        <div className="pt-20 lg:pt-0">
          <LinkWrap className={isOpen ? "right-0" : "-right-10"}>
            <Href onClick={closeMenu} href="#quem-somos">
              Quem Somos
            </Href>
          </LinkWrap>
          <LinkWrap className={isOpen ? "right-0" : "-right-16"}>
            <Href onClick={closeMenu} href="#ministerios">
              Ministérios
            </Href>
          </LinkWrap>
          <LinkWrap className={isOpen ? "right-0" : "-right-24"}>
            <Href onClick={closeMenu} href="#cultos">
              Cultos
            </Href>
          </LinkWrap>
          <LinkWrap className={isOpen ? "right-0" : "-right-24"}>
            <Href onClick={closeMenu} href="#projetos-sociais">
              Projetos Sociais
            </Href>
          </LinkWrap>
          <LinkWrap className={isOpen ? "right-0" : "-right-28"}>
            <Href onClick={closeMenu} href="#contribua">
              Dízimos e ofertas
            </Href>
          </LinkWrap>
          <LinkWrap className={isOpen ? "right-0" : "-right-32"} last={true}>
            <Href onClick={closeMenu} href="#contato">
              Contato
            </Href>
          </LinkWrap>
        </div>
      </AnimateOnScrollOver>
    </div>
  );
};

export default memo(Menu);

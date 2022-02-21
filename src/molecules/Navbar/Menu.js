import React, { memo } from "react";
import clsx from "clsx";
import { AnimateOnScrollOver } from "atoms";

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

const Href = ({ children, href }) => {
  return (
    <a
      className="font-bold text-base leading-5 not-italic no-underline tracking-wider text-white lg:text-sm"
      href={href}
    >
      {children}
    </a>
  );
};

const Menu = ({ active }) => {
  return (
    <div
      className={clsx(
        "min-h-screen  overflow-hidden p-8 fixed z-10 inset-0 bg-black-86 transition lg:min-h-0 lg:p-0 lg:w-auto lg:flex lg:justify-between lg:pb-0 lg:static lg:opacity-100 lg:bg-transparent lg:pointer-events-auto",
        active
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <AnimateOnScrollOver>
        <div className="pt-20 lg:pt-0">
          <LinkWrap className={active ? "right-0" : "-right-10"}>
            <Href href="#quem-somos">Quem Somos</Href>
          </LinkWrap>
          <LinkWrap className={active ? "right-0" : "-right-16"}>
            <Href href="#ministerios">Ministérios</Href>
          </LinkWrap>
          <LinkWrap className={active ? "right-0" : "-right-24"}>
            <Href href="#cultos">Cultos</Href>
          </LinkWrap>
          <LinkWrap className={active ? "right-0" : "-right-24"}>
            <Href href="#projetos-sociais">Projetos Sociais</Href>
          </LinkWrap>
          <LinkWrap className={active ? "right-0" : "-right-28"}>
            <Href href="#contribua">Dízimos e ofertas</Href>
          </LinkWrap>
          <LinkWrap className={active ? "right-0" : "-right-32"} last={true}>
            <Href href="#contato">Contato</Href>
          </LinkWrap>
        </div>
      </AnimateOnScrollOver>
    </div>
  );
};

export default memo(Menu);

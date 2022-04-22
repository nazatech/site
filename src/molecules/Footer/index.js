import React, { memo } from "react";
import { Container, AnimateOnScrollOver } from "atoms";

const Href = ({ children, href }) => {
  return (
    <a
      className="mr-8 mb-6 font-bold text-base leading-5 not-italic no-underline tracking-wider text-white lg:text-sm"
      href={href}
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <div className="pt-14 pb-6 bg-black-86 text-white">
      <AnimateOnScrollOver>
        <Container>
          <div className="mb-5 flex flex-wrap">
            <Href href="#quem-somos">Quem Somos</Href>
            <Href href="#ministerios">Ministérios</Href>
            <Href href="#cultos">Cultos</Href>
            <Href href="#projetos-sociais">Projetos Sociais</Href>
            <Href href="#contribua">Dízimos e ofertas</Href>
            <Href href="#contato">Contato</Href>
          </div>
          <article className="lg:flex lg:justify-between">
            <p className="text-xs mb-6 italic lg:mb-0">
              O nome/logo ”Igreja do Nazareno” é uma marca registrada e seu uso
              é supervisionado pela Junta Geral da Igreja do Nazareno.
            </p>
            <p className="text-xs">Site feito por Abraão, Gois e Bruna</p>
          </article>
        </Container>
      </AnimateOnScrollOver>
    </div>
  );
};

export default memo(Footer);

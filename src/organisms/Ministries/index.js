import React, { Fragment, memo } from "react";
import { ScrollSlide, Section } from "atoms";
import clsx from "clsx";

import { Button, AnimateOnScrollOver } from "atoms";
import { useModal } from "hooks";

import image from "images/imagem-da-igreja.png";

const Content = ({ title, content }) => {
  return (
    <article className="mb-8 max-w-3xl">
      <h4 className="font-extrabold text-2xl mb-2">{title}</h4>
      <p>{content}</p>
    </article>
  );
};

const Card = ({ delay = 0 }) => {
  const { openModal } = useModal();

  const onClick = () => {
    openModal({
      children: (
        <Fragment>
          <Content
            title="MEDDI - Ministério da Escola Dominical e Discipulado Internacional"
            content="Fomos enviados ao mundo e respondemos ao chamado de Cristo. Somos capacitados pelo Espírito Santo, para proclamar o Evangelho da Graça e cooperar ativamente na edificação da Igreja e na expansão do Reino Eterno do SENHOR."
          />
          <Content title="Responsável" content="Phineas Bresee" />
          <Button variant="primary">Entre em contato</Button>
        </Fragment>
      ),
    });
  };

  return (
    <AnimateOnScrollOver animateOnMobile={false} delay={delay}>
      <div
        className={clsx(
          "lg:max-w-[350px] cursor-pointer lg:hover:scale-105 transition mr-5 lg:mr-0"
        )}
        onClick={onClick}
      >
        <div className="pb-4 w-[234px] lg:w-[350px] max-w-full">
          <img src={image} alt="Imagem igreja do nazareno" />
        </div>
        <article>
          <h4 className="mb-1 font-semibold lg:text-2xl">MEDDI</h4>
          <p>Ministério da Escola Dominical e Discipulado Internacional</p>
        </article>
      </div>
    </AnimateOnScrollOver>
  );
};

const Cards = ({ children }) => {
  return <div className="flex lg:grid lg:grid-cols-3 lg:gap-9">{children}</div>;
};

const Ministries = () => {
  return (
    <Section withContainer={true} title="Ministérios">
      <AnimateOnScrollOver
        animation="animate-fade-right"
        animateOnMobile={true}
      >
        <ScrollSlide>
          <Cards>
            <Card delay={0} />
            <Card delay={200} />
            <Card delay={400} />
            <Card delay={0} />
            <Card delay={200} />
            <Card delay={400} />
          </Cards>
        </ScrollSlide>
      </AnimateOnScrollOver>
    </Section>
  );
};

export default memo(Ministries);

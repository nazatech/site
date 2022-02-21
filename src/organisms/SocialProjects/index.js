import React, { Fragment, memo } from "react";

import clsx from "clsx";

import { Section, Button, ScrollSlide, AnimateOnScrollOver } from "atoms";
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

const Cards = ({ children }) => {
  return <div className="flex lg:grid lg:grid-cols-3 lg:gap-9">{children}</div>;
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
          "lg:max-w-[350px] cursor-pointer lg:hover:scale-105 transition mr-5 lg:mr-0 p-4 bg-white shadow rounded-lg"
        )}
        onClick={onClick}
      >
        <div className="pb-4 w-[234px] lg:w-[350px] max-w-full">
          <img src={image} alt="Imagem igreja do nazareno" />
        </div>
        <article>
          <h4 className="mb-1 font-semibold lg:text-2xl">
            This is a cool Title
          </h4>
          <p>
            To quickly start my startup landing page design, I was looking for a
            landing page UI Kit. Landify is one of the best landing page UI kit
            I have come across. It’s so flexible, well organised and easily
            editable.
          </p>
        </article>
      </div>
    </AnimateOnScrollOver>
  );
};

const SocialProjects = () => {
  return (
    <Section title="Projetos Sociais" variant="secondary" withContainer={true}>
      <AnimateOnScrollOver
        animation="animate-fade-right"
        animateOnMobile={true}
      >
        <ScrollSlide>
          <Cards>
            <Card delay={0} />
            <Card delay={200} />
            <Card delay={400} />
          </Cards>
        </ScrollSlide>
      </AnimateOnScrollOver>
    </Section>
  );
};

export default memo(SocialProjects);

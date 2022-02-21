import { Section } from "atoms";
import ScrollSlide from "atoms/ScrollSlide";
import React, { Fragment, memo } from "react";

import image from "images/imagem-da-igreja.png";
import { useModal } from "hooks";
import { Button } from "atoms";

const Content = ({ title, content }) => {
  return (
    <article className="mb-8 max-w-3xl">
      <h4 className="font-extrabold text-2xl mb-2">{title}</h4>
      <p>{content}</p>
    </article>
  );
};

const Card = () => {
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
    <div className="mr-7 lg:max-w-[350px] cursor-pointer" onClick={onClick}>
      <div className="pb-4 w-[234px] lg:w-[350px]">
        <img src={image} alt="Imagem igreja do nazareno" />
      </div>
      <article>
        <h4 className="mb-1 font-semibold lg:text-2xl">MEDDI</h4>
        <p>Ministério da Escola Dominical e Discipulado Internacional</p>
      </article>
    </div>
  );
};

const Cards = ({ children }) => {
  return <div className="flex lg:grid lg:grid-cols-3 lg:gap-9">{children}</div>;
};

const Ministries = () => {
  return (
    <Section withContainer={true} title="Ministérios">
      <ScrollSlide>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </ScrollSlide>
    </Section>
  );
};

export default memo(Ministries);

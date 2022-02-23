import React, { Fragment, memo } from "react";
import { ScrollSlide, Section } from "atoms";
import clsx from "clsx";

import { Button, AnimateOnScrollOver } from "atoms";
import { useModal } from "hooks";

import image from "images/imagem-da-igreja.png";
import { ministries } from "./data";

const isBrowser = typeof window !== "undefined";

const Content = ({ title, content }) => {
  return (
    <article className="mb-8 max-w-3xl">
      <h4 className="font-extrabold text-2xl mb-2">{title}</h4>
      <p>{content}</p>
    </article>
  );
};

const Card = ({ title, description, contact, responsible, delay = 0 }) => {
  const { openModal } = useModal();

  const onClick = () => {
    openModal({
      children: (
        <Fragment>
          <Content title={title.full} content={description.full} />
          <Content title="Responsável" content={responsible} />
          {contact && isBrowser && (
            <Button variant="primary" href={contact}>
              Entre em contato
            </Button>
          )}
        </Fragment>
      ),
    });
  };

  return (
    <AnimateOnScrollOver delay={delay}>
      <div
        className={clsx(
          "lg:max-w-[350px] cursor-pointer lg:hover:scale-105 transition duration-300 mr-5 lg:mr-0"
        )}
        onClick={onClick}
      >
        <div className="pb-4 w-[234px] lg:w-[350px] max-w-full">
          <img src={image} alt="Imagem igreja do nazareno" />
        </div>
        <article>
          <h4 className="mb-1 font-semibold lg:text-2xl">{title.short}</h4>
          <p>{description.short}</p>
        </article>
      </div>
    </AnimateOnScrollOver>
  );
};

const Cards = ({ children }) => {
  return <div className="flex lg:grid lg:grid-cols-3 lg:gap-9">{children}</div>;
};

const Ministries = () => {
  const delays = [
    { all: 0 },
    { mobile: 0, tablet: 0, desktop: 500 },
    { mobile: 0, tablet: 0, desktop: 1000 },
    { all: 0 },
    { mobile: 0, tablet: 0, desktop: 500 },
    { mobile: 0, tablet: 0, desktop: 1000 },
  ];
  return (
    <Section
      handleScrollableContent={true}
      title="Ministérios"
      id="ministerios"
    >
      <AnimateOnScrollOver
        animation={{
          mobile: "animate-fade-right",
          tablet: "animate-fade-right",
          desktop: "animate-fade-sm",
        }}
      >
        <ScrollSlide>
          <Cards>
            {ministries.map((ministry, index) => (
              <Card
                key={index}
                title={ministry.title}
                description={ministry.description}
                responsible={ministry.responsible}
                contact={ministry.contact}
                delay={delays[index]}
              />
            ))}
          </Cards>
        </ScrollSlide>
      </AnimateOnScrollOver>
    </Section>
  );
};

export default memo(Ministries);

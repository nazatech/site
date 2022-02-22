import React, { memo } from "react";
import clsx from "clsx";

import { ScrollSlide, Section, AnimateOnScrollOver } from "atoms";

import Target from "images/target.svg";
import Peace from "images/peace.svg";
import Christian from "images/christian.svg";

const Card = React.forwardRef(({ title, text, Icon, isLast }, ref) => {
  return (
    <article
      ref={ref}
      className={clsx(
        !isLast && "mr-7 lg:mr-9",
        "min-w-[245px] lg:max-w-[350px] "
      )}
    >
      <div className="pb-6 lg:pb-4">{Icon}</div>
      <h3 className="mb-2 text-xl font-bold max-w-[200px] lg:text-2xl lg:max-w-[250px]">
        {title}
      </h3>
      <p className="text-base lg:text-1xl">{text}</p>
    </article>
  );
});

const OurValues = () => {
  return (
    <Section
      title="Nossos Valores"
      withContainer={false}
      className="pl-4 mx-auto max-w-6xl"
    >
      <AnimateOnScrollOver
        animation={{
          mobile: "animate-fade-right",
          tablet: "animate-fade-right",
          desktop: null,
        }}
      >
        <ScrollSlide>
          <AnimateOnScrollOver
            animation={{
              mobile: null,
              desktop: "animate-fade-right",
            }}
          >
            <Card
              title="Somos um povo com uma missão"
              text="Fomos enviados ao mundo e respondemos ao chamado de Cristo. Somos
            capacitados pelo Espírito Santo, para proclamar o Evangelho da Graça e
            cooperar ativamente na edificação da Igreja e na expansão do Reino
            Eterno do SENHOR."
              Icon={<Target />}
            />
          </AnimateOnScrollOver>
          <AnimateOnScrollOver
            animation={{
              mobile: null,
              desktop: "animate-fade-right",
            }}
            delay={500}
          >
            <Card
              title="Somos um povo de Santidade"
              text="Somos chamados à santidade pelo Deus Santo. Cremos que batizados no Espírito Santo, podemos seguir a carreira que nos está proposta, e andar à semelhança de Cristo Jesus, nosso SENHOR. "
              Icon={<Peace />}
            />
          </AnimateOnScrollOver>
          <AnimateOnScrollOver
            animation={{
              mobile: null,
              desktop: "animate-fade-right",
            }}
            delay={1000}
          >
            <Card
              title="Somos um povo Cristão"
              text="Como membros da Igreja do Deus vivo, espalhada ao redor do mundo e através da história, nos unimos aos verdadeiros cristãos na proclamação do senhorio absoluto de Jesus Cristo. "
              Icon={<Christian />}
            />
          </AnimateOnScrollOver>
        </ScrollSlide>
      </AnimateOnScrollOver>
    </Section>
  );
};

export default memo(OurValues);

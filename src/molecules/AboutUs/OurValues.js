import React, { memo, useEffect, useRef } from "react";
import clsx from "clsx";

import Target from "images/target.svg";
import Peace from "images/peace.svg";
import Christian from "images/christian.svg";
import { addClassOnScrollOver } from "utils";
import { useIsMobile } from "hooks";

const Card = React.forwardRef(({ title, text, Icon, isLast }, ref) => {
  const isMobile = useIsMobile();

  return (
    <article
      ref={ref}
      className={clsx(
        !isLast && "mr-10 lg:mr-9",
        !isMobile && "opacity-0",
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
  const title = useRef();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const cards = useRef();

  const isMobile = useIsMobile();

  useEffect(() => {
    const cardsRendered = card1.current && card2.current && card3.current;

    if (cardsRendered && !isMobile) {
      addClassOnScrollOver({
        target: card1.current,
        className: "animate-fade-right",
      });
      addClassOnScrollOver({
        target: card2.current,
        className: "animate-fade-right",
        delay: 500,
      });
      addClassOnScrollOver({
        target: card3.current,
        className: "animate-fade-right",
        delay: 1000,
      });
    }

    if (cards && isMobile) {
      addClassOnScrollOver({
        target: cards.current,
        className: "animate-fade-right",
      });
    }

    if (title.current) {
      addClassOnScrollOver({
        target: title.current,
        className: "opacity-100",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, card1, card2, card3, cards]);

  return (
    <div className="pl-4 py-14 mx-auto max-w-6xl lg:py-20">
      <h2
        ref={title}
        className="mb-6 text-3xl font-extrabold lg:pb-6 opacity-0 transition-opacity duration-1000"
      >
        Nossos Valores
      </h2>

      <div className="flex overflow-x-auto lg:overflow-x-visible" ref={cards}>
        <Card
          ref={card1}
          title="Somos um povo com uma missão"
          text="Fomos enviados ao mundo e respondemos ao chamado de Cristo. Somos
            capacitados pelo Espírito Santo, para proclamar o Evangelho da Graça e
            cooperar ativamente na edificação da Igreja e na expansão do Reino
            Eterno do SENHOR."
          Icon={<Target />}
        />
        <Card
          ref={card2}
          title="Somos um povo de Santidade"
          text="Somos chamados à santidade pelo Deus Santo. Cremos que batizados no Espírito Santo, podemos seguir a carreira que nos está proposta, e andar à semelhança de Cristo Jesus, nosso SENHOR. "
          Icon={<Peace />}
        />
        <Card
          ref={card3}
          title="Somos um povo Cristão"
          text="Como membros da Igreja do Deus vivo, espalhada ao redor do mundo e através da história, nos unimos aos verdadeiros cristãos na proclamação do senhorio absoluto de Jesus Cristo. "
          Icon={<Christian />}
        />
      </div>
    </div>
  );
};

export default memo(OurValues);

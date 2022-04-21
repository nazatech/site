import React, { memo } from "react";

import { Section, AnimateOnScrollOver } from "atoms";

import image from "images/imagem-da-igreja.png";
import { Button } from "atoms";
import { isDesktop } from "utils";

const TheologySchool = () => {
  return (
    <Section
      title={isDesktop ? null : "Escola Teológica"}
      variant="secondary"
      id="escola-teologica"
      lgHideTitle={true}
    >
      <AnimateOnScrollOver>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-4 w-full max-w-full mr-2">
            <img
              src={image}
              className="lg:w-full lg:pr-20"
              alt="Imagem igreja do nazareno"
            />
          </div>
          <div className="flex flex-col w-full">
            <article className="text-white mb-4 text-lg lg:mb-12">
              {isDesktop && (
                <h2 className="text-4xl mb-8 font-extrabold text-white">
                  Escola Teológica
                </h2>
              )}
              <p className="font-bold mb-2">
                Aperfeiçoando os santos para a obra do Senhor. (Efésios 4:12)
              </p>
              <ul className="leading-8">
                <li>Teologia Arminio-Wesleyana</li>
                <li>Presencial: Terças-feiras</li>
                <li>On-line: Quintas-feiras </li>
                <li>Das 19:30 às 22:30</li>
                <li>
                  Tempo de duração: Dois anos - {new Date().getFullYear()}/
                  {new Date().getFullYear() + 1}
                </li>
                <li>Investimento: R$ 1.920,00 (Valor total)</li>
              </ul>
            </article>
            <Button
              href="mailto:prdenisalves1988@gmail.com"
              variant="secondary"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </AnimateOnScrollOver>
    </Section>
  );
};

export default memo(TheologySchool);

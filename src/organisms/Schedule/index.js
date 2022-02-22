import React, { memo } from "react";

import { Section, AnimateOnScrollOver } from "atoms";

import FacebookIcon from "images/facebook-icon.svg";
import TargetBlank from "images/target-blank.svg";
import YoutubeIcon from "images/youtube-icon.svg";

const DecorativeLine = () => (
  <span className="block w-6 bg-black h-[1px] ml-2 mt-[2px]"></span>
);

const Schedule = () => {
  return (
    <Section title="Agenda de cultos" withContainer={true}>
      <AnimateOnScrollOver>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:grid lg:grid-cols-3 lg:gap-9">
          <article className="flex flex-col mb-9 w-full">
            <div className="mb-1 flex items-center">
              <h4 className="font-extrabold text-2xl">Transmissões ao vivo</h4>
              <span className="rounded block bg-red w-2 h-2 ml-2"></span>
            </div>
            <div className="mb-4 lg:mb-5">
              <p className="text-1xl">Os cultos presenciais são transmitidos</p>
            </div>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer "
              className="flex items-end leading-none mb-3"
            >
              <FacebookIcon />
              <span className="underline font-extrabold mx-2">no Facebook</span>
              <TargetBlank />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end leading-none"
            >
              <YoutubeIcon />
              <span className="underline font-extrabold mx-2">no YouTube</span>
              <TargetBlank />
            </a>
          </article>
          <article className="flex flex-col mb-2 md:mb-0 md:mr-10">
            <h4 className="mb-2 font-extrabold text-2xl">Cultos presenciais</h4>
            <div className="flex items-center mb-2">
              <span className="font-extrabold">Domingo</span>
              <DecorativeLine />
            </div>
            <p>
              <span className="font-extrabold">8h00 - </span> Oração
            </p>
            <p>
              <span className="font-extrabold">8h45 - </span> Escola Bíblica
              Dominical
            </p>
            <p>
              <span className="font-extrabold">10h00 - </span> Culto
            </p>
          </article>
          <article className="flex flex-col lg:mt-10 md:mt-10">
            <div className="flex items-center mb-2">
              <span className="font-extrabold">Quarta-feira</span>
              <DecorativeLine />
            </div>
            <p>
              <span className="font-extrabold">19h00 - </span> Culto
            </p>
          </article>
        </div>
      </AnimateOnScrollOver>
    </Section>
  );
};

export default memo(Schedule);

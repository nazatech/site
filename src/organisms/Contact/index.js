import React, { memo } from "react";

import { Section, AnimateOnScrollOver } from "atoms";

import Instagram from "images/instagram.svg";
import Facebook from "images/facebook.svg";
import Email from "images/email.svg";
import Phone from "images/phone.svg";
import GoogleMaps from "images/google-maps.svg";

const Contact = () => {
  return (
    <Section id="contato" variant="secondary" withContainer={true}>
      <div className="flex flex-col md:grid md:gap-x-20 md:grid-cols-2">
        <AnimateOnScrollOver>
          <div className="mb-10">
            <article className="mb-10">
              <h2 className="font-extrabold mb-2 text-white text-3xl lg:text-5xl">
                Contato
              </h2>
              <p className="text-1xl text-white">
                Converse diretamente conosco por meio de um dos nossos canais
                abertos.
              </p>
            </article>
            <div className="grid grid-cols-4 gap-x-10 w-[248px]">
              <a
                href="https://www.facebook.com/nazarenobarueri"
                target="_blank"
                rel="noopener noreferrer "
              >
                <Facebook className="w-[32px] lg:w-10" />
              </a>
              <a
                href="https://www.instagram.com/nazarenobarueri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-[32px] lg:w-10" />
              </a>
              <a
                href="mailto:nazarenobarueri@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email className="w-[32px] lg:w-10" />
              </a>
              <a
                href="tel:+5511940196122"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-[32px] lg:w-10" />
              </a>
            </div>
          </div>
        </AnimateOnScrollOver>
        <AnimateOnScrollOver>
          <div>
            <article className="mb-10">
              <h2 className="font-extrabold mb-2 text-white text-3xl lg:text-5xl">
                Localização
              </h2>
              <p className="text-1xl text-white">
                Venha nos visitar! Sinta-se em casa conoco. Aqui você encontra
                uma família para pertencer.
              </p>
            </article>
            <article>
              <p className="text-white mb-2">Veja no Google Maps</p>
              <a
                href="https://www.google.com.br/maps/place/Igreja+do+Nazareno+Central+de+Barueri/@-23.4959278,-46.8871642,17z/data=!3m1!4b1!4m5!3m4!1s0x94cf03cd5e9c9b75:0x20f71d3db90308c6!8m2!3d-23.4959278!4d-46.8849755?hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleMaps className="w-[32px] lg:w-10" />
              </a>
            </article>
          </div>
        </AnimateOnScrollOver>
      </div>
    </Section>
  );
};

export default memo(Contact);

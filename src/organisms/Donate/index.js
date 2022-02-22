import React, { memo } from "react";
import { Section, AnimateOnScrollOver } from "atoms";

import ItauLogo from "images/itau.svg";
import PixLogo from "images/pix.svg";
import qrCode from "images/qr-code.png";

const Donate = () => {
  return (
    <Section title="Dízimos e ofertas" withContainer={true}>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:grid lg:grid-cols-3 lg:gap-9">
        <AnimateOnScrollOver>
          <div className="pb-11">
            <article>
              <p className="mb-2">
                Cada um contribua segundo apropôs no seu coração; não com
                tristeza, ou por necessidade; porque Deus ama ao que dá com
                alegria.
              </p>
              <p>2 Coríntios 9:7</p>
            </article>
          </div>
        </AnimateOnScrollOver>
        <AnimateOnScrollOver className="lg:ml-auto md:mr-10 lg:mr-0">
          <div className="mb-10 flex ">
            <ItauLogo className="mr-4 mt-2" />
            <article>
              <h4 className="font-extrabold text-2xl ">Depósito</h4>
              <p>Banco Itaú</p>
              <p>Agência 8580</p>
              <p>CC 06864-4</p>
              <p>CNPJ 59.837.948/0001-49</p>
            </article>
          </div>
        </AnimateOnScrollOver>
        <AnimateOnScrollOver>
          <div className="flex">
            <PixLogo className="mr-4 mt-2" />
            <article>
              <h4 className="font-extrabold text-2xl ">Pix</h4>
              <p>Utilize o nosso e-mail:</p>
              <p className="mb-2"> nazarenobarueri@gmail.com</p>
              <img src={qrCode} alt="QR Code para o Pix da Nazareno Barueri" />
            </article>
          </div>
        </AnimateOnScrollOver>
      </div>
    </Section>
  );
};

export default memo(Donate);

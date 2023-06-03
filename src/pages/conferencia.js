import React, { memo } from "react";
import { Helmet } from "react-helmet";

const Conferencia = () => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Helmet>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeeKYh15UIahiBo3baEvpzeEilHEh_a48un-Tk-cPhI_pKFRA/viewform?embedded=true"
        className="w-screen h-screen"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Formulário de inscrição para a conferência MNI"
      >
        Carregando…
      </iframe>
    </>
  );
};

export default memo(Conferencia);

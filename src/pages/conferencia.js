import React, { memo } from "react";

const Conferencia = () => {
  return (
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
  );
};

export default memo(Conferencia);

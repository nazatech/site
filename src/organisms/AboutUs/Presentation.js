import React, { memo } from "react";
import { Container } from "atoms";
import { AnimateOnScrollOver } from "atoms";

const Presentation = () => {
  return (
    <Container>
      <article className="pt-14 lg:text-2xl font-light text-1xl lg:py-20">
        <AnimateOnScrollOver>
          <p>
            Somos uma comunidade de fé, comissionados a levar as Boas Novas da
            vida em Jesus Cristo às pessoas em todos os lugares e a espalhar a
            mensagem da santidade bíblica para todos.
          </p>
        </AnimateOnScrollOver>
      </article>
    </Container>
  );
};

export default memo(Presentation);

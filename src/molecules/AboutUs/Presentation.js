import React, { memo } from "react";
import { Container } from "atoms";
import { FadeOnScrollOver } from "atoms";

const Presentation = () => {
  return (
    <Container>
      <article className="pt-14 lg:text-2xl font-light text-1xl lg:py-20">
        <p>
          <FadeOnScrollOver>
            Somos uma comunidade de fé, comissionados a levar as Boas Novas da
            vida em Jesus Cristo às pessoas em todos os lugares e a espalhar a
            mensagem da santidade bíblica para todos.
          </FadeOnScrollOver>
        </p>
      </article>
    </Container>
  );
};

export default memo(Presentation);

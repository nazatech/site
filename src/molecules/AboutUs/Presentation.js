import React, { memo, useEffect, useRef } from "react";
import { Container } from "atoms";
import { addClassOnScrollOver } from "utils";

const Presentation = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const target = ref.current;

      addClassOnScrollOver({ target, className: "opacity-100" });
    }
  }, [ref]);

  return (
    <Container>
      <article
        ref={ref}
        className="pt-14 lg:text-2xl font-light text-1xl lg:py-20 opacity-0 transition-opacity duration-1000"
      >
        <p>
          Somos uma comunidade de fé, comissionados a levar as Boas Novas da
          vida em Jesus Cristo às pessoas em todos os lugares e a espalhar a
          mensagem da santidade bíblica para todos.
        </p>
      </article>
    </Container>
  );
};

export default memo(Presentation);

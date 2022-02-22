import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container } from "atoms";
import { useModal } from "hooks";
import getScrollbarWidth from "utils/getScrollbarWidth";

const Background = ({ active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "absolute top-0 right-0 bottom-0 left-0 transition-opacity duration-700 backdrop-blur-sm bg-black-50  ",
        active ? "opacity-100" : "opacity-0"
      )}
    ></div>
  );
};

const Window = ({ active, children }) => {
  return (
    <div
      className={clsx(
        "transition-transform duration-700 bg-white w-full pb-14 pt-20 relative z-20 overflow-y-scroll scrollbar-hide max-h-full",
        active ? "translate-y-0" : "translate-y-full"
      )}
    >
      {children}
    </div>
  );
};

const CloseButton = ({ onClick }) => {
  return (
    <div
      className="flex flex-col justify-between cursor-pointer ml-auto w-6 h-6 absolute right-4 top-8 lg:right-8"
      onClick={onClick}
    >
      <div className="rounded h-[2px] lg:h-[3px] transition bg-black absolute rotate-45 top-[11px] w-6 " />
      <div className="rounded h-[2px] lg:h-[3px] transition bg-black absolute rotate-[135deg] bottom-[11px] lg:bottom-[11px] w-6" />
    </div>
  );
};

const Modal = ({ active, children }) => {
  const { closeModal } = useModal();

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
      setTimeout(() => {
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0";
      }, 300);
    }
  }, [active]);

  return (
    <div
      className={clsx(
        "fixed top-0 right-0 bottom-0 left-0  z-20 flex items-end",
        active
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none delay-1000"
      )}
    >
      <Background active={active} onClick={closeModal} />
      <Window active={active}>
        <Container>
          <CloseButton onClick={closeModal} />

          {children}
        </Container>
      </Window>
    </div>
  );
};

Modal.defaultProps = {
  active: false,
};

Modal.propTypes = {
  active: PropTypes.bool,
};

export default memo(Modal);

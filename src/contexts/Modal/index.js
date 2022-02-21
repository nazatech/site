import React, { createContext, useState, useCallback, memo } from "react";
import { Modal } from "organisms";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(({ children }) => {
    setIsOpen(true);
    setModalChildren(children);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}
      <Modal active={isOpen}>{modalChildren}</Modal>
    </ModalContext.Provider>
  );
};

export default memo(ModalProvider);

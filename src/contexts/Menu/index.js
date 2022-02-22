import React, { createContext, useState, useCallback, memo } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        closeMenu,
        toggleMenu: () => setIsOpen(!isOpen),
        isOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default memo(MenuProvider);

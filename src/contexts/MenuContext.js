import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [open, setOpen] = useState(false);

  const onMenuClick = () => {
    setOpen(!open);
  };

  return (
    <MenuContext.Provider value={{ open, onMenuClick }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;

import React, { createContext, useState, FC, ReactNode } from "react";

interface ISidebarContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleClose: () => void;
}

interface IProps {
  children: ReactNode;
}

export const SidebarContext = createContext<ISidebarContext | null>(null);

export const SidebarProvider: FC<IProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const value: ISidebarContext = {
    isOpen,
    setIsOpen,
    handleClose,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
// export default SidebarProvider;

import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface ISidebarContext {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  handleClose?: () => void;
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

  // const value: ISidebarContext = {
  //   isOpen,
  //   setIsOpen,
  //   handleClose,
  // };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};
// export default SidebarProvider;

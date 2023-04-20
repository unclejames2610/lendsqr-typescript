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
  screenSize?: number | undefined;
  setScreenSize?: Dispatch<SetStateAction<number | undefined>>;
  handleClose?: () => void;
}

interface IProps {
  children: ReactNode;
}

export const SidebarContext = createContext<ISidebarContext | null>(null);

export const SidebarProvider: FC<IProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<number | undefined>(
    window.innerWidth
  );

  const handleClose = (): void => {
    if (screenSize) {
      if (isOpen && screenSize <= 900) {
        setIsOpen(false);
      }
    }
  };

  // const value: ISidebarContext = {
  //   isOpen,
  //   setIsOpen,
  //   handleClose,
  // };

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, handleClose, screenSize, setScreenSize }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
// export default SidebarProvider;

import { createContext, useContext, useState } from "react";

interface HeaderContextType {
  headerIsOpen: boolean;
  setHeaderIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  changeHeaderIsOpen: () => void;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(
  undefined,
);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerIsOpen, setHeaderIsOpen] = useState(false);

  const changeHeaderIsOpen = () => {
    setHeaderIsOpen((prev) => !prev);
  };

  return (
    <HeaderContext.Provider
      value={{ headerIsOpen, setHeaderIsOpen, changeHeaderIsOpen }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }

  return context;
};

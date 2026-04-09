import { HeaderProvider } from "./HeaderContext";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};

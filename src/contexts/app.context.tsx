import { SetStateAction, createContext, useMemo, useState } from "react";

interface AppContextInterface {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<SetStateAction<boolean>>;
  titleHeader: string;
  setTitleHeader: React.Dispatch<SetStateAction<string>>;
}
const inititalState: AppContextInterface = {
  isCollapsed: false,
  setIsCollapsed: () => null,
  titleHeader: "",
  setTitleHeader: () => null,
};
export const AppContent = createContext(inititalState);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [titleHeader, setTitleHeader] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const contextValue = useMemo(
    () => ({
      isCollapsed,
      setIsCollapsed,
      titleHeader,
      setTitleHeader,
    }),
    [isCollapsed, setIsCollapsed, titleHeader, setTitleHeader],
  );
  return (
    <AppContent.Provider value={contextValue}>{children}</AppContent.Provider>
  );
};

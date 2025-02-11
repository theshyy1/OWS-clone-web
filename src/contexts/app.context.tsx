import { SetStateAction, createContext, useMemo, useState } from "react";

interface AppContextInterface {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<SetStateAction<boolean>>;
}
const inititalState: AppContextInterface = {
  isCollapsed: false,
  setIsCollapsed: () => null,
};
export const AppContent = createContext(inititalState);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const contextValue = useMemo(
    () => ({
      isCollapsed,
      setIsCollapsed,
    }),
    [isCollapsed, setIsCollapsed],
  );
  return (
    <AppContent.Provider value={contextValue}>{children}</AppContent.Provider>
  );
};

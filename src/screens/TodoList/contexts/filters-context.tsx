import { ReactNode, createContext, useMemo, useState } from "react";

interface FilterContextInterface {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
}

const initialFilterContext: FilterContextInterface = {
  setFilter: () => null,
  filter: "all",
};

export const FilterContext =
  createContext<FilterContextInterface>(initialFilterContext);
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter, setFilter],
  );
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

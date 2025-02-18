import { ReactNode } from "react";

export const Error = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-error mt-1 block rounded px-2 py-1 text-sm italic text-white shadow-sm">
      {children}
    </span>
  );
};

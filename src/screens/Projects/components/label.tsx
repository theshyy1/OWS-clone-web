import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  htmlFor: string;
}

export const Label = ({ children, htmlFor }: IProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-success peer-focus:text-success absolute top-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
    >
      {children}
    </label>
  );
};

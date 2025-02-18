import React, { ReactNode } from "react";

type ButtonProp = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  type?: "submit" | "button";
};

export const Button: React.FC<ButtonProp> = ({
  onClick,
  type,
  children,
  icon,
  className,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${className} flex items-center justify-center rounded-full px-[14px] py-[9px] text-sm hover:opacity-60`}
    >
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

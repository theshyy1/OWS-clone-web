import React, { ReactNode } from "react";

type ButtonProp = {
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
  isFocus?: boolean;
};

export const Button: React.FC<ButtonProp> = ({
  className,
  onClick,
  icon,
  children,
  isFocus,
}) => {
  return (
    <button
      onClick={onClick}
      className={`my-1 flex items-center rounded bg-black px-3 py-2 text-white hover:bg-black/20 ${className} ${isFocus && "bg-orange"}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

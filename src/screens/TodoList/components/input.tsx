import React, { useEffect, useRef } from "react";

interface InputProp {
  type?: "text" | "checkbox";
  value: string | boolean;
  checked?: boolean;
  onChange: (value: string | boolean) => void;
  placeholder?: string;
  className?: string;
  isError?: boolean;
  messsage?: string;
  autoFocus?: boolean;
}

export const Input: React.FC<InputProp> = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  checked,
  isError = "false",
  messsage = "",
  autoFocus = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "checkbox") {
      onChange(event?.target.checked);
    } else {
      onChange(event?.target.value);
    }
  };
  return (
    <div className="space-y-1">
      <input
        ref={inputRef}
        type={type}
        onChange={handleChange}
        checked={checked}
        value={value ? (value as string) : ""}
        placeholder={placeholder}
        className={`rounded px-3 py-2 text-sm outline-none ${className} ${
          isError ? "border-red-500 border" : ""
        }`}
      />
      {isError && <p className="text-error pl-2 text-sm">{messsage}</p>}
    </div>
  );
};

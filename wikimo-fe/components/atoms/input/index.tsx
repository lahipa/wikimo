import { useState, InputHTMLAttributes } from "react";
import cx from "classnames";

interface InputProps {
  type?: "text" | "email" | "password" | "number";
  id: string;
  label: string;
  block?: boolean;
  required?: boolean;
  direction?: "row" | "column";
  variant: "primary" | "secondary" | "info" | "danger" | "success" | "warning";
  size?: "base" | "large";
  className?: string;
  error?: boolean;
  helper?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function Input(props: InputProps) {
  const { type, id, label, block, required, direction, variant, size, className, error, helper, inputProps } = props;

  const [focus, setFocus] = useState<boolean>(false);

  const inputclass = cx(
    "px-5 rounded-md outline-none bg-gray-100 bg-opacity-5 shadow-xl focus:border-2",
    className,
    {
      "w-full": block,
      "focus:border-blue-300": variant === "info",
      "focus:border-green-300": variant === "success",
      "focus:border-yellow-300": variant === "warning",
      "py-4 text-base": size === "base",
      "py-5 text-xl": size === "large",
      "border-2 border-red-300": error,
    },
  );

  const formcontrolclass = cx(
    "flex gap-2",
    {
      "flex-col": direction === "column",
      "flex-row": direction === "row",
    },
  );

  const helperclass = cx(
    "text-sm",
    {
      "text-red-300": error,
    },
  );

  const labelclass = cx({
    "text-red-300": error && !focus,
    "text-blue-300": focus && variant === "info",
    "text-green-300": focus && variant === "success",
    "text-yellow-300": focus && variant === "warning",
  });

  return (
    <div className={formcontrolclass}>
      <label htmlFor={id} className={labelclass}>
        {label}
        {required && " *"}
      </label>

      <input
        type={type}
        id={id}
        className={inputclass}
        onFocus={() => { setFocus(true); }}
        onBlur={() => { setFocus(false); }}
        {...inputProps}
        autoComplete=""
      />
      {error ? <span className={helperclass}>{helper}</span> : null}
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  block: false,
  required: false,
  direction: "column",
  size: "base",
  className: undefined,
  error: false,
  helper: undefined,
  inputProps: undefined,
};
import { InfoSquare, InfoCircle, Danger, TickSquare } from "react-iconly";
import cx from "classnames";

interface AlertProps {
  children: JSX.Element | JSX.Element[];
  variant: "info" | "warning" | "error" | "success";
  close?: () => void;
}

export default function Alert(props: AlertProps) {
  const { children, variant, close } = props;

  const alertclass = cx(
    "flex flex-col sm:flex-row gap-6",
    "items-center py-4 px-5 rounded-xl bg-opacity-20",
    {
      "bg-blue-500 text-blue-200": variant === "info",
      "bg-yellow-500 text-yellow-200": variant === "warning",
      "bg-red-500 text-red-200": variant === "error",
      "bg-green-500 text-green-200": variant === "success",
    }
  );

  let Icon = InfoSquare;

  if (variant === "warning") {
    Icon = InfoCircle;
  } else if (variant === "error") {
    Icon = Danger;
  } else if (variant === "success") {
    Icon = TickSquare;
  }

  return (
    <div className={alertclass}>
      <Icon size="xlarge" primaryColor="currentColor" />
      <div className="font-medium">{children}</div>
    </div>
  );
}

Alert.defaultProps = {
  close: undefined,
};

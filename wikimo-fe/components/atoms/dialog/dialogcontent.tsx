import { ReactElement } from "react";

interface DialogContentProps {
  children: JSX.Element | JSX.Element[];
}

export default function DialogContent(props: DialogContentProps) {
  const { children } = props;

  return (
    <div className="px-6 py-4">
      {children}
    </div>
  );
}
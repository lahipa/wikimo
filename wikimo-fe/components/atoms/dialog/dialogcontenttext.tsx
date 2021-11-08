interface DialogContentTextProps {
  children: string;
}

export default function DialogContentText(props: DialogContentTextProps) {
  const { children } = props;

  return (
    <p className="text-base text-white text-opacity-70">
      {children}
    </p>
  );
}
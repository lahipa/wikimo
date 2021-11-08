interface DialogTitleProps {
  children: string;
}

export default function DialogTitle(props: DialogTitleProps) {
  const { children } = props;

  return (
    <div className="px-6 pt-4 pb-1">
      <h4 className="text-xl font-semibold">{children}</h4>
    </div>
  );
}

import cx from "classnames";

interface DialogActionProps {
  children: JSX.Element | JSX.Element[];
}

export default function DialogAction(props: DialogActionProps) {
  const { children } = props;

  return (
    <div className="px-3 py-2 flex items-center justify-end gap-2">
      {Array.isArray(children)
        ? children.slice(0, 3).map((element, i) => {
            return (
              <div
                key={i.toString()}
                className={`${
                  children.length > 2 && i === 0 ? "flex-1" : null
                }`}
              >
                {element}
              </div>
            );
          })
        : children}
    </div>
  );
}

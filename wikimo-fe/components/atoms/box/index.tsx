import { HTMLAttributes } from "react";
import cx from "classnames";

interface BoxProps {
  children?: JSX.Element | JSX.Element[];
  as: "div" | "container" | "section",
  direction?: "row" | "column";
  flex?: "initial" | "auto" | "none" | "1";
  items?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  className?: string;
  htmlProps?: HTMLAttributes<HTMLDivElement> | {
    "data-aos"?: string,
    "data-aos-duration"?: number,
    "data-sitekey"?: string,
  };
}

export default function Box(props: BoxProps) {
  const { children, as, direction, flex, items, justify, className, htmlProps } = props;

  const boxClass = cx(
    "flex",
    {
      "container sm:mx-auto px-5": as === "container",
      "flex-row": direction === "row",
      "flex-col": direction === "column",
      "items-start": items === "start",
      "items-center": items === "center",
      "items-end": items === "end",
      "items-baseline": items === "baseline",
      "items-stretch": items === "stretch",
      "justify-start": justify === "start",
      "justify-center": justify === "center",
      "justify-end": justify === "end",
      "justify-between": justify === "between",
      "justify-around": justify === "around",
      "justify-evenly": justify === "evenly",
      "flex-initial": flex === "initial",
      "flex-auto": flex === "auto",
      "flex-none": flex === "none",
      "flex-1": flex === "1",
    },
    className,
  );

  return (
    <div className={boxClass} {...htmlProps}>
      {children}
    </div>
  );
}

Box.defaultProps = {
  children: undefined,
  direction: "row",
  flex: undefined,
  items: undefined,
  justify: undefined,
  className: undefined,
  htmlProps: undefined,
};
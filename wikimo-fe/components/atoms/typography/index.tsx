import { Component, ReactNode } from "react";
import cx from "classnames";

interface TypographyProps {
  children: JSX.Element | JSX.Element[] | ReactNode;
  tags: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  align?: "left" | "center" | "right" | "justify";
  className?: string;
}

export default function Typography(props: TypographyProps) {
  const { children, tags, align, className } = props;

  const Tags: any = tags!;

  const TypographyClass = cx(
    className,
    {
      "text-4xl": tags === "h1",
      "text-3xl": tags === "h2",
      "text-2xl": tags === "h3",
      "text-xl": tags === "h4",
      "text-lg": tags === "h5",
      "text-sm": tags === "h6",
      "text-base": tags === "p",
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
      "text-justify": align === "justify",
    },
  );

  return <Tags className={TypographyClass}>{children}</Tags>;
}

Typography.defaultProps = {
  align: undefined,
  className: undefined,
};
import Link from "next/link";
import cx from "classnames";

interface AnchorProps {
  children: JSX.Element | JSX.Element[] | string;
  href: string;
  variant: "primary" | "secondary" | "info" | "danger" | "success" | "warning";
  className?: string;
}

export default function Anchor(props: AnchorProps) {
  const { children, href, variant, className } = props;

  const anchorclass = cx(
    {
      "hover:text-blue-400": variant === "info",
      "hover:text-red-400": variant === "danger",
      "hover:text-green-400": variant === "success",
      "hover:text-yellow-400": variant === "warning",
    },
    className
  );

  return (
    <Link href={href}>
      <a className={anchorclass}>{children}</a>
    </Link>
  );
}

Anchor.defaultProps = {
  className: undefined,
};

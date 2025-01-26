import { useLenis } from "lenis/react";
import { LinkProps } from "next/link";
import Link from "next/link";

interface CustomLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function ResetLenisLink({
  children,
  className,
  ...linkProps
}: CustomLinkProps) {
  const lenis = useLenis();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    lenis?.stop();
    lenis?.start();

    linkProps.onClick?.(e);
  };

  return (
    <Link {...linkProps} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

import { useLenis } from "lenis/react";
import { LinkProps } from "next/link";
import Link from "next/link";

interface CustomLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

// Smooth Scrolling causes issues with Dynamic Routes on Next JS and Lenis. Issue here: https://github.com/vercel/next.js/discussions/64435
// The solution is to disable the css for smooth scrolling, but Lenis has this without the css rule, so disabling Lenis works as well.
// This Link component is required so that Lenis is restarted.
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

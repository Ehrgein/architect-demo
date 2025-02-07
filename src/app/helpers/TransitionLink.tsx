import Link, { LinkProps } from "next/link";
import React, { SetStateAction } from "react";
import { useRouter } from "next/navigation";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // e.preventDefault();

    if (href === "pathname") {
      return;
    }

    // await sleep(450);

    router.push(`${href}`);
  };

  return (
    <Link onClick={handleTransition} {...props} href={href}>
      {children}
    </Link>
  );
};

export default TransitionLink;

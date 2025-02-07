import Link, { LinkProps } from "next/link";
import React, { SetStateAction } from "react";
import { useRouter } from "next/navigation";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  isExiting?: boolean;
  setIsExiting: React.Dispatch<SetStateAction<boolean>>;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  setIsExiting,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (href === "pathname") {
      return;
    }

    setIsExiting(true);

    await sleep(1000);

    router.push(`${href}`);
  };

  return (
    <Link onClick={handleTransition} {...props} href={href}>
      {children}
    </Link>
  );
};

export default TransitionLink;

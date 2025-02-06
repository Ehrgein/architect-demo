"use client";
import React, { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lenis = useLenis();

  React.useEffect(() => {
    if (lenis) {
      lenis.stop();
    }

    const handleScrollToTop = () => {
      if (lenis) {
        lenis.start();
        window.scrollTo(0, 0);
      }
    };

    handleScrollToTop();
  }, [pathname, searchParams, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;

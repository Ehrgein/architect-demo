"use client";
import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;

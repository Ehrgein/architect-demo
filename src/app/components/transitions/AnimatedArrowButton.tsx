"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

function AnimatedArrowButton({
  isAnimated,
  setisAnimated,
}: {
  isAnimated: boolean;
  setisAnimated: (value: boolean) => void;
}) {
  return (
    <div className="relative h-9 w-9 overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ x: "-100%" }}
        animate={isAnimated ? { x: "0%" } : { x: "-200%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <Image
          alt="hi"
          src="/arrowright.svg"
          className="w-6 h-6"
          width={24}
          height={24}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ x: "0%" }}
        animate={isAnimated ? { x: "200%" } : { x: "0%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <Image
          alt="hi"
          src="/arrowright.svg"
          className="w-6 h-6"
          width={24}
          height={24}
        />
      </motion.div>
    </div>
  );
}

export default AnimatedArrowButton;

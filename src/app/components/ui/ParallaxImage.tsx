"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type Dimensions = {
  width: "w-1/2" | "w-1/4" | "w-full";
  height: string;
};

function ParallaxImage({ height, width }: Dimensions) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <>
      <div
        ref={ref}
        className={`w-full ${height} items-center flex gap-12 justify-center overflow-hidden`}
      >
        <motion.div style={{ y }} className={`${width} h-full`}>
          <motion.div className="relative w-full h-full">
            <Image
              src="/villa4.jpg"
              fill
              alt="Parallax Effect"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ParallaxImage;

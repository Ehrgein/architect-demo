"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type Dimensions = {
  width: "w-1/2" | "w-1/4" | "w-full";
  height: string;
  src: StaticImageData;
};

function ParallaxImage({ height, width, src }: Dimensions) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-55, 55]);

  return (
    <>
      <div ref={ref} className={`w-full ${height} overflow-hidden`}>
        <motion.div style={{ y }} className={`${width} h-full`}>
          <motion.div className="relative w-full h-full">
            <Image
              src={src}
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

"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type Dimensions = {
  width: "w-1/2" | "w-1/4" | "w-full";
  height: string;
  src: StaticImageData[];
  //   sizes: string;
};

function TwoColumnParallaxImage({ height, width, src }: Dimensions) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-55, 55]);

  return (
    <>
      <div ref={ref} className={`w-full ${height} overflow-hidden`}>
        <div className={`relative w-full ${height} overflow-hidden`}>
          <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
            <Image
              src={src[1]}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              alt="Parallax Effect"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
      <div ref={ref} className={`w-full ${height} overflow-hidden`}>
        <motion.div
          layout="position"
          style={{ y }}
          className={`${width} h-full`}
        >
          <motion.div className="relative w-full h-full">
            <Image
              src={src[1]}
              fill
              sizes={"(max-width: 1920px) 4vw"}
              alt="Parallax Effect"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default TwoColumnParallaxImage;

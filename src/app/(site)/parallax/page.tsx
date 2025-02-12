"use client";
import Image from "next/image";
import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

function ParallaxImage() {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      <div
        ref={ref}
        className={`w-full h-[600px] items-center flex flex-col justify-center relative`}
      >
        <motion.div
          style={{ y }} // Translate the image content
          className="absolute inset-0 w-full h-[600px] overflow-hidden will-change-transform"
        >
          <Image
            src="/land1.jpg"
            alt="Parallax Effect"
            fill
            className="object-cover w-full h-full"
          />
        </motion.div>
        {/* <div
          style={{
            position: "relative",
            height: "60vh",
            width: "100%",
            clipPath: "inset(0 0 0 0)",
          }}
        >
          <div
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
            }}
          >
            <Image
              src="/villa1.jpg"
              alt="hi"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ParallaxImage;

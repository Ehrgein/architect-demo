import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Hero() {
  // const text =
  //   "Shaping spaces with creativity, precision, and bringing architectural visions to life";

  return (
    <>
      <div className="mt-48 px-8">
        <div className="overflow-hidden">
          {/* <motion.h2 className="text-black-pure text-7xl w-[80%] leading-snug">
            {text.split(" ").map((word, index) => {
              return (
                <motion.span
                  key={crypto.randomUUID()}
                  initial={{ y: "200%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.3,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: index * 0.005,
                  }}
                  className="inline-block"
                >
                  <motion.span className="inline-block">
                    {word}&nbsp;
                  </motion.span>
                </motion.span>
              );
            })}
          </motion.h2> */}
          <h2 className="text-black-pure text-7xl w-[80%] leading-snug">
            Shaping spaces with creativity, precision, and bringing
            architectural visions to life
          </h2>
        </div>
      </div>
      <div className="w-full pt-20 px-8">
        <div className="h-[900px] relative">
          <Image
            src="/optabout.jpg"
            fill
            className="object-cover"
            alt="hi"
            sizes="(max-width:2000px) 85vw"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default Hero;

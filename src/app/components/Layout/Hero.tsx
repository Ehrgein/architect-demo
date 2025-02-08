import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-6 2xl:px-8">
        <div className="mt-24 md:mt-40 lg:mt-40">
          <div className="">
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
            <h2
              className="text-black-pure text-3xl md:text-5xl lg:text-5xl 2xl:text-7xl w-full md:w-full lg:w-[90%] 2xl:w-4/5
          leading-normal md:leading-snug lg:leading-normal 2xl:leading-snug"
            >
              Shaping spaces with creativity, precision, and bringing
              architectural visions to life.
            </h2>
          </div>
        </div>
        <div className="w-full pt-8 md:pt-12 lg:pt-12 desktop:pt-20">
          <div className="h-[900px] relative">
            <Image
              src="/optabout.jpg"
              fill
              className="object-cover"
              alt="hi"
              sizes="(max-width: 500px) 100vw, (max-width: 2000px) 85vw, 85vw"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

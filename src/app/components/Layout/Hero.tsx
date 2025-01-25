import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="mt-48 px-8">
        <h2 className="text-black-pure text-7xl w-[80%] leading-snug">
          Shaping spaces with creativity, precision, and bringing architectural
          visions to life.
        </h2>
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

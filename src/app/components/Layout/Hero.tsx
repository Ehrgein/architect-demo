"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { slowStartQuickEnd, menuOpen } from "@/app/helpers/beziers";

function Hero() {
  return (
    <>
      <div className="mt-48 px-8">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "easeInOut" }}
            className="text-black-pure text-7xl w-[80%] leading-snug"
          >
            Shaping spaces with creativity, precision, and bringing
            architectural visions to life.
          </motion.h2>
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

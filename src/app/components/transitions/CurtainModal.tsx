"use client";
import React from "react";
import { motion } from "motion/react";

function CurtainModal() {
  return (
    <div className="w-full h-screen ">
      <motion.div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#343434]"
        ></motion.div>
      </motion.div>
      <div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-101%" }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#343434]"
        ></motion.div>
      </div>
      <div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#343434]"
        ></motion.div>
      </div>
      <div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#343434]"
        ></motion.div>
      </div>
    </div>
  );
}

export default CurtainModal;

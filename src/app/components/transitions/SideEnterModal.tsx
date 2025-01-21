"use client";
import React from "react";
import { motion } from "motion/react";

function SideEnterModal() {
  return (
    <div className="w-full h-screen flex">
      <motion.div className="w-2/4 h-screen overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: [1, -0.01, 0.17, 0.91],
            duration: 1.4,
            delay: 0.25,
          }}
          className="w-full h-full bg-[#343434]"
        ></motion.div>
      </motion.div>
      <div className="w-2/4 h-screen overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{
            ease: [1, -0.01, 0.17, 0.91],
            duration: 1.4,
            delay: 0.25,
          }}
          className="w-full h-full bg-[#343434]"
        ></motion.div>
      </div>
    </div>
  );
}

export default SideEnterModal;

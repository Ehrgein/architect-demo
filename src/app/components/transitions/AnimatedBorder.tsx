import React from "react";
import { motion } from "motion/react";

function AnimatedBorder({ delay }: { delay: number }) {
  return (
    <motion.div
      className="bg-black-medium h-[1px] w-full"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: delay }}
    ></motion.div>
  );
}

export default AnimatedBorder;

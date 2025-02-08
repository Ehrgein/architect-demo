"use client";
import React from "react";
import { motion } from "framer-motion";

function TemplateTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "25px" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default TemplateTransition;

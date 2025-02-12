"use client";
import React from "react";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

function page() {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <>
      <section className="h-screen"></section>
      <section ref={ref} className="overflow-hidden pt-[5lvh] pb-[5lvh]">
        <motion.div className="flex overflow-hidden">
          <motion.div
            style={{ y }}
            className="relative h-[80rem] w-[30rem] mt-[-50rem]"
          >
            <Image alt="" src="/villa4.jpg" fill className="object-cover" />
          </motion.div>
        </motion.div>
      </section>
      <section className="h-screen"></section>
    </>
  );
}

export default page;

"use client";
import React from "react";
import { motion, useAnimate, usePresence, AnimatePresence } from "motion/react";
import { enterAnimate } from "@/app/helpers/useAnimations";

function EnterModal() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  const openModalVariants = {
    hidden: {
      y: "0%",
    },
    enter: { y: "-100%" },
  };

  React.useEffect(() => {
    if (isPresent) {
      enterAnimate();
    }
  }, [isPresent]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            ref={scope}
            variants={openModalVariants}
            className="w-full h-screen absolute top-0 z-50 overflow-hidden"
          >
            <motion.div
              id="modal"
              //   initial={{ y: "0%" }}
              // animate={endModal ? { y: "100%" } : { y: "0%" }}
              //   transition={{
              //     delay: 1,
              //     duration: 1.2,
              //     ease: "easeInOut",
              //   }}
              className="bg-[#DFD9D9] h-full w-full flex flex-col justify-center items-center"
            >
              <div className="w-fit overflow-hidden">
                <motion.div
                  id="line"
                  initial={{ x: "-100%" }}
                  transition={{
                    duration: 1,
                    ease: [0.87, 0.23, 0.87, 0.23],
                  }}
                  // onAnimationComplete={() => setEndModal(true)}
                  className="w-full bg-[#151515] h-[1px]"
                ></motion.div>
                <motion.div className="pt-4">
                  <p id="studio" className="text-base tracking-wide">
                    PRIM Estudio
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <motion.div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={"hidden"}
          animate={isLoading ? "hidden" : "enter"}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#DFD9D9]"
        ></motion.div>
      </motion.div>
      <div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={"hidden"}
          animate={isLoading ? "hidden" : "enter"}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#DFD9D9]"
        ></motion.div>
      </div>
      <div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={"hidden"}
          animate={isLoading ? "hidden" : "enter"}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#DFD9D9]"
        ></motion.div>
      </div>
      <div className="w-full h-1/4 overflow-hidden">
        <motion.div
          initial={"hidden"}
          animate={isLoading ? "hidden" : "enter"}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="w-full h-full bg-[#DFD9D9]"
        ></motion.div>
      </div> */}
    </>
  );
}

export default EnterModal;

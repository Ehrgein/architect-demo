"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/app/constants/projectdata";
import { motion } from "motion/react";

function ProjectTitle() {
  return (
    <section className="flex items-center px-8 justify-between">
      <div className="flex items-center ">
        <h2 className="text-5xl font-medium text-black-light">OUR WORK</h2>
        {/* <div className="w-[150px] bg-[#626262] h-[1px] ml-8 opacity-60 mt-2"></div> */}
      </div>

      {/* <p className="w-[800px] text-xl text-black-light leading-loose pt-10">
        Acompañamos a nuestros clientes particulares o inversionistas durante el
        proceso de diseño de la obra tomando en cuenta sus experiencias y
        necesidades para adecuarlas a la construcción de una obra moderna y
        acorde a sus necesidades.
      </p> */}
    </section>
  );
}

export function Projects() {
  return (
    <>
      <div className="flex items-center px-8">
        <h2 className="text-5xl font-medium text-black-light">OUR WORK</h2>
      </div>
      {/* <ProjectTitle /> */}
      <div className="w-full grid grid-cols-3 px-8 gap-8 pt-12">
        {projects.map(({ title, type, src }) => (
          <div key={title}>
            <div className="w-full h-[650px] relative overflow-hidden origin-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image
                  src={src}
                  className="w-full h-full object-cover"
                  fill
                  alt="hi"
                />
              </motion.div>
            </div>
            <p className="text-lg text-black-light tracking-tight pt-4 uppercase">
              {title}
            </p>
            <p className="text-black-light opacity-60 capitalize text-[13px] pt-1">
              {type}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;

"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/app/helpers/projectadata";
import { motion } from "motion/react";

function ProjectTitle() {
  return (
    <section className="flex items-center px-24 justify-between">
      <div className="pt-32 pb-32 flex items-center ">
        <h2 className="text-[50px] font-medium  text-[#353535]">PROYECTOS</h2>
        <div className="w-[150px] bg-[#626262] h-[1px] ml-8 opacity-60 mt-2"></div>
      </div>

      <p className="w-[800px] text-xl text-[#353535] leading-loose pt-10">
        Acompañamos a nuestros clientes particulares o inversionistas durante el
        proceso de diseño de la obra tomando en cuenta sus experiencias y
        necesidades para adecuarlas a la construcción de una obra moderna y
        acorde a sus necesidades.
      </p>
    </section>
  );
}

export function Projects() {
  return (
    <>
      <ProjectTitle />
      <div className="w-full grid grid-cols-2 px-24 pb-40 gap-20 pt-40">
        {projects.map(({ title, type, src }) => (
          <div key={title} className="">
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
            <p className="text-xl text-[#353535] tracking-wide pt-4 uppercase">
              {title}
            </p>
            <p className="text-[#353535] opacity-60 capitalize text-base pt-1">
              {type}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;

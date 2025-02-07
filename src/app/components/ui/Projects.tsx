"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/app/constants/projectdata";
import { motion } from "motion/react";

import TransitionLink from "@/app/helpers/TransitionLink";

function ProjectItem() {
  const [isExiting, setIsExiting] = React.useState<boolean>(false);

  return (
    <>
      {projects.map(({ title, type, src, slug }) => (
        <div key={title}>
          <div className="w-full h-[500px] md:h-[650px] xl:h-[550px] relative overflow-hidden origin-center">
            <TransitionLink
              setIsExiting={setIsExiting}
              href={`/projects/${slug}`}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image
                  src={src}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1920px) 1200px"
                  fill
                  alt="hi"
                />
              </motion.div>
            </TransitionLink>
          </div>
          <p className="text-lg text-black-light tracking-tight pt-4 uppercase">
            {title}
          </p>
          <p className="text-black-light opacity-60 capitalize text-[13px] pt-[2px] md:pt-1">
            {type}
          </p>
        </div>
      ))}
    </>
  );
}

export function Projects() {
  return (
    <>
      <div
        id="projects"
        className="flex items-center px-4 md:px-8 lg:px-6 xl:px-6 desktop:px-8"
      >
        <h2 className="text-5xl font-medium text-black-light">OUR WORK</h2>
      </div>
      {/* <ProjectTitle /> */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 
        px-4 md:px-8 lg:px-6 xl:px-8
       gap-8 md:gap-8 lg:gap-7 xl:gap-6 py-12"
      >
        <ProjectItem />
      </div>
    </>
  );
}

export default Projects;

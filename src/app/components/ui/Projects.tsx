"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/app/constants/projectdata";
import { motion } from "motion/react";
import Link from "next/link";

function ProjectItem() {
  return (
    <>
      {projects.map(({ title, type, src, slug }) => (
        <div key={title}>
          <div className="w-full h-[650px] relative overflow-hidden origin-center">
            <Link href={`/projects/${slug}`}>
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
            </Link>
          </div>
          <p className="text-lg text-black-light tracking-tight pt-4 uppercase">
            {title}
          </p>
          <p className="text-black-light opacity-60 capitalize text-[13px] pt-1">
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
      <div className="flex items-center px-8">
        <h2 className="text-5xl font-medium text-black-light">OUR WORK</h2>
      </div>
      {/* <ProjectTitle /> */}
      <div className="w-full grid grid-cols-3 px-8 gap-8 pt-12">
        <ProjectItem />
      </div>
    </>
  );
}

export default Projects;

"use client";
import React from "react";
import ParallaxImage from "../ui/ParallaxImage";
import { StaticImageData } from "next/image";
import TransitionLink from "@/app/helpers/TransitionLink";
function NextProject({
  nextSlug,
  nextTitle,
  nextSrc,
}: {
  nextSlug: string;
  nextTitle: string;
  nextSrc: StaticImageData | string;
}) {
  return (
    <>
      <section className="pt-36">
        <div className="mobilesm:space-y-3 md:space-y-8">
          <div className="w-fit pl-2">
            <h4 className="uppercase text-[#363636] tracking-wide py-1 text-sm ">
              Next Project
            </h4>
            <div className="bg-[#363636] h-[1px] w-full opacity-60"></div>
          </div>
          <h2 className="uppercase leading-tight md:leading-none text-5xl mobilexl:text-[4.5rem] md:text-7xl text-[#363636]">
            {nextTitle}
          </h2>
        </div>
        <div className="pt-4 md:pt-10">
          <TransitionLink href={`/projects/${nextSlug}`}>
            <ParallaxImage
              sizes="(max-width: 1920px) 95vw, 100vw"
              src={nextSrc}
              height="h-[550px] md:h-[650px]"
              width="w-full"
            />
          </TransitionLink>
        </div>
      </section>
    </>
  );
}

export default NextProject;

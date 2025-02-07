"use client";
import React from "react";
import ParallaxImage from "../ui/ParallaxImage";
import { StaticImageData } from "next/image";

import ResetLenisLink from "@/app/helpers/ResetLenisLink";
function NextProject({
  nextSlug,
  nextTitle,
  nextSrc,
}: {
  nextSlug: string;
  nextTitle: string;
  nextSrc: StaticImageData;
}) {
  return (
    <>
      <section className="pt-36">
        <div className="space-y-8">
          <div className="w-fit pl-2">
            <h4 className="uppercase text-[#363636] tracking-wide py-1 text-sm ">
              Next Project
            </h4>
            <div className="bg-[#363636] h-[1px] w-full opacity-60"></div>
          </div>
          <h2 className="uppercase leading-tight md:leading-none text-[4.5rem] md:text-7xl text-[#363636]">
            {nextTitle}
          </h2>
        </div>
        <div className="pt-10">
          <ResetLenisLink href={`/projects/${nextSlug}`}>
            <ParallaxImage
              sizes="(max-width: 1920px) 90vw"
              src={nextSrc}
              height="h-[550px] md:h-[650px]"
              width="w-full"
            />
          </ResetLenisLink>
        </div>
      </section>
    </>
  );
}

export default NextProject;

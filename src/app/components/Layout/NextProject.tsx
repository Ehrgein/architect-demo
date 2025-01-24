"use client";
import React from "react";
import land3 from "../../../../public/land3.jpg";
import ParallaxImage from "../ui/ParallaxImage";
import Link from "next/link";
import { StaticImageData } from "next/image";

function NextProject({
  nextSlug,
  nextTitle,
  nextSrc,
}: {
  nextSlug: string;
  nextTitle: string;
  nextSrc: StaticImageData;
}) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [nextSlug]);

  return (
    <>
      <div className="space-y-8">
        <div className="w-fit pl-2">
          <h4 className="uppercase text-[#363636] tracking-wide py-1 text-sm ">
            Next Project
          </h4>
          <div className="bg-[#363636] h-[1px] w-full opacity-60"></div>
        </div>
        <h2 className="uppercase text-7xl text-[#363636]">{nextTitle}</h2>
      </div>
      <div className="pt-10">
        <Link href={nextSlug} target="_top">
          <ParallaxImage src={nextSrc} height="h-[650px]" width="w-full" />
        </Link>
      </div>
    </>
  );
}

export default NextProject;

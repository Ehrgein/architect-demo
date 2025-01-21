import Image from "next/image";
import React from "react";
import ProjectAbout from "../components/ui/ProjectAbout";
import ParallaxImage from "../components/ui/ParallaxImage";
import StickyDescription from "../components/ui/StickyDescription";

function ProjectDescription() {
  return (
    <div className="pt-40 pb-12">
      <h1 className="text-[110px] pb-8 text-[#242424] font-medium">
        Aqua Suites
      </h1>
      <div className="text-[15px] uppercase flex justify-between text-[#363636]">
        <p>Hotel Boutique - Commercial</p>
        <p className="uppercase text-[#363636]">ankara, turkey</p>
      </div>
    </div>
  );
}

function NavProject() {
  return (
    <nav className="border-b-[#0E0D0D] border-b-[1px] w-full">
      <ul className="flex justify-between pt-7 items-center px-8 pb-8">
        <li className="text-2xl">PRIM STUDIO</li>
        <li className="">
          <svg
            aria-label="Opens hamburger menu"
            role="button"
            width="64"
            height="48"
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="22" width="60" height="1" fill="currentColor" />

            <rect x="8" y="34" width="60" height="1" fill="currentColor" />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

function ProjectPage() {
  return (
    <div className="px-12">
      <NavProject />
      <ProjectDescription />
      <div className="w-fulll h-[750px] relative">
        <Image
          src="/villa3.jpg"
          className="w-full h-full object-cover"
          fill
          alt="hi"
        />
      </div>
      <ProjectAbout />
      <ParallaxImage width={"w-full"} height={"h-[900px]"} />

      <ParallaxImage height="h-[850px]" width="w-full" />
      <div className="w-full flex pt-32">
        <ParallaxImage height="h-[850px]" width="w-full" />
        <ParallaxImage height="h-[850px]" width="w-1/2" />
      </div>
      <StickyDescription />
      <div className="h-screen"></div>
    </div>
  );
}

export default ProjectPage;

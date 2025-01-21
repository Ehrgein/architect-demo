import React from "react";
import { projects } from "../helpers/projectadata";
import Image from "next/image";

function Sticky() {
  return (
    <>
      <div className="flex w-full">
        <div className="relative">
          <p className="sticky top-0">hello this is content</p>
        </div>
        <div className="flex flex-col w-1/2">
          {projects.map((project) => {
            return (
              <div key={project.title} className="w-[900px] h-[1080px]">
                <Image
                  src={project.src}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default Sticky;

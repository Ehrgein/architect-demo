import React from "react";
import land3 from "../../../../public/land3.jpg";
import ParallaxImage from "../ui/ParallaxImage";

function NextProject() {
  return (
    <>
      <div className="space-y-8">
        <div className="w-fit pl-2">
          <h4 className="uppercase text-[#363636] tracking-wide py-1 text-sm ">
            Next Project
          </h4>
          <div className="bg-[#363636] h-[1px] w-full opacity-60"></div>
        </div>
        <h2 className="uppercase text-7xl text-[#363636]">
          pramana experience
        </h2>
      </div>
      <div className="pt-10">
        <ParallaxImage src={land3} height="h-[650px]" width="w-full" />
      </div>
    </>
  );
}

export default NextProject;

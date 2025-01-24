import React from "react";
import Image, { StaticImageData } from "next/image";
import ParallaxImage from "./ParallaxImage";

function StickyDescription({
  src,
  project_details,
}: {
  src: StaticImageData;
  project_details: string[];
}) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="col-start-1 -col-end-1 grid grid-cols-8 text-[#505050]">
        <div className="col-start-2 col-end-4">
          <div className="sticky top-20">
            <h3 className="col-span-1 text-base font-medium uppercase">
              Project Details
            </h3>
            {project_details.map((paragraph) => (
              <p
                key={paragraph}
                className="pt-9 text-base leading-[1.8] w-[50ch] tracking-wide"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="relative col-start-5 -col-end-1 w-full h-[1000px]">
          <ParallaxImage src={src} width="w-full" height="h-full" />
        </div>
      </div>
    </div>
  );
}

export default StickyDescription;

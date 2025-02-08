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
    <section className="pt-24 md:pt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-start-1 -col-end-1 grid grid-cols-1 md:grid-cols-8 desktop:grid-cols-8 text-[#505050]">
          <div className="col-span-1 md:col-start-2 lg:col-start-1 xl:col-start-2 md:col-end-4">
            <div className="md:sticky pt-12 md:top-20 md:pt-12 lg:pt-0 xl:pt-0 desktop:pt-12">
              <h3 className="col-span-1 text-base font-medium uppercase">
                Project Details
              </h3>
              {project_details.map((paragraph) => (
                <p
                  key={paragraph}
                  className="pt-9 text-base leading-[1.8] w-full md:w-[50ch] lg:w-full xl:w-[50ch] tracking-wide"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div
            className="relative
          pt-12 md:pt-0 col-span-1
          md:col-start-5 md:-col-end-1 w-full h-[500px] md:h-[1000px]"
          >
            <ParallaxImage
              sizes="(max-width: 1920px) 50vw"
              src={src}
              width="w-full"
              height="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StickyDescription;

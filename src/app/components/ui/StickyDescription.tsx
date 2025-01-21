import React from "react";
import Image from "next/image";
import ParallaxImage from "./ParallaxImage";

function ProjectDescriptionParagraph() {
  return (
    <div className="sticky top-10">
      <h3 className="col-span-1 text-base font-medium uppercase">
        Project Details
      </h3>
      <p className="pt-9 text-base leading-[1.8] w-[50ch] tracking-wide">
        The construction of the beach hotel was meticulously planned to
        harmonize with its natural surroundings, utilizing sustainable materials
        and innovative design techniques. The foundation was reinforced to
        withstand coastal conditions, while eco-friendly resources such as
        locally sourced timber and solar panels were incorporated to reduce
        environmental impact
      </p>
      <p className="pt-9 text-base leading-[1.8] w-[50ch] tracking-wide">
        The hotel's layout was carefully crafted to maximize ocean views and
        natural light, creating a seamless connection between indoor and outdoor
        spaces. Every detail, from the elevated walkways to the energy-efficient
        infrastructure, reflects a commitment to blending luxury with
        sustainability.
      </p>
      <p className="pt-9 text-base leading-[1.8] w-[50ch] tracking-wide">
        The hotel's layout was carefully crafted to maximize ocean views and
        natural light, creating a seamless connection between indoor and outdoor
        spaces. Every detail, from the elevated walkways to the energy-efficient
        infrastructure, reflects a commitment to blending luxury with
        sustainability.
      </p>
    </div>
  );
}

function StickyDescription() {
  return (
    <div className="grid grid-cols-2 gap-6 pt-32">
      <div className="col-start-1 -col-end-1 grid grid-cols-8 text-[#505050] pt-32">
        <div className="col-start-2 col-end-4 flex flex-col">
          <ProjectDescriptionParagraph />
        </div>
        <div className="relative col-start-5 -col-end-1 w-full h-[1000px]">
          <Image
            src="/port1.jpg"
            className="w-full h-full object-cover"
            alt="hi"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default StickyDescription;

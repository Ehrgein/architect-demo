import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="pt-40 pb-28 px-8 relative grid grid-cols-2 w-full gap-1">
      <div className="">
        <h3 className="text-3xl text-black-dark font-medium leading-normal w-[30ch] pl-10">
          We design with intention, blending simplicity and depth.
        </h3>
      </div>
      <article className="flex flex-col w-full mx-auto space-y-10">
        <p className="text-xl leading-loose text-black-light w-[85%]">
          Since its inception, our studio has seamlessly balanced its work
          between traditional architectural projects, including private
          residences, multi-family housing, and renovations, and commercial
          developments such as industrial warehouses, retail spaces, and
          corporate offices.
        </p>
        <p className="text-xl leading-loose text-black-light w-[85%]">
          Y Studio is renowned for its hands-on approach and personalized
          attention to every project. By fostering constant collaboration and
          open communication with our clients, we ensure their visions are at
          the heart of the design process.
        </p>
        <p
          className="text-xl leading-loose text-black-light
         w-[85%]"
        >
          By integrating these experiences, we craft innovative solutions
          tailored to the specific needs of each project, creating spaces that
          are functional, aesthetically striking, and deeply aligned with our
          clients’ aspirations.
        </p>
      </article>
    </section>
  );
}

export default AboutUs;

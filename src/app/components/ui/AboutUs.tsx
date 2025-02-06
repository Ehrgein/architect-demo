import React from "react";

const paragraphs = [
  "Since its inception, our studio has seamlessly balanced its work between traditional architectural projects, including private residences, multi-family housing, and renovations, and commercial developments such as industrial warehouses, retail spaces, and corporate offices.",
  ,
  "Y Studio is renowned for its hands-on approach and personalized attention to every project. By fostering constant collaboration and open communication with our clients, we ensure their visions are at the heart of the design process.",
  ,
  "By integrating these experiences, we craft innovative solutions tailored to the specific needs of each project, creating spaces that are functional, aesthetically striking, and deeply aligned with our clients’ aspirations.",
];

function AboutUs() {
  // const Paragraphs = paragraphs.map((para) => <p>{para}</p>);
  const Paragraphs = paragraphs.map((para, index) => {
    return (
      <p
        key={index}
        className="text-lg md:text-xl leading-loose text-black-light w-full md:w-[85%]"
      >
        {para}
      </p>
    );
  });

  return (
    <section className="pt-16 pb-8 md:pt-40 md:pb-28 px-4 md:px-8 relative grid grid-cols-1 md:grid-cols-2 w-full gap-1">
      <div className="">
        <h3 className="text-3xl text-black-dark text-center md:text-left font-medium leading-normal w-full md:w-[30ch] pl-0 md:pl-10">
          We design with intention, blending simplicity and depth.
        </h3>
      </div>
      <article className="flex flex-col w-full mx-auto pt-16 md:pt-0 space-y-10">
        {Paragraphs}
      </article>
    </section>
  );
}

export default AboutUs;

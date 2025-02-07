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
        className="text-base md:text-lg lg:text-lg 2xl:text-[1.25rem] 
        leading-[1.8] 2xl:leading-[1.8]
         text-black-light w-full md:w-[95%] 2xl:w-[85%]"
      >
        {para}
      </p>
    );
  });

  return (
    <section
      id="about-us"
      className="pt-16 pb-8 md:pt-40 md:pb-28 lg:pt-28 lg:pb-20 xl:pt-28 
      px-4 md:px-8 lg:px-7 xl:px-4 
      relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 desktop:grid-cols-2 w-full gap-1"
    >
      <div className="w-full">
        <h3
          className="text-3xl md:text-[1.5rem] lg:text-2xl xl:text-3xl 2xl:text-3xl text-black-dark text-left lg:text-left font-medium 
          leading-[1.6] lg:leading-relaxed xl:leading-relaxed 2xl:leading-normal
          w-full md:w-[80%] lg:w-[25ch] 2xl:w-[30ch] 
        pl-0 lg:pl-2 xl:pl-10 desktop:pl-10"
        >
          We design with intention, blending simplicity and depth.
        </h3>
      </div>
      <article className="flex flex-col w-full mx-auto pt-16 md:pt-1 xl:pt-4 2xl:pt-2 space-y-10">
        {Paragraphs}
      </article>
    </section>
  );
}

export default AboutUs;

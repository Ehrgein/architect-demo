import React from "react";
import Image from "next/image";
import commercial from "../../../../public/shopmall.jpg";
import residential from "../../../../public/optimizeddmodernhouse.jpg";
import rendering from "../../../../public/render.jpg";

const services = [
  {
    title: "Commercial",
    content:
      "Bring your commercial spaces to life with designs that are tailored to your business goals. Whether it’s retail, office, or hospitality, our services offer comprehensive architectural solutions, from initial planning to detailed visualizations.",
    src: commercial,
    alt: "Shopping mall, comercial architecture",
  },
  {
    title: "Private Residences",
    content:
      "Bring your commercial spaces to life with designs that are tailored to your business goals. Whether it’s retail, office, or hospitality, our services offer comprehensive architectural solutions, from initial planning to detailed visualizations.",
    src: residential,
    alt: "Modern house, private residence",
  },
  {
    title: "Rendering",
    content:
      "We create lifelike renderings of your projects, bringing every detail to life with Unreal Engine 5. Our visualizations let you experience your design—whether it’s a retail space, office, or residence—before it’s built.",
    src: rendering,
    alt: "Unreal Engine 5 rendering of a house",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="pt-16 md:py-10 lg:py-2 xl:py-14 px-4 md:px-8 lg:px-6 xl:px-6 2xl:px-8"
    >
      <div className="pt-20 md:pt-10 lg:pt-20 xl:pt-12">
        <h3 className="text-5xl font-medium text-black-light">OUR SERVICES</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-8 pt-12">
          {services.map(({ title, content, src, alt }) => (
            <article
              key={title}
              className="space-y-2 md:space-y-3 lg:space-y-5 md:pt-0"
            >
              <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
                <Image
                  src={src}
                  alt={alt}
                  sizes={"(max-width: 1920px) 40vw"}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <h4 className="text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl text-black-light pt-6 md:pt-4 lg:pt-3">
                {title}
              </h4>
              <p className="pr-3 pt-1 lg:leading-[1.9] xl:leading-[2.0] text-[0.9375rem] xl:text-base 2xl:text-lg 2xl:leading-8 text-black-mediumLight">
                {content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

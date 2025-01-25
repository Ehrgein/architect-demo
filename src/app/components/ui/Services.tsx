import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section className="py-36 px-8">
      <div className="pt-20">
        <h3 className="text-5xl font-medium text-black-light">OUR SERVICES</h3>
        <div className="grid grid-cols-3 gap-6 pt-12">
          <article className="space-y-5">
            <div className="relative w-full h-[750px]">
              <Image
                src="/shopmal.jpg"
                alt="hi"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl text-black-light pt-3">Commercial</h4>
            <p className="pr-3 pt-1 leading-7 text-black-mediumLight">
              Bring your commercial spaces to life with designs that are
              tailored to your business goals. Whether it’s retail, office, or
              hospitality, our services offer comprehensive architectural
              solutions, from initial planning to detailed visualizations.
            </p>
          </article>
          <article className="space-y-5">
            <div className="relative w-full h-[750px]">
              <Image
                src="/newmodernhouse.jpg"
                alt="hi"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl text-black-light pt-3">
              Private Residences
            </h4>
            <p className="pr-3 pt-1 leading-7 text-black-mediumLight">
              Design your dream home with our specialized residential
              architecture services. We work with you to create spaces that
              reflect your style and needs, from cozy private residences to
              expansive luxury homes. We bring your vision to life.
            </p>
          </article>
          <article className="space-y-5">
            <div className="relative w-full h-[750px]">
              <Image
                src="/render.png"
                alt="hi"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl text-black-light pt-3">Rendering</h4>
            <p className="pr-3 pt-1 leading-7 text-black-mediumLight">
              We create lifelike renderings of your projects, bringing every
              detail to life with Unreal Engine 5. Our visualizations let you
              experience your design—whether it’s a retail space, office, or
              residence—before it’s built.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;

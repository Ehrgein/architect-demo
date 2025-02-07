"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import AnimatedBorder from "../transitions/AnimatedBorder";

function Contact() {
  const [isAnimated, setisAnimated] = React.useState(false);

  return (
    <section
      id="contact"
      className="px-4 pt-20 md:px-8 lg:px-6 xl:px-8 pb-10 md:pb-0 grid grid-cols-1 md:grid-cols-2
       md:pt-32 lg:pt-24 xl:pt-40 md:mb-40"
    >
      <div>
        <div className="relative h-[500px] md:h-full desktop:h-[900px] xl:full">
          <Image
            src="/contact.jpg"
            className="h-full object-cover"
            alt="contactimage"
            fill
            sizes="(max-width: 1920px) 60vw"
          />
        </div>
      </div>
      <div className="pt-6 md:pt-0 px-0 md:px-2 md:pl-6 lg:pl-6 xl:pl-12 space-y-5 md:space-y-8">
        <h3 className="text-4xl md:text-4xl lg:text-5xl text-black-light">
          CONTACT US
        </h3>
        <p className="w-full text-[15px] lg:text-base md:w-[95%] lg:w-[95%] 2xl:w-4/5 text-black-mediumLight leading-relaxed 2xl:leading-loose">
          If you have any questions or would like to learn more about our
          process, please don't hesitate to reach out.
        </p>
        <form
          className="w-full xl:w-4/5
          pt-6 md:pt-8 lg:pt-8 xl:pt-12 desktop:pt-12 
          space-y-8 md:space-y-10 lg:space-y-12"
        >
          <div className="space-y-1 md:space-y-2">
            <label className="text-black-dark" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Alexis"
              className="w-full bg-transparent font-normal text-black-light pt-6 pb-1 focus:outline-none focus:border-gray-600
              placeholder:text-[#242424] placeholder:font-normal placeholder:opacity-45 placeholder:text-[15px]"
              aria-label="Name"
            />
            <AnimatedBorder delay={0.2} />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="space-y-1 md:space-y-2">
              <label className="text-black-dark" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="info@ystudio.com"
                className="w-full bg-transparent font-normal text-black-light pt-6 pb-1  focus:outline-none focus:border-gray-600
               placeholder:text-[#242424] placeholder:font-normal placeholder:opacity-45 placeholder:text-[15px] "
                aria-label="Email"
              />
              <AnimatedBorder delay={0.2} />
            </div>
            <div className="pt-8 md:pt-0 space-y-1 md:space-y-2">
              <label className="text-black-dark" htmlFor="tel">
                Phone
              </label>
              <input
                type="tel"
                id="tel"
                placeholder="+1-234-567-89"
                className="w-full bg-transparent font-normal text-black-light  pt-6 pb-1  
                focus:outline-none focus:border-gray-600 
                placeholder:text-[#242424] placeholder:font-normal placeholder:opacity-45 placeholder:text-[15px]"
                aria-label="Phone"
              />
              <AnimatedBorder delay={0.2} />
            </div>
          </div>
          <div className="space-y-5">
            <label className="text-black-dark" htmlFor="message">
              Message
            </label>
            <textarea
              placeholder="Hi! I would love to discuss a project"
              id="message"
              className="mt-10 w-full bg-transparent text-black-light
               placeholder:text-[#242424] placeholder:font-normal placeholder:opacity-45 placeholder:text-[15px] 
               pt-6 pb-1  focus:outline-none focus:border-gray-600 min-h-[100px] resize-none"
              aria-label="Message"
            />
            <AnimatedBorder delay={0.2} />
          </div>
          <div
            onMouseEnter={() => setisAnimated(true)}
            onMouseLeave={() => setisAnimated(false)}
            className="flex items-center w-fit  border-[1px] border-black-mediumLight cursor-pointer hover:bg-gray-100 mt-5"
          >
            <button className="py-3 px-10 w-4/5 border-r-[1px] border-black-mediumLight text-sm">
              SUBMIT
            </button>
            <div className="px-4">
              <div className="relative h-9 w-9 overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ x: "-100%" }}
                  animate={isAnimated ? { x: "0%" } : { x: "-200%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Image
                    alt="hi"
                    src="/arrowright.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ x: "0%" }}
                  animate={isAnimated ? { x: "200%" } : { x: "0%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Image
                    alt="hi"
                    src="/arrowright.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

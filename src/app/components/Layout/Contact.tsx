"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import AnimatedBorder from "../transitions/AnimatedBorder";

function Contact() {
  const [isAnimated, setisAnimated] = React.useState(false);

  return (
    <section className="px-8 h-full grid grid-cols-2 pt-40 mb-40">
      <div className="relative h-[900px]">
        <Image
          src="/contactimg.jpg"
          className="h-full object-cover"
          alt="contactimage"
          fill
          sizes="(max-width: 1920px) 900px"
        />
      </div>
      <div className="pl-14 space-y-8">
        <h3 className="text-5xl text-black-light">CONTACT US</h3>
        <p className=" w-[65ch] text-black-mediumLight leading-relaxed">
          If you have any questions or would like to learn more about our
          process, please don't hesitate to reach out.
        </p>
        <form className="w-4/5 pt-12 space-y-12">
          <div className="space-y-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
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
            <div className="space-y-2">
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

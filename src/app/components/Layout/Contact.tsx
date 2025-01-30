import Image from "next/image";
import React from "react";

function Contact() {
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
          <div className="space-y-5">
            <label className="text-black-dark" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Alexis"
              className="w-full bg-transparent font-normal text-black-light border-b border-black-medium py-2 focus:outline-none focus:border-gray-600
              placeholder:text-[#242424] placeholder:font-normal placeholder:opacity-45 placeholder:text-[15px] "
              aria-label="Name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-5">
              <label className="text-black-dark" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="info@ystudio.com"
                className="w-full bg-transparent font-normal text-black-light border-b border-black-medium py-2 focus:outline-none focus:border-gray-600
               placeholder:text-[#242424] placeholder:font-normal placeholder:opacity-45 placeholder:text-[15px] "
                aria-label="Email"
              />
            </div>
            <div className="space-y-5">
              <label className="text-black-dark" htmlFor="tel">
                Phone
              </label>
              <input
                type="tel"
                id="tel"
                placeholder="+1-234-567-89"
                className="w-full bg-transparent font-normal text-black-light border-b border-black-medium py-2 
                focus:outline-none focus:border-gray-600 
                placeholder:text-[#242424] placeholder:font-normal placeholder:opacity-45 placeholder:text-[15px]"
                aria-label="Phone"
              />
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
               border-b border-black-medium py-2 focus:outline-none focus:border-gray-600 min-h-[100px] resize-none"
              aria-label="Message"
            />
          </div>
          <div className="flex items-center w-fit  border-[1px] border-black-mediumLight cursor-pointer hover:bg-gray-100 mt-5">
            <button className="py-3 px-10 w-4/5 border-r-[1px] border-black-mediumLight text-sm">
              SUBMIT
            </button>
            <div className="px-4">
              <svg
                width="33"
                height="8"
                viewBox="0 0 33 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64644L29.1716 0.464464C28.9763 0.269201 28.6597 0.269201 28.4645 0.464464C28.2692 0.659726 28.2692 0.976308 28.4645 1.17157L31.2929 4L28.4645 6.82842C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.73079 28.9763 7.73079 29.1716 7.53553L32.3536 4.35355ZM4.37114e-08 4.5L32 4.5L32 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

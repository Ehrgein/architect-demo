"use client";
import React from "react";
import AnimatedArrowButton from "../transitions/AnimatedArrowButton";

function ContactUsBtn() {
  const [isAnimated, setisAnimated] = React.useState(false);

  return (
    <div className="hidden lg:block w-[90%] h-14 pt-20 md:pt-14 xl:pt-20 text-sm col-span-3 md:pl-28 lg:pl-12 xl:pl-28">
      <p className="text-[#242424] text-2xl xl:text-xl lg:text-base desktop:text-2xl">
        Want to discuss a project?
      </p>
      <div
        onMouseEnter={() => setisAnimated(true)}
        onMouseLeave={() => setisAnimated(false)}
        className="flex items-center w-full border border-[#363636] cursor-pointer hover:bg-gray-100 mt-5"
      >
        <button
          className="py-4 ml-6 md:ml-6 lg:ml-0 lg:text-center desktop:text-start xl:ml-6 w-4/5 border-r border-[#363636] text-start
        text-base md:text-sm lg:text-[13px] xl:text-base"
        >
          CONTACT US
        </button>
        <div className="px-6 md:px-6 lg:px-3 xl:px-6">
          <AnimatedArrowButton
            isAnimated={isAnimated}
            setisAnimated={setisAnimated}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsBtn;

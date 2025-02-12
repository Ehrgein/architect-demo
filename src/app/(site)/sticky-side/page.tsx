import Image from "next/image";
import React from "react";

function StickySide() {
  return (
    <>
      <div className="flex h-[200vh]">
        <div className="w-1/3 bg-green-300 order-1">
          <div className="sticky top-0">
            <div className="w-full h-screen flex justify-end items-end">
              <p className="text-black">hello</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-[200vh]">
          <div className="w-full h-screen relative">
            <Image
              className="w-full h-full object-cover"
              src="/villa1.jpg"
              fill
              alt="villa"
            />
          </div>
          <div className="w-full h-screen relative">
            <Image
              className="w-full h-full object-cover"
              src="/villa1.jpg"
              fill
              alt="villa"
            />
          </div>
        </div>
      </div>
      <div className="h-screen">
        <p className="text-black">hello</p>
      </div>
    </>
  );
}

export default StickySide;

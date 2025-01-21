import React from "react";
import Navbar from "./Navbar";
import HeroText from "./HeroText";
import NavProject from "./NavProject";

function VideoHero() {
  return (
    <div className="h-screen w-full relative flex flex-col justify-end text-primary">
      <div className="h-screen absolute top-0 w-full">
        {/* <Image
      src="/villa.jpg"
      alt="hi"
      fill
      className="w-full h-full brightness-[.25] "
    /> */}
        <video
          className="w-full h-full object-cover brightness-[.35]"
          loop
          muted
          autoPlay
          preload="none"
        >
          <source src="/placebo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navbar />
      <div className="mx-20 bg-accent h-[1px] mt-4 relative"></div>
      <HeroText />
    </div>
  );
}

export default VideoHero;

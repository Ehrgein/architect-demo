import React from "react";
import FixedNavBar from "../components/ui/FixedNavBar";

function StickyTwo() {
  return (
    <>
      <FixedNavBar />
      <section className="relative">
        <div className="w-full h-full">
          {/* <div className="flex flex-col w-full relative">
            {projectsTwo.map((project) => {
              return (
                <div key={project.title} className="sticky top-0">
                  <div className="w-full h-[110svh] overflow-clip top-0">
                    <Image
                      src={project.src}
                      className="w-full h-full object-cover absolute bottom-0 brightness-[.3]"
                      alt=""
                    />
                    <div className="relative w-full flex justify-center items-center h-full bottom-0 pt-60 text-[#ECDCC6] ">
                      <div className="items-start flex flex-col justify-end w-full max-w-[90%]">
                        <h3 className="text-8xl uppercase leading-[1.1]">
                          {project.title}
                        </h3>
                        <h3 className="text-8xl uppercase leading-[1.1] pb-20">
                          {project.subtitle}
                        </h3>
                        <div className="uppercase text-[18px] pl-2 pb-20 w-full flex justify-between flex-grow">
                          <p>Adrogue - buenos aires</p>
                          <p className="uppercase text-[18px] tracking-wide">
                            Residencia privada
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default StickyTwo;

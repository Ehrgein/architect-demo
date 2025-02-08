import React from "react";

function ProjectHeaderInfo({
  title,
  type,
  subtype,
  location,
}: {
  title: string;
  type: string;
  subtype: string;
  location: string;
}) {
  return (
    <div className="pt-40 pb-6 md:pb-6 lg:pb-8 desktop:pb-12 lg:pt-40 xl:pt-48 desktop:pt-40">
      <h1 className="text-[6rem] leading-tight md:text-[6.8rem] pb-4 md:pb-4 lg:pb-5 xl:pb-8 desktop:pb-8 text-[#242424] font-medium">
        {title}
      </h1>
      <div className="text-[13px] md:text-[15px] uppercase flex justify-between text-[#363636]">
        <p>
          {type} - {subtype}
        </p>
        <p className="uppercase text-[#363636]">{location}</p>
      </div>
    </div>
  );
}
export default ProjectHeaderInfo;

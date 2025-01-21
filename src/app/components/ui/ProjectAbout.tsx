import React from "react";

function DetailsList() {
  return (
    <div className="col-start-10 -col-end-1">
      <ul>
        <li>
          <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
            <span className="font-medium text-base">Location</span>
            <span className="text-base ml-auto"> Ankara, Turkey</span>
          </div>
        </li>
        <li>
          <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
            <span className="font-medium text-base">Type</span>
            <span className="text-base ml-auto"> Commercial </span>
          </div>
        </li>
        <li>
          <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
            <span className="font-medium text-base">Year</span>
            <span className="text-base ml-auto"> 2024</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

function ProjectAbout() {
  return (
    <div className="pt-24 w-full pb-60  px-24 ">
      <div className="w-full mx-auto grid grid-cols-12">
        <h2 className="text-xl text-[#242424]">About</h2>
        <div className="col-start-3 col-end-8 text-3xl w-[90%] leading-normal text-[#242424]">
          <p>
            Located in the vibrant heart of Turkey’s capital, Aqua Suites brings
            a coastal escape to the city with its luxurious amenities.
          </p>
          <p className="text-base pt-8 tracking-wide leading-[1.8] text-[#242424]">
            Guests can unwind in stylish accommodations, savor exquisite Turkish
            and international cuisine, and rejuvenate at the state-of-the-art
            spa. Ideal for both leisure and business travelers, Oasis Retreat
            seamlessly blends the tranquility of a seaside resort with the
            convenience of a metropolitan setting.
          </p>
        </div>
        <DetailsList />
      </div>
    </div>
  );
}

export default ProjectAbout;

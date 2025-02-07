import React from "react";

// function DetailsList() {
//   return (
//     <div className="col-start-10 -col-end-1">
//       <ul>
//         <li>
//           <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
//             <span className="font-medium text-base">Location</span>
//             <span className="text-base ml-auto"> Ankara, Turkey</span>
//           </div>
//         </li>
//         <li>
//           <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
//             <span className="font-medium text-base">Type</span>
//             <span className="text-base ml-auto"> Commercial </span>
//           </div>
//         </li>
//         <li>
//           <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
//             <span className="font-medium text-base">Year</span>
//             <span className="text-base ml-auto"> 2024</span>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

function ProjectAbout({
  about_header,
  about_paragraph,
  year,
  location,
  type,
}: {
  about_header: string;
  about_paragraph: string;
  year: number;
  location: string;
  type: string;
}) {
  return (
    <section className="pt-16 md:pt-16 lg:pt-36">
      <div className="w-full px-0 md:px-2 lg:px-2 xl:px-12">
        <div className="w-full mx-0 md:mx-0 lg:mx-auto grid grid-cols-1 lg:grid-cols-12">
          <h2 className="hidden lg:block text-xl text-[#242424]">About</h2>
          <div
            className="col-span-1 md:col-start-1 lg:col-start-3 lg:col-end-8 
            text-3xl md:text-3xl lg:text-2xl 
            w-full md:w-full xl:w-full
           desktop:w-[90%] 
          >
           text-[#242424]"
          >
            <p className=" leading-normal lg:leading-relaxed xl:leading-[1.65] desktop:leading-normal ">
              {about_header}
            </p>
            <p
              className="text-base md:text-[1rem] lg:text-[0.935rem] xl:text-base pt-8 tracking-wide 
           leading-[1.8] lg:leading-[1.9] xl:leading-[2.0] 
            
            text-[#242424]"
            >
              {about_paragraph}
            </p>
          </div>
          <div
            className="pt-16 md:pt-12 lg:pt-1
          col-span-1 lg:col-start-9 xl:col-start-10
          md:-col-end-1"
          >
            <ul>
              <li>
                <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
                  <span className="font-medium text-base">Location</span>
                  <span className="text-base ml-auto"> {location}</span>
                </div>
              </li>
              <li>
                <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
                  <span className="font-medium text-base">Type</span>
                  <span className="text-base ml-auto"> {type}</span>
                </div>
              </li>
              <li>
                <div className="border-t-[1px] border-[#646464] text-[#242424] py-4 flex ">
                  <span className="font-medium text-base">Year</span>
                  <span className="text-base ml-auto"> {year}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectAbout;

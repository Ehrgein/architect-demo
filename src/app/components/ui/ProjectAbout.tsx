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
    <section className="pt-36">
      <div className="w-full px-12">
        <div className="w-full mx-auto grid grid-cols-12">
          <h2 className="text-xl text-[#242424]">About</h2>
          <div className="col-start-3 col-end-8 text-3xl w-[90%] leading-normal text-[#242424]">
            <p>{about_header}</p>
            <p className="text-base pt-8 tracking-wide leading-[1.8] text-[#242424]">
              {about_paragraph}
            </p>
          </div>
          <div className="col-start-10 -col-end-1">
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

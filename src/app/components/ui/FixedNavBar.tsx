import React from "react";
import Image from "next/image";

function FixedNavBar() {
  return (
    <div className="z-10 items-start w-full fixed top-0">
      <nav className="text-6xl text-white flex justify-between pt-8 px-20 w-full">
        <Image
          width={120}
          height={64}
          alt="hi"
          className="max-h-[50px] pl-4"
          src="/logo_dark.svg"
        />
        {/* <svg
               width="42"
               height="42"
               viewBox="0 0 42 1"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M0 1.5H42" stroke="white" stroke-width="2" />
               <line y1="11" x2="42" y2="11" stroke="white" stroke-width="2" />
             </svg> */}
        <ul className="text-base flex items-center gap-12 pt-4 text-accent capitalize pr-4">
          <li>portfolio</li>
          <li>Arquitectura Familiar</li>
          <li>Arquitectura Comercial</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="mx-20 bg-accent h-[1px] mt-4 relative"></div>
    </div>
  );
}

export default FixedNavBar;

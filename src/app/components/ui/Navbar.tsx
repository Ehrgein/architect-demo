import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="z-10 items-start w-full">
      <nav className="text-6xl text-white flex justify-between pt-6 px-20 w-full">
        {/* <Image
          width={120}
          height={90}
          alt="hi"
          className="max-h-[50px] pl-4 object-cover"
          src="/logoprim.png"
        /> */}
        <p className="text-xl font-medium pt-4">PRIM Estudio</p>
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
          <li>Portfolio</li>
          <li>Arquitectura Familiar</li>
          <li>Arquitectura Comercial</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

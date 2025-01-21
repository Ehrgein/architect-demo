import React from "react";

function NavProject() {
  return (
    <nav className="border-b-[#0E0D0D] border-b-[1px]">
      <ul className="flex justify-between pt-7 items-center px-8 pb-8">
        <li className="text-2xl">PRIM STUDIO</li>
        <li className="">
          <svg
            aria-label="Opens hamburger menu"
            role="button"
            width="64"
            height="48"
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="22" width="60" height="1" fill="currentColor" />

            <rect x="8" y="34" width="60" height="1" fill="currentColor" />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default NavProject;

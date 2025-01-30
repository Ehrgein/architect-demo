import React from "react";
import Link from "next/link";

function NavProject() {
  return (
    <nav className="border-b-[#0E0D0D] border-b-[1px] bg-[#E5DCD8] w-full fixed top-0 z-50">
      <ul className="flex justify-between py-4 items-center px-6">
        <li className="text-xl">
          <Link href="/">Y STUDIO</Link>
        </li>
        <div className="flex gap-24 pr-12 text-[13px] uppercase">
          <li>
            {/* <svg
            aria-label="Opens hamburger menu"
            role="button"
            width="64"
            height="42"
            viewBox="0 0 64 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="22" width="60" height="1" fill="currentColor" />

            <rect x="8" y="34" width="60" height="1" fill="currentColor" />
          </svg> */}{" "}
            About
          </li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </div>
      </ul>
    </nav>
  );
}

export default NavProject;

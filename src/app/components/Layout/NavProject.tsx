import React from "react";
import Link from "next/link";

function NavProject() {
  return (
    <nav className="border-b-[#0E0D0D] border-b-[1px] bg-[#E5DCD8] w-full fixed top-0 z-50 h-16">
      <ul className="flex justify-between py-4 items-center px-6">
        <li className="text-xl">
          <Link href="/">Y STUDIO</Link>
        </li>
        <div className="flex gap-24 pr-12 text-[13px] uppercase">
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
          <li className="relative group overflow-hidden">
            <Link href={"#Projects"} className="block">
              <p className="group-hover:-translate-y-full transition-transform duration-[350ms] ease-in-out">
                ABOUT
              </p>
              <p className="absolute left-0 w-full transition-transform duration-[350ms] ease-in-out group-hover:-translate-y-full">
                ABOUT
              </p>
            </Link>
          </li>
          <li className="relative group overflow-hidden">
            <Link href={"#Projects"} className="block">
              <p className="group-hover:-translate-y-full transition-transform duration-[350ms] ease-in-out">
                Projects
              </p>
              <p className="absolute left-0 w-full transition-transform duration-[350ms] ease-in-out group-hover:-translate-y-full">
                Projects
              </p>
            </Link>
          </li>
          <li className="relative group overflow-hidden">
            <Link href={"#Projects"} className="block">
              <p className="group-hover:-translate-y-full transition-transform duration-[350ms] ease-in-out">
                Services
              </p>
              <p className="absolute left-0 w-full transition-transform duration-[350ms] ease-in-out group-hover:-translate-y-full">
                Services
              </p>
            </Link>
          </li>
          <li className="relative group overflow-hidden">
            <Link href={"#Projects"} className="block">
              <p className="group-hover:-translate-y-full transition-transform duration-[350ms] ease-in-out">
                Contact
              </p>
              <p className="absolute left-0 w-full transition-transform duration-[350ms] ease-in-out group-hover:-translate-y-full">
                Contact
              </p>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavProject;

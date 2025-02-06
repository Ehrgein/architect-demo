import React from "react";
import Link from "next/link";

function NavProject() {
  return (
    <nav className="border-b-[#0E0D0D] border-b-[1px] bg-[#E5DCD8] w-full fixed top-0 z-50 h-16">
      <div className="flex gap-24 text-[13px] uppercase h-full">
        <div className="w-full flex justify-between items-center px-4 md:px-0 md:hidden">
          <button className="text-xl">
            <Link href="/">Y STUDIO</Link>
          </button>
          <svg
            aria-label="Opens hamburger menu"
            role="button"
            width="64"
            height="42"
            viewBox="0 0 64 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="14" width="60" height="1" fill="currentColor" />

            <rect x="8" y="26" width="60" height="1" fill="currentColor" />
          </svg>
        </div>
        <div className="hidden md:flex pr-12">
          <ul className="flex justify-between py-4 items-center px-6">
            <li className="text-xl">
              <Link href="/">Y STUDIO</Link>
            </li>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavProject;

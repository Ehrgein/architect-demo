"use client";
import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { menuOpen } from "@/app/helpers/beziers";
import { scrollToSection } from "@/app/helpers/scrollToSection";
import { usePathname } from "next/navigation";

const links = [
  {
    link: "about",
    href: "/#about-us",
  },
  {
    link: "services",
    href: "/#services",
  },
  {
    link: "projects",
    href: "/#projects",
  },
  {
    link: "contact",
    href: "/#contact",
  },
];

// border-b-[#0E0D0D]
function NavProject() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;

      // Correct logic: if menu is opening, disable scrolling
      // document.body.style.overflow = newState ? "hidden" : "unset";

      return newState;
    });
  };

  const handleLinkToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isMobile?: boolean
  ) => {
    if (isMobile) {
      setIsMenuOpen(false);
    }

    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.split("#")[1];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className="w-full border-b-black-medium border-b-[1px] bg-[#E5DCD8] fixed top-0 z-50 h-16">
        <div className="flex text-[13px] justify-between py-4 px-4 md:pt-4 items-center md:px-2 uppercase h-full">
          <h2 className="w-full md:pl-8">
            <Link href="/" className="text-xl">
              Y STUDIO
            </Link>
          </h2>
          <ul className="hidden md:flex gap-12 pr-8">
            {links.map(({ link, href }, index) => {
              return (
                <li key={index} className="relative group overflow-hidden">
                  <Link
                    href={`${href}`}
                    className="block"
                    onClick={(e) => handleLinkToSection(e, href, false)}
                  >
                    <p className="group-hover:-translate-y-full transition-transform duration-[350ms] ease-in-out">
                      {link}
                    </p>
                    <p className="absolute left-0 w-full transition-transform duration-[350ms] ease-in-out group-hover:-translate-y-full">
                      {link}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div onClick={handleMenu} className="md:hidden">
            <svg
              aria-label="Opens hamburger menu"
              role="button"
              width="64"
              height="42"
              viewBox="0 0 64 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8" y="12" width="60" height="1" fill="currentColor" />
              <rect x="8" y="26" width="60" height="1" fill="currentColor" />
            </svg>
          </div>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          animate={isMenuOpen ? { x: "0%" } : { x: "100%" }}
          transition={{
            duration: 0.6,
            ease: menuOpen,
          }}
          className="fixed inset-0 top-[64px] bg-[#E5DCD8] z-[45] overflow-hidden"
        >
          <div className="w-full h-full relative pt-32">
            <motion.h3
              initial={{ opacity: 0, y: "25%" }}
              animate={isMenuOpen ? { opacity: 1, y: "0%" } : ""}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-light pb-10 px-3 text-lg"
            >
              Navigation
            </motion.h3>
            <motion.ul
              initial={{ y: "10%" }}
              animate={
                isMenuOpen ? { opacity: 1, y: "0%" } : { opacity: 0, y: "10%" }
              }
              transition={{
                duration: 0.5,
                ease: menuOpen,
                delay: 0.2,
              }}
              className="flex flex-col border-b-[1px] border-black-pure"
            >
              {links.map(({ href, link }, index) => (
                <li
                  key={href}
                  className={`text-base text-white font-light capitalize`}
                >
                  <Link
                    onClick={(e) => handleLinkToSection(e, href, true)}
                    href={href}
                    className="block overflow-hidden"
                  >
                    <motion.span
                      className={`block text-[#121212] py-4 border-t-[1px] border-black-pure px-4`}
                    >
                      {link}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </nav>
    </>
  );
}

export default NavProject;

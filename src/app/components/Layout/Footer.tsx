import React from "react";
import ContactUsBtn from "../Buttons/ContactUsBtn";

function FooterColumn({
  title,
  items,
  column_length,
}: {
  title: string;
  items: string[];
  column_length: string;
}) {
  return (
    <div className={`pt-20 text-sm ${column_length}`}>
      <span className="text-[#363636] opacity-80 uppercase">{title}</span>
      <ul className="flex flex-col gap-5 pt-6">
        {items.map((item) => {
          return (
            <li key={item} className="uppercase text-[#242424]">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full pt-36 flex flex-col px-12">
      <div className="w-full px-7 h-[1px] bg-[#363636]"></div>
      <div className="w-full grid grid-cols-10">
        <FooterColumn
          title="CONTACT"
          items={["info@ystudio.com", "+123-456-789"]}
          column_length={"col-span-2"}
        />
        <FooterColumn
          column_length={"col-span-2"}
          title="Sitemap"
          items={["home", "about", "projects", "contact"]}
        />
        <FooterColumn
          title="Socials"
          column_length={"col-span-2"}
          items={["Instagram", "Linkedin", "Behance", "Youtube"]}
        />
        <FooterColumn
          title="legal"
          items={["Privacy", "Terms of Service"]}
          column_length={"col-span-1"}
        />
        <ContactUsBtn />
      </div>
      <div className="pt-20 flex items-center justify-between">
        <h5 className="text-[13rem] text-[#262626] font-bold -ml-2 leading-none">
          Y STUDIO
        </h5>
        <div
          className="h-20 w-20 bg-white rounded-full
       flex items-center justify-center relative mt-12"
        >
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928933 6.65685C0.538409 7.04738 0.538408 7.68054 0.928933 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 21L9 1L7 1L7 21L9 21Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;

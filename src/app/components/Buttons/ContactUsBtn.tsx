import React from "react";

function ContactUsBtn() {
  return (
    <div className="w-[90%] h-14 pt-20 text-sm col-span-3 pl-28">
      <p className="text-[#242424] text-2xl">Want to discuss a project?</p>
      <div className="flex items-center w-full border border-black cursor-pointer hover:bg-gray-100 mt-5">
        <button className="py-4 ml-6 w-4/5 border-r border-black text-start">
          CONTACT US
        </button>
        <div className="px-6">
          <svg
            width="33"
            height="8"
            viewBox="0 0 33 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64644L29.1716 0.464464C28.9763 0.269201 28.6597 0.269201 28.4645 0.464464C28.2692 0.659726 28.2692 0.976308 28.4645 1.17157L31.2929 4L28.4645 6.82842C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.73079 28.9763 7.73079 29.1716 7.53553L32.3536 4.35355ZM4.37114e-08 4.5L32 4.5L32 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ContactUsBtn;

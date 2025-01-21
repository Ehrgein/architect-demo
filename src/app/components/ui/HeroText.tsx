import React from "react";

function HeroText() {
  return (
    <div className="z-10 relative h-full mt-auto flex items-end pb-16 px-20">
      <div className="flex flex-col">
        <h1 className="text-hero font-medium ">ESPACIOS ÚNICOS</h1>
        <p className="text-primary w-[55ch] pb-6">
          Estudio de arquitectura orientado a la resolución y ejecución de
          proyectos tanto para clientes particulares como corporativos.
        </p>
        <div className="w-64 border-primary border-2 h-14 flex items-center justify-between">
          <button className="text-lg ml-8 p-3 pr-[2rem] h-full items-center justify-center tracking-wide border-r-2 border-primary">
            EXPLORAR
          </button>
          <span className="pr-8">
            <svg
              width="29"
              height="16"
              viewBox="0 0 29 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroText;

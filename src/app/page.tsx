"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full relative flex flex-col justify-end text-primary">
        <div className="h-screen absolute top-0 w-full">
          {/* <Image
          src="/villa.jpg"
          alt="hi"
          fill
          className="w-full h-full brightness-[.25] "
        /> */}
          <video
            className="w-full h-full object-cover brightness-[.35]"
            loop
            muted
            autoPlay
            preload="none"
          >
            <source src="/placebo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="z-10 items-start w-full relative">
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
        </div>
        <div className="mx-20 bg-accent h-[1px] mt-4 relative"></div>
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
      </div>
      <section className="pt-40 pb-28 px-8 relative flex">
        <div className="w-[1000px] h-[600px]">
          <Image
            src="/aboutimage.jpg"
            className="w-full h-full object-cover"
            width={870}
            height={500}
            alt="hi"
          />
        </div>
        <div className="pl-16 max-w-[750px] flex flex-col pt-12 ">
          <h2 className="text-3xl font-medium opacity-90 text-[#353535]">
            Nosotros
          </h2>
          <p className="text-lg pt-12 leading-relaxed text-[#353535]">
            Desde sus comienzos nuestro estudio dividió sus actividades entre
            obras de arquitectura tradicional, viviendas unifamiliares,
            condominios, reformas, etc. y obras comerciales como diseño de naves
            industriales, locales comerciales y oficinas corporativas.
          </p>
          <p className="text-lg pt-10 leading-relaxed text-[#353535]">
            BFS Arquitectos es conocido por el seguimiento personalizado de
            todas las obras y el intercambio constante de ideas con el cliente
          </p>
          <p className="text-lg pt-10 leading-relaxed text-[#353535]">
            Esa versatilidad es uno de los aspectos fundamentales a la hora de
            crear, ya que da herramientas de ambos campos al momento de
            encontrar soluciones creativas para el desarrollo de los proyectos.
          </p>
        </div>
      </section>
      <section className="pt-40 pb-60 relative flex flex-col">
        <div className="w-full h-[800px] relative">
          <Image
            src="/modernhouse.jpg"
            className="w-full h-full object-cover "
            fill
            alt="hi"
          />
        </div>
        <div className="pl-24">
          <div className="pt-40 pb-32 flex items-center ">
            <h2 className="text-[40px] font-medium  text-[#353535]">
              NUESTROS SERVICIOS
            </h2>
            <div className="w-[150px] bg-[#626262] h-[1px] ml-8 opacity-60 mt-2"></div>
          </div>
          <div>
            <ul className="pl-4 flex gap-32">
              <li>
                <h3 className="text-3xl text-[#353535] opacity-90 -ml-4">
                  Arquitectura Familiar
                </h3>
                <p className="max-w-[50ch] mt-10 text-lg  pl-4  border-l-[1px] border-black leading-loose ">
                  Acompañamos a nuestros clientes particulares o inversionistas
                  durante el proceso de diseño de la obra tomando en cuenta sus
                  experiencias y necesidades para adecuarlas a la construcción
                  de una obra moderna y acorde a sus necesidades.
                </p>
              </li>
              <li>
                <h3 className="text-3xl text-[#353535] opacity-90 -ml-4">
                  Arquitectura Comercial
                </h3>
                <p className="max-w-[50ch] text-lg mt-10 pl-4  border-l-[1px] border-black leading-loose ">
                  Nuestro estudio brinda asesoría en todos los temas referidos a
                  la construcción, diseño, evaluación de propuestas, elaboración
                  de pliegos de licitación, dirección y seguimiento de obra,
                  confección de certificaciones, etc.
                </p>
              </li>
              <li>
                <h3 className="text-3xl text-[#353535] opacity-90 -ml-4">
                  Rendering
                </h3>
                <p className="max-w-[50ch] mt-10 text-lg  pl-4  border-l-[1px] border-black leading-loose ">
                  Acompañamos a nuestros clientes particulares o inversionistas
                  durante el proceso de diseño de la obra tomando en cuenta sus
                  experiencias y necesidades para adecuarlas a la construcción
                  de una obra moderna y acorde a sus necesidades.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" pt-40 pb-40">
        <div className="w-full h-[900px] relative">
          <Image
            src="/proyects.jpg"
            className="w-full h-full object-cover"
            fill
            alt="hi"
          />
        </div>
      </section>
      <section className="flex items-center px-24 justify-between">
        <div className="pt-32 pb-32 flex items-center ">
          <h2 className="text-[40px] font-medium  text-[#353535]">PROYECTOS</h2>
          <div className="w-[150px] bg-[#626262] h-[1px] ml-8 opacity-60 mt-2"></div>
        </div>

        <p className="w-[800px] text-lg text-[#353535] leading-loose pt-10">
          Acompañamos a nuestros clientes particulares o inversionistas durante
          el proceso de diseño de la obra tomando en cuenta sus experiencias y
          necesidades para adecuarlas a la construcción de una obra moderna y
          acorde a sus necesidades.
        </p>
      </section>{" "}
      <div className="w-full grid grid-cols-2 px-24 pb-40 gap-20">
        <div>
          <div className="w-full h-[650px] relative">
            <Image
              src="/villa1.jpg"
              className="w-full h-full object-cover"
              fill
              alt="hi"
            />
          </div>
          <p className="text-xl text-[#353535] tracking-wide pt-4">
            OCEAN PARADISE
          </p>
          <p className="text-[#353535] opacity-60 capitalize text-base pt-1">
            country club
          </p>
        </div>
        <div>
          <div className="w-full h-[650px] relative">
            <Image
              src="/villa2.jpg"
              className="w-full h-full object-cover"
              fill
              alt="hi"
            />
          </div>
          <p className="text-xl text-[#353535] tracking-wide pt-4">ALAJUELA</p>
          <p className="text-[#353535] opacity-60 capitalize text-base pt-1">
            Residencia Privada
          </p>
        </div>
        <div>
          <div className="w-full h-[650px] relative">
            <Image
              src="/villa3.jpg"
              className="w-full h-full object-cover"
              fill
              alt="hi"
            />
          </div>
          <p className="text-xl text-[#353535] tracking-wide pt-4">SYSYPHUS</p>
          <p className="text-[#353535] opacity-60 capitalize text-base pt-1">
            Hotel Resort
          </p>
        </div>
        <div>
          <div className="w-full h-[650px] relative">
            <Image
              src="/villa4.jpg"
              className="w-full h-full object-cover"
              fill
              alt="hi"
            />
          </div>
          <p className="text-xl text-[#353535] tracking-wide pt-4">
            AQUA SUITES
          </p>
          <p className="text-[#353535] opacity-60 capitalize text-base pt-2">
            Luxury Hotel
          </p>
        </div>
      </div>
    </>
  );
}

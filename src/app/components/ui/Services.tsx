import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section className="pt-40 pb-60 relative flex flex-col">
      <div className="w-full h-[800px] relative">
        <Image
          src="/modernhouse.jpg"
          className="w-full h-full object-cover "
          fill
          alt="hi"
        />
      </div>
      <div className="pl-24 pt-20">
        <div className="pt-40 pb-32 flex items-center ">
          <h2 className="text-[50px] font-medium  text-[#353535]">
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
                Diseñamos hogares que reflejan las historias y necesidades de
                las familias que los habitan. Nuestro enfoque en la arquitectura
                residencial combina funcionalidad y estética, creando espacios
                que priorizan la comodidad, la privacidad y la conexión con el
                entorno.
              </p>
            </li>
            <li>
              <h3 className="text-3xl text-[#353535] opacity-90 -ml-4">
                Arquitectura Comercial
              </h3>
              <p className="max-w-[50ch] text-lg mt-10 pl-4  border-l-[1px] border-black leading-loose ">
                Creamos espacios comerciales que son tanto funcionales como
                visualmente impactantes. Entendemos la importancia de un diseño
                que inspire productividad, fomente la interacción y refuerce la
                identidad de tu marca.
              </p>
            </li>
            <li>
              <h3 className="text-3xl text-[#353535] opacity-90 -ml-4">
                Rendering
              </h3>
              <p className="max-w-[50ch] mt-10 text-lg  pl-4  border-l-[1px] border-black leading-loose ">
                Damos vida a tus ideas con visualizaciones de alta calidad que
                capturan cada detalle de tu proyecto. Nuestros servicios de
                renderizado ofrecen representaciones realistas que facilitan la
                toma de decisiones y comunican de manera efectiva el impacto
                visual de cada diseño.
              </p>
              I
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;

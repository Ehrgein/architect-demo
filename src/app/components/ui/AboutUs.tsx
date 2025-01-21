import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <>
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
            En Prim Estudio, creemos que la simplicidad es la forma definitiva
            de sofisticación. Especializados en arquitectura minimalista,
            diseñamos espacios que equilibran forma, función y belleza.
          </p>
          <p className="text-lg pt-10 leading-relaxed text-[#353535]">
            Nuestras creaciones destacan por líneas limpias, materiales
            naturales y un uso cuidadoso del espacio, generando ambientes que
            inspiran calma y claridad.
          </p>
          <p className="text-lg pt-10 leading-relaxed text-[#353535]">
            Nuestro enfoque combina creatividad y precisión, asegurando que cada
            detalle contribuya a la armonía del diseño. Trabajamos estrechamente
            con nuestros clientes para capturar su esencia y traducirla en
            espacios que no solo sean estéticamente agradables, sino también
            profundamente significativos.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;

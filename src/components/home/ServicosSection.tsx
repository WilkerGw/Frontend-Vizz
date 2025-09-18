import React from "react";
import Image from "next/image";

// Altere a declaração da função para incluir 'export default'
export default function ServicosSection() {
  return (
    <section className="flex flex-col justify-center items-center h-auto overflow-hidden py-12 px-4 max-w-6xl mx-auto gap-16">
      {/* --- Bloco 1: Consultoria --- */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
        <div className="relative flex-shrink-0">
          <Image
            src="/images/opto-equi.png"
            width={350}
            height={350}
            alt="equipamento de optometria"
            className="relative z-10"
          />
          <Image
            src="/images/elemento-amarelo.png"
            width={350}
            height={350}
            alt="elemento amarelo"
            className="absolute top-0"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="uppercase text-2xl md:text-3xl text-gray-700 font-extralight">
            Consultoria com Especialistas
          </h1>
          <p className="max-w-md mt-2 text-gray-500 font-extralight">
            Nossa equipe de Optometristas está pronta para te ajudar a escolher
            o melhor óculos para seu estilo e conforto.
          </p>
        </div>
      </div>

      {/* --- Bloco 2: Exame de Vista --- */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 w-full">
        <div className="relative flex-shrink-0">
          <Image
            src="/images/opto-equi2.png"
            width={350}
            height={350}
            alt="equipamento de optometria"
            className="relative z-10"
          />
          <Image
            src="/images/elemento-amarelo.png"
            width={350}
            height={350}
            alt="elemento amarelo"
            className="absolute top-0"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="uppercase text-2xl md:text-3xl text-gray-700 font-extralight">
            Exame de Vista Gratuito
          </h1>
          <p className="max-w-md mt-2 text-gray-500 font-extralight">
            Cuidamos da sua saúde ocular com precisão, usando o que há de mais
            moderno em aparelhos optométricos.
          </p>
        </div>
      </div>
    </section>
  );
};
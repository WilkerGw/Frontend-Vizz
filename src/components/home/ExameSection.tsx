"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Wrench, UserCheck } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Marquee } from "../ui/Marquee";

type Service = {
  icon?: React.ReactNode;
  title: string;
  highlight: string;
  description?: string;
  images?: string[];
};

const servicesData: Service[] = [
  {
    icon: <Eye size={48} />,
    title: "Exame de Vista",
    highlight: "Gratuito",
    description:
      "Cuidamos da sua saúde ocular com precisão, usando o que há de mais moderno em aparelhos optométricos.",
  },
  {
    icon: <Wrench size={48} />,
    title: "Óculos de Grau",
    highlight: "Personalizados",
    description:
      "Criamos óculos sob medida para você! Escolha a armação perfeita e conte com lentes adaptadas às suas necessidades.",
  },
  {
    icon: <UserCheck size={48} />,
    title: "Consultoria com",
    highlight: "Especialistas",
    description:
      "Nossa equipe de Optometristas está pronta para te ajudar a escolher o melhor óculos para seu estilo e conforto.",
  },
  {
    title: "Trabalhamos com as",
    highlight: "Melhores Marcas",
    images: [
      "/images/parceiros/hb.png",
      "/images/parceiros/hoya.png",
      "/images/parceiros/varilux-logo-0.png",
      "/images/parceiros/zeiss.png",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section
      id="servicos"
      className="relative flex flex-col justify-center items-center h-auto overflow-hidden py-8 px-4"
    >
      <div className="flex flex-col items-center text-center px-2 mb-8 gap-2">
        <h1 className="text-xl text-gray-500">
          AGENDE SEU EXAME GRATUITO E GANHE UM BRINDE EXCLUSIVO
        </h1>
        <p className="text-gray-500/90">
          Clientes agendados que adquirirem as lentes ganham a armação de brinde.
        </p>
      </div>
      <Link
        href="/agendamento"
        className="group relative flex items-center gap-4 w-full max-w-sm md:w-auto justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-500 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-x-hidden mb-10"
      >
        <div className="absolute top-0 -left-full h-full w-3/4 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover:left-full"></div>
        <Calendar size={24} className="text-yellow-400" />
        <div className="flex flex-col items-start text-left">
          <span className="text-base leading-tight">
            Agende seu exame gratuito
          </span>
          <small className="text-xs font-normal opacity-90">
            Vagas LIMITADAS!
          </small>
        </div>
      </Link>
      <Image
        src="/images/optometrista.png"
        alt="Parceiros"
        width={600}
        height={600}
        className="bottom-0"
      ></Image>
      <Marquee />
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Calendar,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion"; // Importar o motion
import { OverlayFilter } from "../ui/OverlayFilter";
import { Marquee } from "../ui/Marquee";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/vizzotica/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61580033646888",
      icon: Facebook,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/551123628799",
      icon: MessageCircle,
    },
  ];

  // Variantes para a animação dos ícones sociais
  const socialListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre cada ícone
        delayChildren: 0.5, // Atraso inicial para a lista
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    alert(`Buscando por: ${searchQuery}`);
  };

  return (
    <section className="relative flex flex-col lg:items-start lg:justify-center min-h-screen px-4 py-16 text-gray-100 overflow-hidden">
      <OverlayFilter />
      <div className="relative z-10 flex flex-col items-center text-center lg:ml-20">
        {/* Animação de fade-in para o logo */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/images/logo-nova.png"
            alt="Logo Óticas Vizz"
            width={500}
            height={500}
            className="w-[13rem]"
          />
        </motion.div>
        <div className="flex flex-col items-center gap-3">
          {/* Animação dos ícones sociais */}
          <motion.div
            className="flex justify-center gap-8"
            variants={socialListVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-600 hover:scale-110"
                variants={socialItemVariants} // Aplica a variante de item
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 w-full">
          <Link
            href="/agendamento"
            className="group relative flex items-center gap-4 w-full max-w-sm md:w-auto justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-500 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-x-hidden"
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
          <a
            href="https://oticasvizz.lojavirtualnuvem.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full max-w-sm md:w-auto justify-center px-6 py-3 rounded-xl border-2 border-gray-500/20 text-gray-500 font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-400/20 hover:border-gray-300 "
          >
            <ShoppingCart size={24} className="text-yellow-400" />
            <div className="flex flex-col items-start text-left">
              <span className="text-base leading-tight">
                Visite nossa{" "}
                <span className="text-yellow-400">Loja Virtual</span>
              </span>
              <small className="text-xs font-normal opacity-90">
                Compre Online
              </small>
            </div>
          </a>
        </div>
      </div>
      
      {/* Animação da imagem da modelo (Desktop) */}
      <motion.div
        initial={{ x: "100%" }} // Começa fora da tela, à direita
        animate={{ x: 0 }} // Anima para a posição original
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-0 w-auto h-screen hidden lg:block"
      >
        <Image
          src="/images/hero-img.png"
          alt="Hero Image"
          width={350}
          height={350}
          className="w-auto h-screen"
        />
      </motion.div>

      {/* Animação da imagem da modelo (Mobile) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-0 w-auto lg:hidden"
      >
        <Image
          src="/images/hero-img-mob.png"
          alt="Hero Image"
          width={350}
          height={350}
          className="w-auto"
        />
      </motion.div>

      <Marquee />
    </section>
  );
}
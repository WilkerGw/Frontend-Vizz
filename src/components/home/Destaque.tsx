"use client";
import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Destaque = () => {
  return (
    <section className="relative flex py-10 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center w-full h-[80vh] gap-8 md:gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-10"
        >
          <Image
            src="/images/oculos-destaque.png"
            alt="armação de grau"
            width={700}
            height={700}
            className=""
          ></Image>
        </motion.div>

        <div className="absolute left-0 bottom-50 flex items-start justify-start">
          <motion.ul
            className="flex flex-col justify-center items-start gap-3 pl-6"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li
              className=" font-display pl-0 flex items-center justify-center gap-[.5rem] text-2xl md:text-[2rem]"
              variants={itemVariants}
            >
              <MdVerified className="text-3xl text-yellow-400" />
              <p className="text-gray-500 text-xl">FILTRO AZUL</p>
            </motion.li>
            <motion.li
              className=" font-display pl-0 flex items-center justify-center gap-[.5rem] text-2xl md:text-[2rem]"
              variants={itemVariants}
            >
              <MdVerified className="text-3xl text-yellow-400" />
              <p className="text-gray-500 text-xl">LENTES MULTIFOCAIS</p>
            </motion.li>
            <motion.li
              className=" font-display pl-0 flex items-center justify-center gap-[.5rem] text-2xl md:text-[2rem]"
              variants={itemVariants}
            >
              <MdVerified className="text-3xl text-yellow-400" />
              <p className="text-gray-500 text-xl">AFINAMENTO DE LENTES</p>
            </motion.li>
            <motion.li
              className=" font-display pl-0 flex items-center justify-center gap-[.5rem] text-2xl md:text-[2rem]"
              variants={itemVariants}
            >
              <MdVerified className="text-3xl text-yellow-400" />
              <p className="text-gray-500 text-xl">TRATAMENTO ANTIRREFLEXO</p>
            </motion.li>
            <motion.li
              className=" font-display pl-0 flex items-center justify-center gap-[.5rem] text-2xl md:text-[2rem]"
              variants={itemVariants}
            >
              <MdVerified className="text-3xl text-yellow-400" />
              <p className="text-gray-500 text-xl">TRATAMENTO DE FOTOSSENSIBILIDADE</p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Destaque;

// src/components/ui/ImageModal.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageModalProps {
  images: string[];
  selectedImageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ImageModal({
  images,
  selectedImageIndex,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) {
  if (selectedImageIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Botão de Fechar */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
          exit={{ scale: 0, opacity: 0 }}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X size={28} />
        </motion.button>

        {/* Botão Anterior */}
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
          exit={{ x: -50, opacity: 0 }}
          className="absolute left-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={32} />
        </motion.button>

        {/* Imagem Principal */}
        <motion.div
          key={selectedImageIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-[90vw] h-[90vh] max-w-4xl max-h-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[selectedImageIndex]}
            alt="Imagem do produto em destaque"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </motion.div>

        {/* Botão Próximo */}
        <motion.button
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
          exit={{ x: 50, opacity: 0 }}
          className="absolute right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Próxima imagem"
        >
          <ChevronRight size={32} />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
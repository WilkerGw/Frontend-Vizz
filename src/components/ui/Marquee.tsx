"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

// Conteúdo sem a logo
const MarqueeContent = () => (
  <p className="flex-shrink-0 px-8 font-semibold">
    Exame de vista gratuito{' '}
    <span className="font-extrabold text-yellow-400">HOJE 07/10 - Das 14:00 Às 20:00</span>
  </p>
);

export function Marquee() {
  return (
    // A altura foi reduzida trocando py-3 por py-2
    <div className="absolute bottom-0 left-0 z-20 w-full bg-gray-800 py-2 overflow-hidden">
      <Link href="/agendamento" className="text-white no-underline">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* Renderiza o conteúdo várias vezes para o loop contínuo */}
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </motion.div>
      </Link>
    </div>
  );
}
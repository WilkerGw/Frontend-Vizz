'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { MoveHorizontal } from 'lucide-react';
import { Marquee } from '../ui/Marquee';

interface LentesFotossensiveisSectionProps {
  imagemAntes: string;
  imagemDepois: string;
}

const LentesFotossensiveisSection: React.FC<LentesFotossensiveisSectionProps> = ({
  imagemAntes,
  imagemDepois,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number, event?: TouchEvent) => {
    if (event) {
      event.preventDefault();
    }
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleMouseMove = useCallback((e: MouseEvent) => handleMove(e.clientX), [handleMove]);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleTouchMove = useCallback((e: TouchEvent) => handleMove(e.touches[0].clientX, e), [handleMove]);
  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    // 2. ALTERAÇÃO NO PADDING DA SEÇÃO
    <section className="relative w-full bg-gray-50 pt-12 md:pt-20 lg:h-screen lg:py-0 pb-[2rem]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 h-full">
        {/* Bloco de Texto (sem alterações) */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-light text-gray-500">
            LENTES FOTOSSENSÍVEIS
          </h2>
          <p className="text-md text-gray-500 mt-2 mb-6">
            Deslize horizontalmente e veja a magia acontecer.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            As lentes fotossensíveis, também conhecidas como lentes de transição, oferecem proteção contra os raios nocivos do sol, principalmente os raios UVA e UVB.  Elas escurecem automaticamente em resposta à exposição à luz ultravioleta (UV), reduzindo o brilho e o ofuscamento, e protegendo seus olhos dos danos causados pela radiação solar. 
          </p>
          <button className="bg-yellow-400 text-white py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300">
            SAIBA MAIS
          </button>
        </div>

        {/* Bloco do Comparador de Imagem */}
        <div
          ref={containerRef}
          className="relative w-full lg:w-2/3 aspect-[4/3] lg:aspect-auto h-full max-h-[60vh] lg:max-h-full select-none rounded-lg cursor-ew-resize"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Imagem "Antes" (clara) */}
          <Image
            src={imagemAntes}
            alt="Modelo com lentes claras (fotossensíveis inativas)"
            layout="fill"
            // 1. IMAGEM COMPLETA, SEM CORTES
            objectFit="contain"
            priority
            draggable={false}
          />
          {/* Imagem "Depois" (escura) */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={imagemDepois}
              alt="Modelo com lentes escuras (fotossensíveis ativadas)"
              layout="fill"
              // 1. IMAGEM COMPLETA, SEM CORTES
              objectFit="contain"
              priority
              draggable={false}
            />
          </div>
          {/* Slider (divisor e botão) */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white/80 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
              <MoveHorizontal className="text-gray-700" size={24} />
            </div>
          </div>
        </div>
      </div>
      <Marquee/>
    </section>
  );
};

export default LentesFotossensiveisSection;
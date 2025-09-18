import Link from 'next/link';
import Image from 'next/image';

/**
 * Componente Marquee
 * Cria uma faixa de rolagem infinita com texto e imagens.
 * Ideal para anúncios e avisos importantes.
 */
export function Marquee() {
  // O conteúdo a ser repetido na faixa
  const marqueeContent = (
    <>
      <p className="flex-shrink-0 px-4 font-semibold">
        Exame de vista gratuito{' '}
        <span className="font-extrabold text-yellow-400">SÁBADO 06/09 - Das 11:00 Às 16:00</span>
      </p>
      <Image
        src="/images/logo.png"
        alt="Logo Vizz"
        width={48}
        height={48}
        className="mx-4 w-12"
      />
    </>
  );

  return (
    <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-r from-gray-800 to-gray-500 py-2 overflow-hidden">
      <Link href="/agendamento" className="text-white no-underline">
        <div className="flex whitespace-nowrap">
          {/* O conteúdo é duplicado para criar o efeito de loop infinito */}
          <div className="flex items-center animate-marquee">
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
          </div>
          <div className="flex items-center animate-marquee" aria-hidden="true">
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
          </div>
        </div>
      </Link>
    </div>
  );
}
// src/components/VagasPopup.tsx

import React, { useState, useEffect } from 'react';

const VagasPopup: React.FC = () => {
  // --- ESTADO DO COMPONENTE ---
  // Guarda o número de vagas. Inicia em 50.
  const [vagas, setVagas] = useState<number>(25);
  // Controla se a contagem regressiva está ativa. Inicia como true.
  const [contagemAtiva, setContagemAtiva] = useState<boolean>(true);

  // --- LÓGICA DO TEMPORIZADOR ---
  useEffect(() => {
    // Se a contagem não está ativa, não faça nada.
    if (!contagemAtiva) {
      return;
    }

    // Cria um temporizador que executa a cada 150 milissegundos.
    const timer = setInterval(() => {
      // Diminui o número de vagas.
      setVagas((prevVagas) => {
        // Se as vagas chegarem a 12, para a contagem.
        if (prevVagas <= 3) {
          clearInterval(timer); // Limpa o temporizador para não consumir recursos.
          setContagemAtiva(false); // Muda o estado para finalizar a animação.
          return 2;
        }
        // Caso contrário, continua diminuindo.
        return prevVagas - 1;
      });
    }, 150); // Ajuste este valor para uma contagem mais rápida ou mais lenta.

    // --- FUNÇÃO DE LIMPEZA ---
    // Esta função é executada quando o componente "desmonta" (sai da tela).
    // Garante que o temporizador seja limpo, evitando vazamentos de memória.
    return () => {
      clearInterval(timer);
    };
  }, [contagemAtiva]); // O useEffect será re-executado se 'contagemAtiva' mudar.


  // --- RENDERIZAÇÃO E ESTILIZAÇÃO (JSX com Tailwind CSS) ---
  return (
    <div
      className={`
        fixed font-sans p-4 rounded-2xl shadow-xl border border-white/30
        transition-all duration-700 ease-in-out
        ${
          contagemAtiva
            // Estilos ENQUANTO a contagem está ativa (Pop-up no centro)
            ? 'bottom-10 left-1/2 -translate-x-1/2 w-80 h-32 bg-black/20 backdrop-blur-lg z-10'
            // Estilos DEPOIS que a contagem termina (Barra no topo)
            : 'top-14 left-0 w-full h-12 bg-black/30 backdrop-blur-md rounded-none z-10'
        }
      `}
    >
      <div className="flex items-center justify-center w-full h-full">
        <p className={`
          text-white font-semibold transition-all duration-500
          ${contagemAtiva ? 'text-2xl' : 'text-base'}
        `}>
          {contagemAtiva ? 'Restam' : 'Restam'}
          <span className={`
            mx-2 font-bold transition-all duration-500
            ${contagemAtiva ? 'text-5xl text-yellow-400' : 'text-lg text-yellow-400'}
          `}>
            {vagas}
          </span>
          vagas!
        </p>
      </div>
    </div>
  );
};

export default VagasPopup;
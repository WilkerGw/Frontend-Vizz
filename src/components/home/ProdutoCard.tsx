import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// Define a estrutura de dados para um produto usando TypeScript
export interface Produto {
  id: number;
  nome: string;
  imagens: string[]; // Uma lista de URLs de imagem para o carrossel
}

interface ProdutoCardProps {
  produto: Produto;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {
  // Estado para controlar o índice da imagem atual
  const [indiceImagemAtual, setIndiceImagemAtual] = useState(0);

  // Função para mostrar a imagem anterior
  const irParaImagemAnterior = (e: React.MouseEvent) => {
    e.stopPropagation(); // Impede que o clique afete outros elementos
    setIndiceImagemAtual((indiceAnterior) =>
      indiceAnterior === 0 ? produto.imagens.length - 1 : indiceAnterior - 1
    );
  };

  // Função para mostrar a próxima imagem
  const irParaProximaImagem = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndiceImagemAtual((indiceAnterior) =>
      indiceAnterior === produto.imagens.length - 1 ? 0 : indiceAnterior + 1
    );
  };

  // Função para o botão de "mais" (ex: adicionar ao carrinho)
  const handleAdicionar = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Produto ${produto.nome} adicionado!`);
    // Aqui você pode adicionar a lógica para abrir um modal ou adicionar ao carrinho
  };

  return (
    <div className="relative group border border-gray-200 rounded-lg p-4 transition-all duration-300 ease-in-out hover:shadow-lg overflow-hidden">
      {/* Imagem do Produto */}
      <Image
        src={produto.imagens[indiceImagemAtual]}
        width={300}
        height={300}
        alt={`Imagem de ${produto.nome}`}
        className="w-full h-auto object-contain"
      />

      {/* Ícones que aparecem no hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />

      {/* Seta Esquerda */}
      <button
        onClick={irParaImagemAnterior}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={20} className="text-gray-700" />
      </button>

      {/* Seta Direita */}
      <button
        onClick={irParaProximaImagem}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={20} className="text-gray-700" />
      </button>

      {/* Botão de Adicionar (+) */}
      <button
        onClick={handleAdicionar}
        className="absolute bottom-4 right-4 bg-yellow-400 text-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500 hover:scale-110"
        aria-label="Adicionar produto"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default ProdutoCard;
'use client';

import React, { useState } from 'react'; // 1. Importar o useState
import ProdutoCard, { Produto } from './ProdutoCard';

// Dados de exemplo (mock). No futuro, isto virá de uma API.
const mockProdutos: Produto[] = [
    { id: 1, nome: 'Óculos de Grau Moderno', imagens: ['/images/destaques/01.Webp', '/images/destaques/02.Webp'] },
    { id: 2, nome: 'Óculos Clássico', imagens: ['/images/destaques/03.Webp', '/images/destaques/04.Webp'] },
    { id: 3, nome: 'Armação de Titânio', imagens: ['/images/destaques/05.Webp', '/images/destaques/06.Webp'] },
    { id: 4, nome: 'Óculos de Sol Aviador', imagens: ['/images/destaques/07.Webp', '/images/destaques/08.Webp'] },
    { id: 5, nome: 'Armação Redonda Vintage', imagens: ['/images/destaques/09.Webp', '/images/destaques/10.Webp'] },
    { id: 6, nome: 'Óculos Esportivo', imagens: ['/images/destaques/11.Webp', '/images/destaques/12.Webp'] },
    { id: 7, nome: 'Armação Minimalista', imagens: ['/images/destaques/13.Webp', '/images/destaques/13.Webp'] },
    { id: 8, nome: 'Óculos de Leitura Elegante', imagens: ['/images/destaques/14.Webp', '/images/destaques/015.Webp'] },
    { id: 9, nome: 'Óculos de Leitura Elegante', imagens: ['/images/destaques/14.Webp', '/images/destaques/014.Webp'] },
];

const PRODUTOS_INICIAIS = 4;

const ProdutosSection: React.FC = () => {
  // 2. Criar o estado para controlar a visibilidade dos produtos
  const [mostrarTodos, setMostrarTodos] = useState(false);

  // 3. Determinar quais produtos exibir com base no estado
  // Se 'mostrarTodos' for true, exibe todos. Senão, exibe os 4 primeiros.
  const produtosParaExibir = mostrarTodos
    ? mockProdutos
    : mockProdutos.slice(0, PRODUTOS_INICIAIS);

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-gray-500 tracking-wider">
            LANÇAMENTOS
          </h2>
          <p className="text-md text-gray-500 mt-1">
            Confira nossos destaques
          </p>
        </div>

        {/* Grade de Produtos Responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 4. Mapear a lista de produtos a serem exibidos */}
          {produtosParaExibir.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>

        {/* 5. Botão "Ver mais" que aparece condicionalmente */}
        {!mostrarTodos && mockProdutos.length > PRODUTOS_INICIAIS && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setMostrarTodos(true)}
              className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Ver mais destaques
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProdutosSection;
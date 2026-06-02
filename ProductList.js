import React from 'react';
import { useDispatch } from 'react-redux';

// Lista de produtos com imagens e descrições
const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    // aria-label descreve a região para leitores de tela
    <main aria-label="Lista de livros disponíveis">
      <h1>Livraria Online</h1>

      {/* aria-live="polite" anuncia mudanças dinâmicas ao leitor de tela */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="cart-status"></div>

      {/* role="list" reforça semântica da lista para leitores de tela */}
      <ul role="list" className="product-list">
        {products.map(product => (
          <li key={product.id} role="listitem" className="product-card">

            {/* Imagem com texto alternativo descritivo */}
            <img
              src={product.image}
              alt={`Capa do livro: ${product.name}`}
              width="120"
              height="180"
            />

            {/* Hierarquia correta: h1 na página, h2 para cada produto */}
            <h2>{product.name}</h2>
            <p>{product.author}</p>
            <p className="price">R$ {product.price.toFixed(2)}</p>

            {/*
              aria-label específico para cada botão, pois sem ele o leitor
              de tela leria apenas "Adicionar ao carrinho" sem saber qual livro.
              tabIndex="0" garante foco via teclado (Tab).
              onKeyDown permite acionar com Enter/Space além do clique.
            */}
            <button
              aria-label={`Adicionar "${product.name}" ao carrinho`}
              tabIndex="0"
              onClick={() => addToCart(product)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  addToCart(product);
                }
              }}
            >
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductList;

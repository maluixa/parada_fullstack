import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector(state => state.cart.length);

  return (
    /*
      role="navigation" + aria-label identifica o bloco de navegação.
      Fundamental para leitores de tela distinguirem múltiplas navs na página.
    */
    <nav role="navigation" aria-label="Navegação principal">
      <div className="nav-brand">
        {/* Link com texto descritivo — evita links genéricos como "clique aqui" */}
        <Link to="/" aria-label="Ir para a página inicial da Livraria Online">
          Livraria Online
        </Link>
      </div>

      <ul role="list" className="nav-links">
        <li>
          <Link to="/" aria-label="Ver lista de livros">
            Livros
          </Link>
        </li>
        <li>
          {/*
            aria-label dinâmico informa ao leitor de tela quantos itens
            estão no carrinho, sem o usuário precisar navegar até lá.
          */}
          <Link
            to="/cart"
            aria-label={`Carrinho de compras — ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}
          >
            Carrinho
            {cartCount > 0 && (
              <span className="cart-badge" aria-hidden="true">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

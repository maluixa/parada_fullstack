import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    // role="region" + aria-label identifica esta seção para leitores de tela
    <section role="region" aria-label="Carrinho de compras">

      {/* h1 único por página – no carrinho, este é o título principal */}
      <h1>Seu Carrinho</h1>

      {cart.length === 0 ? (
        // Mensagem clara e acessível quando carrinho está vazio
        <p role="status" aria-live="polite">
          Seu carrinho está vazio.
        </p>
      ) : (
        <>
          {/* aria-label na lista descreve o conteúdo para leitores de tela */}
          <ul role="list" aria-label="Itens no carrinho">
            {cart.map(item => (
              <li key={item.id} role="listitem" className="cart-item">
                <span>{item.name}</span>
                <span>R$ {item.price.toFixed(2)}</span>

                {/*
                  aria-label específico por item: sem isso, o leitor de tela
                  diria apenas "Remover" sem indicar qual livro.
                  tabIndex="0" + onKeyDown = acessível por teclado.
                */}
                <button
                  aria-label={`Remover "${item.name}" do carrinho`}
                  tabIndex="0"
                  onClick={() => removeFromCart(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      removeFromCart(item);
                    }
                  }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          {/* Resumo do total acessível */}
          <div aria-label="Total do pedido" className="cart-total">
            <strong>
              Total: R${' '}
              {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </strong>
          </div>

          <button
            aria-label="Finalizar compra"
            tabIndex="0"
            className="checkout-btn"
          >
            Finalizar Compra
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;

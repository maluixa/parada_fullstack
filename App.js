import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

// Dados dos produtos com imagens e informações completas
const products = [
  {
    id: 1,
    name: 'Dom Casmurro',
    author: 'Machado de Assis',
    price: 39.90,
    image: 'https://via.placeholder.com/120x180?text=Dom+Casmurro'
  },
  {
    id: 2,
    name: 'O Cortiço',
    author: 'Aluísio Azevedo',
    price: 29.90,
    image: 'https://via.placeholder.com/120x180?text=O+Corti%C3%A7o'
  },
  {
    id: 3,
    name: 'Grande Sertão: Veredas',
    author: 'João Guimarães Rosa',
    price: 49.90,
    image: 'https://via.placeholder.com/120x180?text=Grande+Sert%C3%A3o'
  },
  {
    id: 4,
    name: 'Capitães da Areia',
    author: 'Jorge Amado',
    price: 34.90,
    image: 'https://via.placeholder.com/120x180?text=Capit%C3%A3es'
  }
];

const App = () => {
  return (
    <Router>
      {/*
        Skip link: permite que usuários de teclado/leitores de tela
        pulem direto para o conteúdo principal, evitando repetir a navbar.
        É a primeira melhoria de acessibilidade recomendada pelas WCAG.
      */}
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <Navbar />

      {/*
        id="main-content" é o destino do skip link acima.
        Identifica a área principal para leitores de tela.
      */}
      <div id="main-content" className="main-container">
        <Switch>
          <Route path="/" exact>
            <ProductList products={products} />
          </Route>
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>

      {/* Rodapé com informações de acessibilidade */}
      <footer role="contentinfo" aria-label="Rodapé da página">
        <p>© 2024 Livraria Online — Todos os direitos reservados</p>
        <p>Este site segue as diretrizes WCAG 2.1 de acessibilidade.</p>
      </footer>
    </Router>
  );
};

export default App;

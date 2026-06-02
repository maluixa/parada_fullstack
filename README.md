# Livraria Online — Acessibilidade Web

Projeto desenvolvido como atividade prática da disciplina de Desenvolvimento Full Stack, com foco na implementação de melhorias de acessibilidade seguindo as diretrizes **WCAG 2.1**.

## Como executar

```bash
# Instalar dependências
npm install

# Iniciar a aplicação
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Tecnologias

- React 17
- Redux + React-Redux
- React Router DOM v5
- CSS puro (sem frameworks)

## Melhorias de Acessibilidade Implementadas

### 1. Skip Link (Pular Navegação)
Permite que usuários de teclado/leitores de tela pulem direto para o conteúdo principal.

### 2. Texto Alternativo em Imagens
Todas as imagens possuem atributo `alt` descritivo. Imagens decorativas usam `alt=""`.

### 3. Hierarquia de Cabeçalhos
Estrutura lógica com `<h1>` único por página, seguido de `<h2>` para cada produto.

### 4. Navegação por Teclado
- Todos os elementos interativos são focáveis via `Tab`
- Botões respondem a `Enter` e `Space`
- Foco visível com `outline` de alto contraste (`:focus-visible`)

### 5. ARIA Labels
- `aria-label` descritivo em cada botão (ex: `Adicionar "Dom Casmurro" ao carrinho`)
- `aria-live="polite"` para anúncios dinâmicos
- `aria-hidden="true"` em elementos decorativos
- `role="navigation"`, `role="region"`, `role="list"`, etc.

### 6. Contraste de Cores
Todas as combinações de cor atendem ao mínimo de **4.5:1** exigido pela WCAG AA.

### 7. Tamanho de Area de Toque
Botões com `min-height: 44px` e `min-width: 44px` (WCAG 2.5.5).

### 8. Modo de Alto Contraste
Suporte a `prefers-contrast: high` via media query CSS.

### 9. Movimento Reduzido
Suporte a `prefers-reduced-motion: reduce` — desativa animações para usuários sensíveis.

## Estrutura do Projeto

```
src/
├── components/
│   ├── ProductList.js   # Lista de produtos
│   ├── Cart.js          # Carrinho de compras
│   └── Navbar.js        # Navegação principal
├── App.js               # Rotas e dados
├── store.js             # Redux store
├── index.js             # Entry point
└── index.css            # Estilos com acessibilidade
```

## Referencias

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [NVDA Screen Reader](https://www.nvaccess.org/)

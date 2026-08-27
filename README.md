# Shinra — site institucional

Site institucional da **Shinra**, um estúdio enxuto de desenvolvimento web:
sites, landing pages e sistemas web sob medida, feitos por quem programa.

Este repositório é apenas o site (front-end estático). Não há back-end aqui.

<!-- Preview: adicionar um print da home em docs/preview.png e referenciar aqui
![Shinra](docs/preview.png)
-->

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) como build tool e dev server
- [Tailwind CSS v4](https://tailwindcss.com/) para estilo
- [three.js](https://threejs.org/) via [@react-three/fiber](https://r3f.docs.pmnd.rs/) — campo de pontos animado no Hero (carregado sob demanda / code-split)
- [Lucide React](https://lucide.dev/) para ícones e [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) para microinterações
- Tipografia: Plus Jakarta Sans, Space Grotesk e JetBrains Mono (Google Fonts)

## Seções

- **Hero** — proposta em uma frase, CTA e três princípios; fundo em three.js
- **Serviços** — sites e landing pages, sistemas web sob medida, manutenção e evolução, IA e automações (lista interativa)
- **Processo** — conversa e proposta · desenvolvimento com acompanhamento · testes e publicação
- **Projetos** — projetos reais entregues, marcados como "cliente real" ou "projeto próprio"
- **Estimador de escopo** — monta o projeto e mostra uma estimativa inicial de prazo e complexidade (não é orçamento fechado)
- **FAQ** — preço, prazo, pagamento, propriedade do código, pós-entrega
- **Contato** — formulário compacto + canais diretos

Animações: revelação em scroll (`Reveal`, IntersectionObserver + CSS), acordeão
do FAQ e o campo de pontos em three.js. Tudo respeita `prefers-reduced-motion`.

> Os dados de conteúdo ficam concentrados em [`src/data/content.ts`](src/data/content.ts).
> Os prints dos projetos vão em [`public/cases/`](public/cases/) — ver o README de lá.
> Os contatos (e-mail, WhatsApp) estão como **placeholder** até a estruturação da empresa.

## Rodar localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:3030
```

Outros scripts:

```bash
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção localmente
npm run lint     # ESLint
```

## Deploy

O build gera arquivos estáticos em `dist/`, publicáveis em qualquer host estático
(Vercel, Netlify, GitHub Pages, etc.).

- **Vercel / Netlify / domínio próprio na raiz:** nenhuma configuração extra necessária.
- **GitHub Pages em subpasta** (ex.: `usuario.github.io/shinra/`): definir
  `base: '/shinra/'` em [`vite.config.ts`](vite.config.ts) antes do build.

---

© Shinra

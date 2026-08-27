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
- [Lucide React](https://lucide.dev/) para ícones e [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) para microinterações
- Tipografia: Plus Jakarta Sans e JetBrains Mono (Google Fonts)

## Seções

- **Hero** — o que o estúdio faz e como um projeto anda, em 3 etapas
- **Sobre** — estúdio de uma pessoa, com parceiros sob demanda
- **Serviços** — sites e landing pages, sistemas web sob medida, manutenção e evolução, IA e automações
- **Como o projeto anda** — conversa e proposta, desenvolvimento com acompanhamento, testes e publicação
- **Como eu trabalho** — o fluxo real de um projeto, do primeiro contato ao suporte
- **IA e automações** — integração com APIs de IA e automação de tarefas (nível de integração, sem treinar modelos)
- **Projetos** — projetos reais entregues, marcados como "cliente real" ou "projeto próprio"
- **Estimador de escopo** — monta o projeto e mostra uma estimativa inicial de prazo e complexidade (não é orçamento fechado)
- **FAQ** — preço, prazo, pagamento, propriedade do código, pós-entrega
- **Contato** — formulário e canais diretos

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

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  techStack: string[];
  badge: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#solucoes' },
  { label: 'Contato', href: '#rodape' },
];

// Slides do Hero (carrossel), um por serviço.
export const HERO_SLIDES = [
  {
    eyebrow: 'Sites e landing pages',
    title: 'Seu site institucional, rápido e no ar.',
    text: 'Páginas que carregam rápido, funcionam bem no celular e as pessoas encontram no Google.',
  },
  {
    eyebrow: 'Sistemas web sob medida',
    title: 'Sistemas com login, banco de dados e painel.',
    text: 'Quando um site não basta: área administrativa, cadastro de usuários e as regras do seu negócio.',
  },
  {
    eyebrow: 'Manutenção e evolução',
    title: 'Cuidamos do site que você já tem.',
    text: 'Ajustes, novas seções, correções e melhora de performance em projetos que já estão no ar.',
  },
  {
    eyebrow: 'IA e automações',
    title: 'Integração com IA e automação de tarefas.',
    text: 'Conectamos seu site a APIs de IA e automatizamos o trabalho manual que se repete todo dia.',
  },
];

// "O que você está esperando?" — 6 itens de checklist.
export const BENEFITS = [
  { title: 'Melhor experiência para quem acessa', desc: 'Navegação simples, rápida e clara em qualquer tela.' },
  { title: 'Escopo e prazo por escrito', desc: 'Você sabe o que vai receber e em quanto tempo antes de começar.' },
  { title: 'Funciona em qualquer navegador', desc: 'Testado no celular, no tablet e no desktop antes de publicar.' },
  { title: 'Sem mensalidade obrigatória', desc: 'Você paga o projeto; manutenção só se e quando quiser.' },
  { title: 'SEO básico incluído', desc: 'Títulos, descrições e estrutura para o site ser encontrado.' },
  { title: 'Código-fonte 100% seu', desc: 'Domínio, hospedagem e código são seus. Sem lock-in.' },
];

// 3 destaques complementares (sem título de seção).
export const ADDONS = [
  { title: 'Domínio e publicação', desc: 'Configuração de domínio, hospedagem e publicação, tudo acessível.' },
  { title: 'SEO básico', desc: 'Títulos, descrições e estrutura semântica para o site ser encontrado.' },
  { title: 'Integrações com APIs', desc: 'Formulários, pagamentos, mapas, IA e outros serviços conectados ao site.' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites',
    title: 'Sites e landing pages',
    tagline: 'Institucionais, páginas de produto, sites de evento.',
    description: 'Um site rápido, que funciona bem no celular e que as pessoas encontram no Google. Do texto à publicação.',
    iconName: 'LayoutGrid',
    badge: 'Site',
    features: [
      'Responsivo, pensado primeiro no celular',
      'Boa performance de carregamento',
      'SEO básico e domínio configurado',
      'Publicado e no ar',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'sistemas',
    title: 'Sistemas web sob medida',
    tagline: 'Login, banco de dados e painel administrativo.',
    description: 'Quando um site não basta: cadastro e login de usuários, área administrativa e as regras do seu negócio.',
    iconName: 'Cpu',
    badge: 'Sistema',
    features: [
      'Autenticação de usuários',
      'Painel administrativo',
      'Banco de dados sob medida',
      'Relatórios e exportação',
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 'manutencao',
    title: 'Manutenção e evolução',
    tagline: 'Cuidar de um site ou sistema que já existe.',
    description: 'Ajustes, novas seções, correções e melhora de performance em projetos que já estão no ar.',
    iconName: 'Sparkles',
    badge: 'Contínuo',
    features: [
      'Correção de erros e ajustes de layout',
      'Novas seções e funcionalidades',
      'Performance e velocidade',
      'Ajustes de SEO básico',
    ],
    techStack: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 'ia',
    title: 'IA e automações',
    tagline: 'Integração com IA e automação de tarefas.',
    description: 'Conectar seu site a APIs de IA e automatizar o trabalho manual repetitivo. No nível de integração, não de treinar modelos.',
    iconName: 'Bot',
    badge: 'Automação',
    features: [
      'Integração com APIs de IA (OpenAI, Claude)',
      'Automação de tarefas entre ferramentas',
      'Formulários que disparam ações',
      'Conexão entre planilha, e-mail e sistema',
    ],
    techStack: ['Node.js', 'APIs REST'],
  },
];

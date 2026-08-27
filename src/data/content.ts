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

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  category: string;
  nature: 'Cliente real' | 'Projeto próprio';
  title: string;
  description: string;
  url?: string;
  tags: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#solucoes' },
  { label: 'Projetos', href: '#cases' },
  { label: 'Contato', href: '#contato' },
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

// "O que você ganha" — benefícios verificáveis.
export const BENEFITS = [
  { title: 'Escopo e prazo por escrito', desc: 'Você sabe o que vai receber e em quanto tempo antes de começar.' },
  { title: 'Contato direto', desc: 'Você fala com quem desenvolve, do primeiro contato ao suporte depois da entrega.' },
  { title: 'Código 100% seu', desc: 'Código-fonte e acessos são seus. Sem lock-in.' },
  { title: 'Entrega publicada', desc: 'O projeto vai para o ar funcionando, não fica só em arquivo.' },
  { title: 'Acompanhamento no caminho', desc: 'Versões para revisão ao longo do desenvolvimento.' },
  { title: 'Responsivo e com SEO básico', desc: 'Pensado primeiro no celular, com título e estrutura para o Google.' },
];

// Também ajudo com — apoios que entram junto do projeto.
export const ADDONS = [
  { title: 'Domínio e publicação', desc: 'Configuração de domínio, hospedagem e publicação, tudo acessível.' },
  { title: 'SEO básico', desc: 'Títulos, descrições e estrutura semântica para o site ser encontrado.' },
  { title: 'Integrações com APIs', desc: 'Formulários, pagamentos, mapas, IA e outros serviços conectados ao site.' },
];

// Três princípios curtos, mostrados de forma compacta no Hero.
export const PRINCIPLES = [
  { title: 'Escopo por escrito', desc: 'O que será entregue, o prazo e o valor combinados antes de começar.' },
  { title: 'Contato direto', desc: 'Você fala com quem desenvolve, do primeiro contato ao suporte.' },
  { title: 'Código 100% seu', desc: 'Código-fonte e acessos são seus, sem dependência da Shinra.' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Conversa e proposta',
    description: 'A Shinra entende o negócio e o objetivo. Você recebe escopo, prazo e valor por escrito antes de qualquer código.',
  },
  {
    step: '02',
    title: 'Desenvolvimento com acompanhamento',
    description: 'O desenvolvimento acontece com versões enviadas para revisão ao longo do caminho. Ajustes combinados durante o projeto.',
  },
  {
    step: '03',
    title: 'Testes e publicação',
    description: 'Revisão e testes antes de publicar. Entrego no ar, funcionando, com orientação de uso e suporte combinado.',
  },
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

// Projetos reais entregues. Prints ainda a subir em public/cases/.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'historias-para-a-vida',
    client: 'Izabel Devecchi',
    industry: 'Livro infantil',
    category: 'Site de divulgação',
    nature: 'Cliente real',
    title: 'Histórias para a Vida',
    description: 'Site do livro infantil "Zeca Tatu e Sua Roupa Nova", da autora Izabel Devecchi. Páginas sobre o livro, a autora e contato, com animações leves.',
    url: 'https://carlosrafael426.github.io/historias-para-a-vida/',
    tags: ['React 19', 'TypeScript', 'Tailwind v4', 'Motion'],
    image: '/cases/historias-para-a-vida.png',
  },
  {
    id: 'missao-santa-faustina',
    client: 'Missão Santa Faustina',
    industry: 'Comunidade católica · PR',
    category: 'Site institucional',
    nature: 'Cliente real',
    title: 'Missão Santa Faustina',
    description: 'Site institucional de uma comunidade católica em Fazenda Rio Grande (PR), com história, calendário de atividades e contato.',
    url: 'https://carlosrafael426.github.io/missao-santa-faustina/',
    tags: ['React 19', 'TypeScript', 'Tailwind v4'],
    image: '/cases/missao-santa-faustina.png',
  },
  {
    id: 'financemate',
    client: 'Projeto próprio',
    industry: 'Finanças pessoais',
    category: 'Aplicação web',
    nature: 'Projeto próprio',
    title: 'FinanceMate',
    description: 'Controle financeiro pessoal com login (JWT), dashboard, gráficos de receitas e despesas e exportação de relatórios em PDF e Excel.',
    url: 'https://finance-mate-gray.vercel.app',
    tags: ['React', 'Node', 'Express', 'MongoDB'],
    image: '/cases/financemate.png',
  },
  {
    id: 'devburger',
    client: 'Projeto próprio',
    industry: 'E-commerce',
    category: 'App web + API',
    nature: 'Projeto próprio',
    title: 'DevBurger',
    description: 'Loja online completa: front-end em React consumindo uma API REST própria, com autenticação, permissão de administrador e upload de imagens.',
    tags: ['Node', 'Express', 'Sequelize', 'PostgreSQL'],
    image: '/cases/devburger.png',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Quanto custa um projeto?',
    answer: 'Depende do escopo. Um site institucional simples tem um custo bem diferente de um sistema com login e painel. O valor é fechado por escrito antes de começar. Use o estimador aqui do site para ter uma ideia inicial do porte e do prazo.',
  },
  {
    question: 'Quanto tempo leva?',
    answer: 'Um site institucional costuma levar poucas semanas; um sistema sob medida, mais. O prazo é combinado junto com o escopo, por escrito, antes de iniciar.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'É combinado caso a caso na proposta — normalmente uma parte no início e o restante em etapas até a entrega.',
  },
  {
    question: 'O site é meu mesmo? E o código?',
    answer: 'Sim. Todo o código-fonte e os acessos (domínio, hospedagem, contas) são seus. Sem lock-in: você pode evoluir ou levar o projeto para outra pessoa depois.',
  },
  {
    question: 'E se eu precisar mudar algo depois da entrega?',
    answer: 'Dá para contratar a manutenção e evolução: correções, novas seções, ajustes de performance e SEO. Combinamos se é pontual ou contínuo.',
  },
];

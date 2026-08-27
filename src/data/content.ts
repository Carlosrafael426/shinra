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
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Comercial' | 'Técnico' | 'Metodologia' | 'Segurança';
}

export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

// Compromissos verificáveis de um estúdio novo e enxuto — sem números de vitrine.
export const COMPANY_METRICS = [
  { value: 'Direto', label: 'Sem intermediário', desc: 'Você fala com quem escreve o código, do primeiro contato ao suporte.' },
  { value: '100%', label: 'Código do cliente', desc: 'Todo o código-fonte e os acessos são seus, sem dependência da Shinra.' },
  { value: 'Por escrito', label: 'Escopo e prazo', desc: 'O que será entregue e em quanto tempo é combinado antes de começar.' },
  { value: 'No ar', label: 'Entrega publicada', desc: 'O projeto é entregue publicado e funcionando, não só em arquivo.' },
];

export const TECH_STACKS = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Linguagem' },
  { name: 'Tailwind CSS', category: 'Estilo' },
  { name: 'React Router', category: 'Navegação' },
  { name: 'Motion', category: 'Animação' },
  { name: 'Node.js & Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Banco de Dados' },
  { name: 'PostgreSQL & Sequelize', category: 'Banco de Dados' },
  { name: 'Vite', category: 'Build' },
  { name: 'Git & GitHub', category: 'Versionamento' },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Conversa e proposta',
    subtitle: 'Entender o problema',
    description: 'Conversa inicial para entender o negócio e o objetivo do projeto. Depois, uma proposta com escopo, prazo e valor fechados por escrito.',
    deliverables: ['Escopo do que será feito', 'Prazo combinado', 'Valor fechado antes de começar'],
    duration: 'Antes de começar'
  },
  {
    step: '02',
    title: 'Desenvolvimento com acompanhamento',
    subtitle: 'Você acompanha',
    description: 'Construção do projeto com atualizações ao longo do caminho, para você ver o andamento e ajustar o que for preciso.',
    deliverables: ['Versões para revisão', 'Ajustes combinados', 'Código versionado no Git'],
    duration: 'Durante o projeto'
  },
  {
    step: '03',
    title: 'Testes e publicação',
    subtitle: 'Entrega no ar',
    description: 'Revisão e testes antes de publicar. O site ou sistema é entregue publicado, funcionando e com orientação de uso.',
    deliverables: ['Testes antes de publicar', 'Publicação em produção', 'Suporte combinado após a entrega'],
    duration: 'Na entrega'
  }
];

export const NAV_LINKS: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#solucoes' },
  { label: 'Como trabalho', href: '#squad' },
  { label: 'IA & Automações', href: '#ia' },
  { label: 'Projetos', href: '#cases' },
  { label: 'Estimativa', href: '#estimador', badge: 'Simular' },
  { label: 'Contato', href: '#contato' },
];

export interface TeamRole {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export const TEAM_ROLES: TeamRole[] = [
  {
    step: '01',
    title: 'Conversa inicial',
    desc: 'Entendo o que você precisa, para quem é o projeto e qual o objetivo. Sem compromisso.',
    icon: 'MessageCircle'
  },
  {
    step: '02',
    title: 'Proposta com escopo e prazo',
    desc: 'Você recebe por escrito o que será entregue, em quanto tempo e por quanto — antes de começar.',
    icon: 'FileText'
  },
  {
    step: '03',
    title: 'Desenvolvimento com acompanhamento',
    desc: 'Eu programo e vou mostrando o andamento. Quem atende é quem escreve o código.',
    icon: 'Code2'
  },
  {
    step: '04',
    title: 'Publicação e suporte',
    desc: 'Entrego publicado e funcionando, com orientação de uso. Parceiros de design, conteúdo e mídia entram sob demanda quando o projeto pede.',
    icon: 'Rocket'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Escopo fechado antes de começar',
    subtitle: 'Você sabe o que vai receber',
    desc: 'Antes de qualquer linha de código, combinamos por escrito o que será entregue, o prazo e o valor. Sem surpresa no meio do caminho.',
    icon: 'Target'
  },
  {
    title: 'Quem atende é quem programa',
    subtitle: 'Sem telefone sem fim',
    desc: 'Você fala direto comigo, do primeiro contato ao suporte depois da entrega. Parceiros especializados entram só quando o projeto pede.',
    icon: 'Clock'
  },
  {
    title: 'Testado antes de publicar',
    subtitle: 'Entrega no ar e funcionando',
    desc: 'Reviso e testo cada tela antes de publicar. O projeto é entregue em produção, funcionando, e o código é 100% seu.',
    icon: 'ShieldCheck'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites',
    title: 'Sites e landing pages',
    tagline: 'Sites institucionais, páginas de produto e sites de evento.',
    description: 'Um site rápido, que funciona bem no celular e que as pessoas encontram no Google. Do texto à publicação.',
    iconName: 'LayoutGrid',
    badge: 'Site',
    features: [
      'Layout responsivo, pensado primeiro no celular',
      'Boa performance de carregamento',
      'SEO básico: título, descrição e estrutura para o Google',
      'Publicado e no ar, com domínio configurado'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router']
  },
  {
    id: 'sistemas',
    title: 'Sistemas web sob medida',
    tagline: 'Aplicações com login, banco de dados e painel administrativo.',
    description: 'Quando um site não basta: cadastro e login de usuários, área administrativa, relatórios e as regras do seu negócio.',
    iconName: 'Cpu',
    badge: 'Sistema',
    features: [
      'Cadastro e login de usuários (autenticação)',
      'Painel administrativo para gerenciar o conteúdo',
      'Banco de dados modelado para o seu caso',
      'Relatórios e exportação de dados'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
  },
  {
    id: 'manutencao',
    title: 'Manutenção e evolução',
    tagline: 'Cuidar de um site ou sistema que já existe.',
    description: 'Seu site já está no ar, mas precisa de ajustes, novas seções ou está lento? Eu assumo a manutenção e a evolução.',
    iconName: 'Sparkles',
    badge: 'Contínuo',
    features: [
      'Correção de erros e ajustes de layout',
      'Novas seções e funcionalidades',
      'Melhora de performance e velocidade',
      'Ajustes de SEO básico'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Git']
  },
  {
    id: 'ia',
    title: 'IA e automações',
    tagline: 'Integração com IA e automação de tarefas repetitivas.',
    description: 'Conectar seu site ou sistema a APIs de IA e automatizar tarefas manuais que tomam tempo. No nível de integração, não de treinar modelos.',
    iconName: 'Bot',
    badge: 'Automação',
    features: [
      'Integração com APIs de IA (assistentes, geração de texto)',
      'Automação de tarefas repetitivas entre ferramentas',
      'Formulários e fluxos que disparam ações automáticas',
      'Conexão entre planilhas, e-mail e sistemas'
    ],
    techStack: ['Node.js', 'APIs REST', 'OpenAI / Claude API']
  }
];

export const AI_SOLUTIONS = [
  {
    title: 'Integração com APIs de IA',
    desc: 'Conecte seu site ou sistema a assistentes e geração de texto via API, como OpenAI e Claude.',
    badge: 'Integração'
  },
  {
    title: 'Automação de tarefas repetitivas',
    desc: 'Tarefas manuais que se repetem todo dia — copiar dados, enviar e-mails, organizar planilhas — passam a rodar sozinhas.',
    badge: 'Automação'
  },
  {
    title: 'Formulários que disparam ações',
    desc: 'Um formulário preenchido no site pode enviar e-mail, registrar em planilha ou abrir um chamado, sem trabalho manual.',
    badge: 'Fluxos'
  },
  {
    title: 'Conexão entre ferramentas',
    desc: 'Ligar planilha, e-mail, sistema e API para que a informação circule sem alguém copiando e colando.',
    badge: 'Integração'
  }
];

// Projetos reais entregues. "Cliente real" e "Projeto próprio" marcados explicitamente.
// Prints ainda a subir em public/cases/ — ver public/cases/README.md.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'historias-para-a-vida',
    client: 'Izabel Devecchi',
    industry: 'Livro infantil',
    category: 'Site de divulgação',
    nature: 'Cliente real',
    title: 'Histórias para a Vida — site do livro "Zeca Tatu e Sua Roupa Nova"',
    description: 'Site de divulgação do livro infantil "Zeca Tatu e Sua Roupa Nova", da autora Izabel Devecchi. Páginas sobre o livro, a autora e contato, com animações leves e navegação simples.',
    url: 'https://carlosrafael426.github.io/historias-para-a-vida/',
    metrics: [
      { label: 'Tipo', value: 'Site do livro' },
      { label: 'Stack', value: 'React 19 + TS' },
      { label: 'Status', value: 'No ar' }
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind v4', 'Motion', 'React Router'],
    image: '/cases/historias-para-a-vida.png'
  },
  {
    id: 'missao-santa-faustina',
    client: 'Missão Santa Faustina',
    industry: 'Comunidade católica · PR',
    category: 'Site institucional',
    nature: 'Cliente real',
    title: 'Missão Santa Faustina — site institucional da comunidade',
    description: 'Site institucional de uma comunidade católica em Fazenda Rio Grande (PR), com história, calendário de atividades e contato.',
    url: 'https://carlosrafael426.github.io/missao-santa-faustina/',
    metrics: [
      { label: 'Tipo', value: 'Site institucional' },
      { label: 'Stack', value: 'React 19 + TS' },
      { label: 'Status', value: 'No ar' }
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind v4', 'React Router'],
    image: '/cases/missao-santa-faustina.png'
  },
  {
    id: 'financemate',
    client: 'Projeto próprio',
    industry: 'Finanças pessoais',
    category: 'Aplicação web',
    nature: 'Projeto próprio',
    title: 'FinanceMate — controle financeiro com dashboard e relatórios',
    description: 'Sistema de controle financeiro pessoal com cadastro e login (JWT), dashboard, gráficos de receitas e despesas e exportação de relatórios em PDF e Excel.',
    url: 'https://finance-mate-gray.vercel.app',
    metrics: [
      { label: 'Tipo', value: 'App financeiro' },
      { label: 'Stack', value: 'React + Node' },
      { label: 'Status', value: 'No ar' }
    ],
    tags: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB', 'JWT'],
    image: '/cases/financemate.png'
  },
  {
    id: 'devburger',
    client: 'Projeto próprio',
    industry: 'E-commerce',
    category: 'App web + API',
    nature: 'Projeto próprio',
    title: 'DevBurger — loja online com API REST própria',
    description: 'Loja online completa: front-end em React consumindo uma API REST própria, com autenticação, permissão de administrador e upload de imagens dos produtos.',
    metrics: [
      { label: 'Tipo', value: 'Loja + API REST' },
      { label: 'Back-end', value: 'Node + Sequelize' },
      { label: 'Status', value: 'Portfólio' }
    ],
    tags: ['Node', 'Express', 'Sequelize', 'PostgreSQL', 'MongoDB', 'React'],
    image: '/cases/devburger.png'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Comercial',
    question: 'Quanto custa um projeto?',
    answer: 'Depende do escopo. Um site institucional simples tem um custo bem diferente de um sistema com login e painel administrativo. O valor é fechado por escrito antes de começar, sem cobrança por hora surpresa. Use o estimador aqui do site para ter uma ideia inicial do porte e do prazo.'
  },
  {
    category: 'Comercial',
    question: 'Quanto tempo leva?',
    answer: 'Um site institucional costuma levar poucas semanas; um sistema sob medida, mais. O prazo é combinado junto com o escopo, por escrito, antes de iniciar. Se algo mudar no meio do caminho, a gente reajusta em acordo.'
  },
  {
    category: 'Comercial',
    question: 'Como funciona o pagamento?',
    answer: 'É combinado caso a caso na proposta — normalmente uma parte no início e o restante em etapas até a entrega. Fica tudo por escrito antes de começar.'
  },
  {
    category: 'Técnico',
    question: 'O site é meu mesmo? E o código?',
    answer: 'Sim. Todo o código-fonte e os acessos (domínio, hospedagem, contas) são seus. Não existe dependência da Shinra para você mexer, evoluir ou levar o projeto para outra pessoa depois.'
  },
  {
    category: 'Metodologia',
    question: 'E se eu precisar mudar algo depois da entrega?',
    answer: 'Dá para contratar a manutenção e evolução: correções, novas seções, ajustes de performance e SEO. Combinamos se é pontual ou um acompanhamento contínuo.'
  },
  {
    category: 'Metodologia',
    question: 'Quem faz o trabalho?',
    answer: 'Eu, Carlos Rafael, desenvolvedor full stack. Você fala direto comigo do começo ao fim. Quando o projeto pede design, conteúdo ou mídia mais dedicados, aciono parceiros especializados — sempre com você sabendo.'
  }
];

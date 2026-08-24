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
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  highlight: string;
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

export const COMPANY_METRICS = [
  { value: '+60', label: 'Projetos Entregues', desc: 'Sistemas e produtos digitais em produção' },
  { value: '99.98%', label: 'Disponibilidade', desc: 'Infraestruturas resilientes e tolerantes a falhas' },
  { value: '100%', label: 'Código do Cliente', desc: 'Propriedade intelectual integralmente transferida' },
  { value: '90 dias', label: 'Garantia Contratual', desc: 'Suporte pós-lançamento e sustentação técnica' },
];

export const TECH_STACKS = [
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Linguagem' },
  { name: 'Node.js & NestJS', category: 'Backend' },
  { name: 'Python & FastAPI', category: 'IA & Dados' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'PostgreSQL', category: 'Banco de Dados' },
  { name: 'AWS & GCP', category: 'Cloud' },
  { name: 'Docker & Kubernetes', category: 'DevOps' },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Design Sprint & Descoberta',
    subtitle: 'Alinhamento e blueprint',
    description: 'Mapeamento de requisitos, arquitetura técnica e protótipo navegável validado.',
    deliverables: ['Documento de Arquitetura', 'Protótipo Figma', 'Backlog Priorizado'],
    duration: 'Semana 1-2'
  },
  {
    step: '02',
    title: 'Desenvolvimento em Sprints',
    subtitle: 'Entregas quinzenais contínuas',
    description: 'Construção modular com branches rastreáveis e ambiente de staging ao vivo.',
    deliverables: ['Staging Funcional', 'Changelog Semanal', 'Código Versionado'],
    duration: 'Sprints Ágeis'
  },
  {
    step: '03',
    title: 'QA, Testes & Homologação',
    subtitle: 'Só termina quando testa',
    description: 'Validação de performance, testes automatizados e homologação rigorosa.',
    deliverables: ['Relatório de Carga', 'Auditoria de Segurança', 'Plano de Deploy'],
    duration: 'Pré-Deploy'
  }
];

export const NAV_LINKS: NavItem[] = [
  { label: 'Fábrica de Soluções', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Inteligência Artificial', href: '#ia' },
  { label: 'Cases', href: '#cases' },
  { label: 'Estimador', href: '#estimador', badge: 'Simular' },
  { label: 'Depoimentos', href: '#depoimentos' },
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
    title: 'Time Comercial & Discovery',
    desc: 'Entende a fundo o seu negócio antes de qualquer linha de código ser escrita.',
    icon: 'Users'
  },
  {
    step: '02',
    title: 'Product Owners',
    desc: 'Traduz visão de negócio em backlog priorizado e decisões de escopo ágeis.',
    icon: 'Compass'
  },
  {
    step: '03',
    title: 'UX/UI Designers',
    desc: 'Desenha jornadas e interfaces validadas com usuários reais antes do desenvolvimento.',
    icon: 'Palette'
  },
  {
    step: '04',
    title: 'Arquitetos de Software',
    desc: 'Projeta a arquitetura técnica, escalável e segura, sob medida para o seu produto.',
    icon: 'Boxes'
  },
  {
    step: '05',
    title: 'Engenheiros de Desenvolvimento',
    desc: 'Constrói o sistema em sprints, com código limpo e 100% documentado.',
    icon: 'Code2'
  },
  {
    step: '06',
    title: 'Quality Assurance',
    desc: 'Testa cada entrega à exaustão até garantir zero bugs críticos em produção.',
    icon: 'Bug'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Diga adeus a projetos atrasados',
    subtitle: 'Soluções completas do conceito à entrega final',
    desc: 'A Shinra proporciona a solução de ponta a ponta para o seu software ou app. Nossa equipe sênior atua desde o Design Sprint e validação arquitetural até o desenvolvimento e deploy em produção.',
    icon: 'Clock'
  },
  {
    title: 'Fidelidade do início ao fim',
    subtitle: 'O que foi concebido é o que vai para o ar',
    desc: 'Nosso método ágil estruturado garante que o produto final esteja 100% alinhado aos objetivos de negócio e ao conceito validado nas etapas iniciais, sem desvios de escopo.',
    icon: 'Target'
  },
  {
    title: 'Só termina quando testa',
    subtitle: 'Garantia rigorosa de qualidade & QA contínuo',
    desc: 'Possuímos rotinas de testes automatizados, testes de carga e validação cruzada focada em garantir zero vulnerabilidades e estabilidade operacional inegociável.',
    icon: 'ShieldCheck'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-house',
    title: 'Fábrica de Software Sob Medida',
    tagline: 'Sistemas corporativos e plataformas web projetadas para a sua regra de negócio.',
    description: 'Desenvolvimento ágil de sistemas complexos, ERPs internos, painéis analíticos e portais corporativos com arquiteturas limpas e escaláveis.',
    iconName: 'LayoutGrid',
    badge: 'Core',
    features: [
      'Modelagem de requisitos e arquitetura orientada a microsserviços',
      'Painéis em tempo real com permissões granulares de acesso (RBAC)',
      'Integrações com ERPs, CRMs e gateways financeiros',
      'Código limpo, documentado e 100% de propriedade do cliente'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker']
  },
  {
    id: 'mobile-apps',
    title: 'Aplicativos Móveis (iOS & Android)',
    tagline: 'Experiências intuitivas e performáticas para os mais variados cenários.',
    description: 'Criamos aplicativos nativos e híbridos fluidos, com suporte offline-first, biometria nativa, push notifications e publicação assistida nas lojas.',
    iconName: 'Smartphone',
    badge: 'Mobile',
    features: [
      'Experiência de uso intuitiva com interface moderna e responsiva',
      'Arquitetura offline-first com sincronização assíncrona',
      'Integração nativa com câmera, geolocalização e biometria',
      'Homologação completa na Apple App Store e Google Play'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Tailwind', 'REST/GraphQL']
  },
  {
    id: 'ai-solutions',
    title: 'Inteligência Artificial & Machine Learning',
    tagline: 'Algoritmos treinados para classificar, automatizar e prever insights.',
    description: 'Transforme dados e rotinas repetitivas em inteligência competitiva com agentes de IA, RAG privativo e modelos preditivos sob medida.',
    iconName: 'Bot',
    badge: 'Inovação',
    features: [
      'Agentes autônomos de atendimento e triagem 24/7',
      'Detecção inteligente de fraudes e auditoria automatizada',
      'Processamento e extração de documentos via OCR + LLMs',
      'Base vetorial de conhecimento corporativo com segurança de dados'
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI/Claude', 'pgvector']
  },
  {
    id: 'design-sprint',
    title: 'Design Sprint & Descoberta Ágil',
    tagline: 'Conceitue, valide e tangibilize a sua ideia em pouco tempo.',
    description: 'Metodologia colaborativa e estruturada para transformar ideias abstratas em protótipos navegáveis testados com usuários reais antes de programar.',
    iconName: 'Sparkles',
    badge: 'Estratégia',
    features: [
      'Mapeamento detalhado da jornada do usuário e regras de negócio',
      'Wireframes e design system moderno no Figma',
      'Validação prévia de viabilidade técnica e financeira',
      'Backlog priorizado para início imediato do desenvolvimento'
    ],
    techStack: ['Figma', 'User Research', 'Design System', 'Prototipação']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing, DevOps & APIs',
    tagline: 'Infraestruturas resilientes e esteiras automatizadas de entrega contínua.',
    description: 'Projetamos arquiteturas em nuvem (AWS/GCP), esteiras de CI/CD automatizadas, microsserviços de baixa latência e observabilidade completa.',
    iconName: 'Cpu',
    badge: 'Performance',
    features: [
      'Deploy automatizado com zero downtime via CI/CD',
      'Orquestração de contêineres com Docker e Kubernetes',
      'Monitoramento 24/7 com alertas de anomalias',
      'Otimização de custos de servidores e infraestrutura em nuvem'
    ],
    techStack: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
  }
];

export const AI_SOLUTIONS = [
  {
    title: 'Detecção Inteligente de Fraudes',
    desc: 'Identifique anomalias e comportamentos suspeitos em transações e documentos antes que causem prejuízos.',
    badge: 'Machine Learning'
  },
  {
    title: 'Previsão de Churn & Retenção',
    desc: 'Saiba quais clientes têm propensão ao cancelamento e trace a melhor estratégia automatizada para reconquistá-los.',
    badge: 'Modelos Preditivos'
  },
  {
    title: 'Agentes Virtuais & Chatbots IA',
    desc: 'Uma IA treinada para transformar o atendimento aos seus clientes em uma experiência humana, precisa e contextual.',
    badge: 'LLMs & GenAI'
  },
  {
    title: 'Auditoria Automatizada de Processos',
    desc: 'Automatize a conferência e classificação de centenas de arquivos e relatórios diários em segundos com IA.',
    badge: 'Automação Inteligente'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'sebrae-platform',
    client: 'Sebrae Place',
    industry: 'Marketplace & Negócios',
    category: 'Software Web',
    title: 'Marketplace de Soluções com Curadoria e Pagamentos Integrados',
    description: 'Desenvolvimento de uma plataforma completa que conecta empreendedores a provedores de serviços homologados, com divisão de pagamentos (split) e painel de controle analítico.',
    metrics: [
      { label: 'Usuários Ativos', value: '+45.000' },
      { label: 'Transações/Mês', value: 'R$ 3.2M' },
      { label: 'Disponibilidade', value: '99.98%' }
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'health-app',
    client: 'Dental Uni & Saúde',
    industry: 'Saúde & Convênios',
    category: 'Aplicativo Mobile',
    title: 'Aplicativo de Busca de Especialistas, Agendamento e Carteirinha Digital',
    description: 'Super aplicativo para beneficiários encontrarem especialistas próximos via geolocalização com rotas, solicitação de guias e atendimento humanizado em tempo real.',
    metrics: [
      { label: 'Downloads', value: '+120.000' },
      { label: 'Avaliação Lojas', value: '4.8 / 5.0' },
      { label: 'Tempo de Busca', value: '-60%' }
    ],
    tags: ['React Native', 'TypeScript', 'PostGIS', 'Expo'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'logistics-ai',
    client: 'LogisFleet Brasil',
    industry: 'Logística & Frotas',
    category: 'IA & Telemetria',
    title: 'Sistema de Roteirização Preditiva e Rastreamento em Tempo Real',
    description: 'Painel operacional para centrais logísticas com algoritmo inteligente de rotas que reduz o consumo de combustível e avisa clientes sobre a previsão exata de entrega.',
    metrics: [
      { label: 'Economia Diesel', value: '17.8%' },
      { label: 'Entregas Pontuais', value: '98.5%' },
      { label: 'Veículos Monitorados', value: '+3.500' }
    ],
    tags: ['Go', 'FastAPI', 'WebSockets', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Allan Marcelo Costa',
    role: 'Diretor de Operações e Inovação',
    company: 'Sebrae / Ecossistema Tech',
    quote: 'A Shinra é um parceiro confiável e comprometido não apenas com as entregas pactuadas, mas com o resultado efetivo decorrente do uso dessas entregas. Profissionalismo, competência técnica e empatia são marcas registradas deste relacionamento.',
    highlight: 'Parceiro estratégico e confiável'
  },
  {
    name: 'Mariana Duarte',
    role: 'Head de Produto & Tecnologia',
    company: 'Nexus Finanças Corporativas',
    quote: 'Reduzimos nosso tempo de lançamento de novos módulos de 4 meses para apenas 5 semanas com a metodologia da Shinra. A arquitetura de microsserviços deles suportou um aumento de 10x na volumetria de transações sem qualquer lentidão.',
    highlight: 'Entregas 3x mais rápidas'
  },
  {
    name: 'Carlos Eduardo Nogueira',
    role: 'CTO & Co-fundador',
    company: 'Veloce Supply Chain',
    quote: 'A qualidade técnica do time é impecável. Desde a primeira reunião de arquitetura até o deploy com zero downtime, tivemos total visibilidade do projeto através do ambiente de staging.',
    highlight: 'Excelência técnica e transparência'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Comercial',
    question: 'O que diferencia uma Fábrica de Soluções de uma software house comum?',
    answer: 'Uma Fábrica de Soluções não se limita a fornecer mão de obra ou escrever linhas de código. Nós atuamos desde o entendimento profundo do seu desafio de negócio e Design Sprint até a arquitetura, desenvolvimento, testes rigorosos de QA e sustentação pós-lançamento, garantindo que o produto traga retorno real.'
  },
  {
    category: 'Técnico',
    question: 'A propriedade intelectual e o código-fonte pertencem à minha empresa?',
    answer: 'Sim, 100%. Todo o código-fonte, diagramas de arquitetura, documentações e credenciais de nuvem desenvolvidos durante o projeto pertencem exclusivamente à sua organização, sem nenhum lock-in ou dependência contratual obrigatória.'
  },
  {
    category: 'Metodologia',
    question: 'Como acompanho o andamento das entregas do meu sistema?',
    answer: 'Trabalhamos com metodologia ágil e sprints quinzenais. A cada sprint, realizamos uma sessão de demonstração com um ambiente de staging funcional para que você teste as novas funcionalidades em tempo real antes de irem para produção.'
  },
  {
    category: 'Segurança',
    question: 'Quais padrões de segurança e privacidade são aplicados nos projetos?',
    answer: 'Adotamos os padrões globais do OWASP Top 10, criptografia de ponta a ponta (TLS 1.3 e AES-256), conformidade estrita com a LGPD e rotinas de testes de carga e vulnerabilidades em esteiras automatizadas de CI/CD.'
  },
  {
    category: 'Comercial',
    question: 'Qual é o modelo de contratação e como funcionam os pagamentos?',
    answer: 'Trabalhamos com dois modelos flexíveis: 1) Escopo e Preço Fechado com marcos de entrega bem definidos (ideal para projetos com requisitos claros) e 2) Squad Dedicada Ágil (ideal para evolução contínua de produtos e roadmaps tecnológicos em constante expansão).'
  }
];

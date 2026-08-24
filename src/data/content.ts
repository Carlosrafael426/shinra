import type { CaseStudy, FAQItem, MethodologyStep, NavItem, ServiceItem } from '../types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Calculadora de Escopo', href: '#estimador', badge: 'Novo' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Cases de Sucesso', href: '#cases' },
  { label: 'FAQ', href: '#faq' },
];

export const COMPANY_METRICS = [
  { value: '+60', label: 'Sistemas Entregues', desc: 'Projetos de alta criticidade em produção' },
  { value: '99.99%', label: 'SLA de Disponibilidade', desc: 'Infraestruturas resilientes e tolerantes a falhas' },
  { value: '< 90ms', label: 'Latência Média de APIs', desc: 'Otimização extrema de queries e microsserviços' },
  { value: 'R$ 48M+', label: 'Volume Transacionado', desc: 'Processado mensalmente pelos sistemas desenvolvidos' },
];

export const TECH_STACKS = [
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Linguagem' },
  { name: 'Node.js & NestJS', category: 'Backend' },
  { name: 'Python & FastAPI', category: 'IA & Dados' },
  { name: 'Go (Golang)', category: 'High-Performance' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'PostgreSQL & Redis', category: 'Bancos de Dados' },
  { name: 'AWS & GCP Cloud', category: 'Infraestrutura' },
  { name: 'Docker & Kubernetes', category: 'DevOps' },
  { name: 'OpenAI / Claude LLMs', category: 'IA Aplicada' },
  { name: 'GraphQL & gRPC', category: 'Comunicação' },
  { name: 'Terraform', category: 'IaC' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-saas',
    title: 'SaaS & Plataformas Web de Alta Escala',
    tagline: 'Sistemas corporativos robustos, seguros e prontos para hiper-crescimento.',
    description: 'Arquitetamos plataformas web modernas e SaaS multi-tenant desde o design system até a infraestrutura cloud elástica com alta capacidade concorrente.',
    iconName: 'LayoutGrid',
    badge: 'Flagship',
    features: [
      'Arquitetura Multi-tenant com isolamento seguro de dados',
      'Painéis analíticos em tempo real com WebSockets',
      'Integrações de Billing e Gateways de Pagamento (Stripe, Asaas, Pagar.me)',
      'Controles de acesso granulares (RBAC) e auditoria de logs'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Redis']
  },
  {
    id: 'ai-agents',
    title: 'Inteligência Artificial Aplicada & Agentes Autônomos',
    tagline: 'Automatize fluxos complexos e eleve a eficiência com IA generativa sob medida.',
    description: 'Integramos Modelos de Linguagem (LLMs), RAG (Retrieval-Augmented Generation) e agentes automatizados aos processos centrais da sua operação.',
    iconName: 'Bot',
    badge: 'Inovação',
    features: [
      'Bases de conhecimento privativas com Vector Search (pgvector / Pinecone)',
      'Agentes de atendimento e triagem técnica 24/7 com memória contextual',
      'Extração e estruturação automática de documentos complexos (OCR + IA)',
      'Proteção e privacidade total de dados corporativos (zero data leak)'
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Claude', 'Pinecone']
  },
  {
    id: 'mobile-apps',
    title: 'Aplicativos Mobile de Alto Desempenho',
    tagline: 'Experiências nativas fluidas para iOS e Android com performance impecável.',
    description: 'Desenvolvimento mobile ágil com suporte offline-first, animações a 60fps, geolocalização precisa e sincronização contínua com seu backend.',
    iconName: 'Smartphone',
    badge: 'Mobile',
    features: [
      'Compatibilidade multiplataforma nativa (iOS & Android)',
      'Arquitetura offline-first com sincronização assíncrona',
      'Push notifications segmentadas e biometria nativa',
      'Homologação completa nas lojas Apple App Store e Google Play'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Redux / Zustand', 'Native Modules']
  },
  {
    id: 'high-perf-apis',
    title: 'APIs de Alta Performance & Microsserviços',
    tagline: 'Backends ultra-rápidos projetados para suportar milhões de requisições.',
    description: 'Projetamos arquiteturas orientadas a eventos (Event-Driven), microsserviços desacoplados e mensageria distribuída com latência em milissegundos.',
    iconName: 'Cpu',
    badge: 'Performance',
    features: [
      'Comunicação síncrona e assíncrona via gRPC, REST e RabbitMQ / Kafka',
      'Otimização de queries e caching multicamadas com Redis',
      'Rate limiting inteligente, autenticação JWT/OAuth2 e proteção DDoS',
      'Documentação viva e interativa via Swagger / OpenAPI'
    ],
    techStack: ['Go', 'NestJS', 'Kafka', 'Redis', 'Docker', 'Kubernetes']
  },
  {
    id: 'legacy-modernization',
    title: 'Modernização de Sistemas & Migração Cloud',
    tagline: 'Transforme legados lentos em arquiteturas modernas sem parar a operação.',
    description: 'Estratégias cirúrgicas de refatoração (Strangler Fig Pattern), migração de banco de dados sem downtime e reestruturação para nuvem com custo previsível.',
    iconName: 'ServerCrash',
    badge: 'Enterprise',
    features: [
      'Migração zero-downtime com pipelines de replicação de dados',
      'Redução média de 40% em custos de servidores cloud',
      'Conteinerização completa e orquestração automatizada',
      'Cobertura de testes automatizados e esteira de CI/CD'
    ],
    techStack: ['AWS', 'GCP', 'Terraform', 'Docker', 'GitHub Actions', 'PostgreSQL']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-core',
    client: 'Nexus Capital',
    industry: 'Fintech & Crédito',
    title: 'Motor de Crédito e Liquidação em Tempo Real com Sub-second SLA',
    description: 'Desenvolvimento do núcleo transacional de crédito B2B, processando conciliação bancária automática com auditoria criptográfica e antifraude.',
    metrics: [
      { label: 'Tempo de Análise', value: 'De 48h para 12s' },
      { label: 'Volume Diário', value: 'R$ 2.4M+' },
      { label: 'Disponibilidade', value: '99.995%' }
    ],
    tags: ['Go', 'PostgreSQL', 'Redis', 'Kafka', 'AWS ECS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    architectureHighlight: 'Event-driven architecture processando 15.000 webhooks bancários/min sem perda de pacotes.'
  },
  {
    id: 'telemed-saas',
    client: 'OmniHealth Global',
    industry: 'HealthTech',
    title: 'Plataforma de Telemedicina com Prontuário Inteligente e Triagem IA',
    description: 'Sistema completo com chamadas WebRTC criptografadas ponta-a-ponta, transcrição médica automática e geração de relatórios clínicos com LLM.',
    metrics: [
      { label: 'Consultas Realizadas', value: '+180.000' },
      { label: 'Tempo Médio do Médico', value: '-35% em burocracia' },
      { label: 'Segurança', value: '100% HIPAA / LGPD' }
    ],
    tags: ['Next.js', 'WebRTC', 'Python IA', 'FastAPI', 'AWS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    architectureHighlight: 'Áudio streaming processado em tempo real com whisper e sumarização médica assistida.'
  },
  {
    id: 'logistics-tracker',
    client: 'Veloce Supply Chain',
    industry: 'Logística & Frota',
    title: 'Super App de Roteirização e Telemetria em Tempo Real para 4.000 Veículos',
    description: 'Aplicativo mobile para motoristas e painel web para despachantes com predição de rota otimizada e comunicação offline resiliente.',
    metrics: [
      { label: 'Economia de Combustível', value: '18.4%' },
      { label: 'Entregas no Prazo', value: '98.2%' },
      { label: 'Motoristas Ativos', value: '4.200+' }
    ],
    tags: ['React Native', 'NestJS', 'PostGIS', 'WebSockets', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    architectureHighlight: 'Motor geoespacial com PostGIS recalculando rotas a cada 5 segundos para milhares de nós.'
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Diagnóstico & Arquitetura de Software',
    subtitle: 'Alinhamento estratégico e blueprint técnico',
    description: 'Mapeamos requisitos funcionais e não-funcionais, modelagem do banco de dados, escolhemos a stack precisa e definimos o diagrama de arquitetura antes de qualquer linha de código.',
    deliverables: ['Documento de Arquitetura (ADR)', 'Modelo Entidade-Relacionamento', 'Backlog Priorizado'],
    duration: 'Semana 1'
  },
  {
    step: '02',
    title: 'Prototipação & Design System',
    subtitle: 'Validação visual e fluxos de usuário',
    description: 'Criamos interfaces modernas no Figma com base em design systems escaláveis, testando usabilidade e jornada do usuário para garantir retenção e conversão.',
    deliverables: ['Protótipo Navegável Figma', 'Guia de Estilos & Tokens', 'Design System em Componentes'],
    duration: 'Semana 2'
  },
  {
    step: '03',
    title: 'Desenvolvimento em Sprints Ágeis',
    subtitle: 'Entregas contínuas a cada 7-14 dias',
    description: 'Construção modular com branches rastreáveis, testes unitários, code reviews rigorosos e ambiente de staging onde você testa cada feature em tempo real.',
    deliverables: ['Ambiente de Staging ao Vivo', 'Changelog Semanal', 'Código Fonte Versionado'],
    duration: 'Sprints Quinzenais'
  },
  {
    step: '04',
    title: 'DevSecOps, QA & Pentest',
    subtitle: 'Blindagem e testes de estresse',
    description: 'Executamos testes de carga, análise estática de vulnerabilidades (SAST/DAST), auditoria de segurança e validação cruzada entre múltiplos navegadores e dispositivos.',
    deliverables: ['Relatório de Carga & Estresse', 'Certificado de Auditoria de Segurança', 'Plano de Backup & Disaster Recovery'],
    duration: 'Pré-Deploy'
  },
  {
    step: '05',
    title: 'Deploy em Produção & Suporte Ativo',
    subtitle: 'Lançamento seguro com monitoramento 24/7',
    description: 'Publicação com zero downtime, configuração de alarmes em tempo real (Datadog/Grafana) e garantia contratual pós-lançamento para evolução contínua.',
    deliverables: ['Infraestrutura Cloud Provisionada', 'Dashboards de Telemetria', 'SLA de Suporte Dedicado'],
    duration: 'Go-Live Contínuo'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Comercial',
    question: 'Quanto tempo leva para desenvolver um sistema sob medida com a Shinra?',
    answer: 'O prazo varia conforme a complexidade: MVPs e plataformas essenciais costumam ser entregues entre 4 a 8 semanas. Sistemas enterprise mais complexos com múltiplos módulos e integrações de IA levam de 10 a 16 semanas. Trabalhamos com entregas quinzenais funcionais para você colocar o produto no ar o quanto antes.'
  },
  {
    category: 'Técnico',
    question: 'O código-fonte e a propriedade intelectual pertencem a quem?',
    answer: '100% sua. Ao término e quitação das etapas do projeto, todo o código-fonte, repositórios, documentação de arquitetura e credenciais de infraestrutura cloud são integralmente transferidos para a sua organização, sem lock-in ou taxas ocultas.'
  },
  {
    category: 'Comercial',
    question: 'Como funciona o modelo de contratação e pagamento?',
    answer: 'Oferecemos dois modelos flexíveis: 1) Preço e Escopo Fechado (ideal para projetos com escopo bem delimitado e prazo fixo, com pagamentos atrelados a marcos de entrega) ou 2) Squad Dedicada / Time-and-Materials (ideal para empresas que desejam um time sênior acelerando continuamente seu roadmap tecnológico).'
  },
  {
    category: 'Segurança',
    question: 'Quais padrões de segurança e conformidade a Shinra adota?',
    answer: 'Aplicamos as melhores práticas do OWASP Top 10, criptografia TLS 1.3 em trânsito e AES-256 em repouso, arquitetura de Zero Trust, conformidade estrita com a LGPD e testes contínuos de segurança automatizados em esteiras de CI/CD.'
  },
  {
    category: 'Metodologia',
    question: 'E se precisarmos de suporte, manutenção ou novas features após a entrega?',
    answer: 'Todos os nossos projetos incluem garantia contratual de 90 dias para correções de bugs sem qualquer custo adicional. Além disso, disponibilizamos planos de sustentação e evolução contínua (SLA de atendimento crítico em até 1 hora, backups automáticos e melhorias de performance).'
  },
  {
    category: 'Técnico',
    question: 'A Shinra desenvolve integrações com sistemas legados ou ERPs existentes?',
    answer: 'Sim! Possuímos vasta experiência na integração de sistemas legados, ERPs (SAP, Totvs, Omie, Bling, etc.), gateways de pagamento, CRMs (Salesforce, HubSpot) e plataformas legadas através de camadas intermediárias de APIs modernas e pipelines de sincronização segura.'
  }
];

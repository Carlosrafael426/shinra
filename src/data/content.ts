import type { LucideIcon } from 'lucide-react';
import {
  Gauge,
  TrendingDown,
  Link2,
  Boxes,
  Clock,
  Coins,
  ShoppingCart,
  BarChart3,
  ArrowUpRight,
  Layers,
  Cpu,
  Bot,
  LayoutGrid,
  Zap,
  Scale,
  SlidersHorizontal,
  Rocket,
  Activity,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface IconItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface SolutionItem extends IconItem {
  id: string;
}

/* ---------------- NAV ---------------- */
export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

/* ---------------- HERO ---------------- */
export const HERO = {
  words: ['SEU NEGÓCIO.', 'REIMAGINADO', 'ATRAVÉS DA', 'TECNOLOGIA.'],
  highlightIndex: 1,
  lead:
    'Desenvolvemos sistemas, plataformas e experiências digitais projetadas para transformar ideias em resultados reais.',
  trioLabel: 'Tecnologia para impulsionar resultados',
  trio: [
    { icon: LayoutGrid, label: 'WEB', sub: 'Sistemas & Plataformas' },
    { icon: Layers, label: 'UX', sub: 'Experiências Digitais' },
    { icon: TrendingDown, label: 'GROWTH', sub: 'Tecnologia para Crescimento' },
  ] as { icon: LucideIcon; label: string; sub: string }[],
  coreLabels: ['AUTOMAÇÃO', 'DADOS', 'ESTRATÉGIA', 'PESSOAS', 'RESULTADOS'],
};

/* ---------------- DIGITAL CORE ---------------- */
export const DIGITAL_CORE = {
  kicker: 'Digital Core',
  desc: 'Conectamos todas as áreas do seu negócio através da tecnologia.',
  center: 'SEU NEGÓCIO',
  nodes: ['VENDAS', 'DADOS', 'MARKETING', 'PROCESSOS', 'AUTOMAÇÃO', 'CLIENTES'],
};

/* ---------------- ABOUT ---------------- */
export const ABOUT = {
  kicker: 'Quem faz',
  title: 'Um estúdio de desenvolvimento web, enxuto e direto.',
  text:
    'A Shinra reúne as pessoas certas para cada projeto — desenvolvimento, design e conteúdo — mantendo o time enxuto e o contato direto com quem escreve o código. Do primeiro contato ao suporte depois da entrega.',
  chips: ['Escopo e prazo por escrito', 'Código 100% do cliente', 'Entrega publicada e funcionando'],
};

/* ---------------- PROBLEMS ---------------- */
export const PROBLEMS: IconItem[] = [
  { title: 'Processos lentos', desc: 'Tarefas manuais consomem tempo e aumentam custos.', icon: Gauge },
  { title: 'Baixa conversão', desc: 'Seu site pode estar deixando oportunidades escapar.', icon: TrendingDown },
  { title: 'Sistemas desconectados', desc: 'Informações espalhadas dificultam decisões.', icon: Link2 },
  { title: 'Tecnologia limitada', desc: 'Ferramentas antigas podem impedir o crescimento.', icon: Boxes },
];

/* ---------------- SOLUTIONS ---------------- */
export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'websites',
    title: 'Websites & Landing Pages',
    desc: 'Sites modernos, rápidos e focados em conversão.',
    icon: LayoutGrid,
  },
  {
    id: 'sistemas',
    title: 'Sistemas Web',
    desc: 'Sistemas personalizados para automatizar operações e processos.',
    icon: Cpu,
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    desc: 'Dados da empresa transformados em informações fáceis de visualizar.',
    icon: BarChart3,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    desc: 'Experiências de compra modernas e escaláveis.',
    icon: ShoppingCart,
  },
  {
    id: 'integracoes',
    title: 'Integrações & APIs',
    desc: 'Conectamos ferramentas, sistemas e serviços.',
    icon: Link2,
  },
  {
    id: 'ia',
    title: 'Automação & IA',
    desc: 'Automatizamos tarefas e criamos soluções inteligentes.',
    icon: Bot,
  },
];

/* ---------------- IMPACT ---------------- */
export const IMPACTS: IconItem[] = [
  { title: 'Economize tempo', desc: 'Automatize tarefas repetitivas.', icon: Clock },
  { title: 'Reduza custos', desc: 'Diminua processos manuais e desperdícios.', icon: Coins },
  { title: 'Venda mais', desc: 'Crie experiências digitais focadas em conversão.', icon: ArrowUpRight },
  { title: 'Tome decisões melhores', desc: 'Tenha seus dados centralizados.', icon: Gauge },
  { title: 'Escale', desc: 'Construa uma estrutura preparada para crescer.', icon: Scale },
  { title: 'Tenha controle', desc: 'Tecnologia desenvolvida de acordo com sua operação.', icon: SlidersHorizontal },
];

/* ---------------- RESULTS (qualitativo, sem números) ---------------- */
export const RESULTS: IconItem[] = [
  { title: 'Performance', desc: 'Tecnologia rápida e eficiente.', icon: Rocket },
  { title: 'Eficiência', desc: 'Processos mais inteligentes.', icon: Zap },
  { title: 'Conversão', desc: 'Experiências focadas em resultados.', icon: ArrowUpRight },
  { title: 'Disponibilidade', desc: 'Soluções preparadas para operar continuamente.', icon: Activity },
];

/* ---------------- FINAL CTA ---------------- */
export const FINAL_CTA = {
  lines: ['E SE O PRÓXIMO GRANDE', 'SALTO DA SUA EMPRESA', 'COMEÇASSE AQUI?'],
  highlight: 'COMEÇASSE AQUI?',
  text:
    'Conte-nos sua ideia, problema ou objetivo. Nós encontramos uma forma de transformar isso em tecnologia.',
};

/* ---------------- FOOTER ---------------- */
export const FOOTER = {
  blurb: 'Construímos tecnologia que transforma negócios e impulsiona resultados.',
  big: ['IDEIAS SÃO APENAS', 'O COMEÇO.'],
  columns: [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '#inicio' },
        { label: 'Soluções', href: '#solucoes' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Contato', href: '#contato' },
      ],
    },
    {
      title: 'Soluções',
      links: [
        { label: 'Websites & Landing Pages', href: '#solucoes' },
        { label: 'Sistemas Web', href: '#solucoes' },
        { label: 'Dashboards', href: '#solucoes' },
        { label: 'E-commerce', href: '#solucoes' },
        { label: 'Integrações & APIs', href: '#solucoes' },
        { label: 'Automação & IA', href: '#solucoes' },
      ],
    },
  ],
  contact: {
    email: 'contato@exemplo.com',
    phone: '(00) 00000-0000',
    place: 'Atendimento remoto',
    note: 'Canais em definição — placeholders.',
  },
};

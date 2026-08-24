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
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
  architectureHighlight: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Comercial' | 'Técnico' | 'Metodologia' | 'Segurança';
}

export interface EstimatorState {
  projectType: string;
  scale: string;
  features: string[];
  timeline: string;
  aiIntegration: boolean;
  name: string;
  email: string;
  phone: string;
  description: string;
}

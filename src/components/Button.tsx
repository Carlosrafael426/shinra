import React from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary';

interface BaseProps {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}
type AsLink = BaseProps & { href: string; onClick?: never };
type AsButton = BaseProps & { onClick: () => void; href?: never };
type Props = AsLink | AsButton;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer';

const styles: Record<Variant, string> = {
  primary:
    'bg-brand-2 text-white shadow-[0_12px_30px_-12px_rgba(0,187,212,0.55)] hover:brightness-110 hover:-translate-y-0.5',
  secondary: 'bg-silver text-ink border border-line hover:brightness-95 dark:hover:brightness-125',
};

export const Button: React.FC<Props> = ({
  variant = 'primary',
  arrow = true,
  className = '',
  children,
  ...rest
}) => {
  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={(rest as AsButton).onClick} className={cls}>
      {inner}
    </button>
  );
};

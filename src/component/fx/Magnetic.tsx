import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Site button. Renders a router Link, an external anchor, or a <button>
 * depending on which of `to` / `href` is passed. Same props as before so
 * existing call sites keep working.
 */
type Variant = 'forge' | 'ghost';

interface MagneticButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function MagneticButton({
  children, to, href, variant = 'forge', type = 'button',
  disabled, onClick, className = '', ariaLabel,
}: MagneticButtonProps) {
  const cls = `btn ${variant === 'ghost' ? 'btn--secondary' : 'btn--primary'} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

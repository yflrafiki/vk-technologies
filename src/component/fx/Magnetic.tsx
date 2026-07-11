import {
  useRef,
  useEffect,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import { Link } from 'react-router-dom';
import { prefersReducedMotion } from '../../lib/motion';

/**
 * Magnetic interaction: the element leans toward the cursor with a
 * lerped (weighted) pull, scales up slightly, and emits a ripple on click.
 */
function useMagnetic(strength = 0.32) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;

    let raf = 0;
    let tx = 0, ty = 0;   // target
    let cx = 0, cy = 0;   // current
    let hovering = false;

    const lerp = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0) scale(${hovering ? 1.045 : 1})`;
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05 || hovering) {
        raf = requestAnimationFrame(lerp);
      } else {
        el.style.transform = '';
        raf = 0;
      }
    };

    const start = () => { if (!raf) raf = requestAnimationFrame(lerp); };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * strength;
      ty = (e.clientY - (r.top + r.height / 2)) * strength;
      hovering = true;
      start();
    };
    const onLeave = () => {
      tx = 0; ty = 0; hovering = false;
      start();
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}

function spawnRipple(e: ReactMouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const d = Math.max(r.width, r.height);
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.width = span.style.height = `${d}px`;
  span.style.left = `${e.clientX - r.left - d / 2}px`;
  span.style.top = `${e.clientY - r.top - d / 2}px`;
  el.appendChild(span);
  span.addEventListener('animationend', () => span.remove());
}

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
  const ref = useMagnetic();
  const cls = `btn btn--${variant} ${className}`.trim();

  const handleClick = (e: ReactMouseEvent<HTMLElement>) => {
    spawnRipple(e);
    onClick?.();
  };

  if (to) {
    return (
      <Link
        to={to}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cls}
        onClick={handleClick}
        aria-label={ariaLabel}
        role="button"
      >
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cls}
        onClick={handleClick}
        aria-label={ariaLabel}
        role="button"
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cls}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

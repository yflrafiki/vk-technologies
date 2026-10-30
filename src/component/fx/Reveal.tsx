import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';
import { gsap, prefersReducedMotion } from '../../lib/motion';

type RevealKind = 'rise' | 'mask' | 'chars';

interface RevealProps {
  children: ReactNode;
  /** kept for call-site compatibility; every kind now uses the same fade */
  kind?: RevealKind;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
  as?: 'div' | 'section' | 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'ul' | 'ol' | 'dl';
  /** stagger children instead of animating the wrapper (for lists) */
  stagger?: boolean;
}

/**
 * Scroll-triggered entrance: a short 12px fade-up, once, at 90% viewport
 * entry. Skipped entirely under reduced motion.
 */
export default function Reveal({
  children, delay = 0, className = '', style, id, as = 'div', stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const scrollTrigger = { trigger: el, start: 'top 90%', once: true };
      const from = { y: 12, opacity: 0 };
      const to = { y: 0, opacity: 1, duration: 0.35, delay, ease: 'power2.out', scrollTrigger };

      if (stagger) {
        gsap.set(el, { opacity: 1 });
        gsap.fromTo(el.children, from, { ...to, stagger: 0.04 });
      } else {
        gsap.fromTo(el, from, to);
      }
    }, el);

    return () => ctx.revert();
  }, [delay, stagger]);

  const Tag = as;
  return (
    <Tag
      // @ts-expect-error dynamic tag ref
      ref={ref}
      id={id}
      className={`gs-reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}

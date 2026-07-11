import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';
import { gsap, prefersReducedMotion } from '../../lib/motion';

type RevealKind = 'rise' | 'mask' | 'chars';

interface RevealProps {
  children: ReactNode;
  kind?: RevealKind;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
  as?: 'div' | 'section' | 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** stagger children instead of animating the wrapper (for grids) */
  stagger?: boolean;
}

/**
 * Scroll-triggered entrance. Three kinds:
 *  - rise:  translate up + fade (default, blocks of content)
 *  - mask:  clip-path wipe + scale + blur-to-sharp (images)
 *  - chars: per-word rise for display headlines
 * Animates once, on 85% viewport entry, expo-out.
 */
export default function Reveal({
  children, kind = 'rise', delay = 0, className = '', style, id, as = 'div', stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const trigger = {
        trigger: el,
        start: 'top 85%',
        once: true,
      };

      if (kind === 'mask') {
        gsap.fromTo(el,
          { clipPath: 'inset(0 0 100% 0)', opacity: 1 },
          { clipPath: 'inset(0 0 0% 0)', duration: 1.1, delay, ease: 'expo.out', scrollTrigger: trigger },
        );
        const img = el.querySelector('img, video');
        if (img) {
          gsap.fromTo(img,
            { scale: 1.25, filter: 'blur(14px)' },
            {
              scale: 1, filter: 'blur(0px)', duration: 1.4, delay, ease: 'expo.out', scrollTrigger: trigger,
              onComplete: () => gsap.set(img, { clearProps: 'filter,scale' }),
            },
          );
        }
      } else if (kind === 'chars') {
        // split into words (word-level keeps layout stable + screen-reader safe via aria)
        const text = el.textContent ?? '';
        el.setAttribute('aria-label', text);
        el.innerHTML = text
          .split(/\s+/)
          .filter(Boolean)
          .map(w => `<span aria-hidden="true" style="display:inline-block;overflow:hidden;vertical-align:bottom;"><span style="display:inline-block;">${w}</span></span>`)
          .join(' ');
        gsap.set(el, { opacity: 1 });
        gsap.from(el.querySelectorAll(':scope > span > span'), {
          yPercent: 110,
          duration: 1,
          delay,
          ease: 'expo.out',
          stagger: 0.06,
          scrollTrigger: trigger,
        });
      } else if (stagger) {
        gsap.set(el, { opacity: 1 });
        gsap.from(el.children, {
          y: 44,
          opacity: 0,
          duration: 1,
          delay,
          ease: 'expo.out',
          stagger: 0.09,
          scrollTrigger: trigger,
        });
      } else {
        gsap.fromTo(el,
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay, ease: 'expo.out', scrollTrigger: trigger },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [kind, delay, stagger]);

  const Tag = as;
  return (
    <Tag
      // @ts-expect-error dynamic tag ref
      ref={ref}
      id={id}
      className={`gs-reveal ${kind === 'mask' ? 'img-reveal' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}

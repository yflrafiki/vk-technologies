import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';
import { prefersReducedMotion } from '../../lib/motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** max tilt in degrees */
  max?: number;
}

/**
 * 3D tilt card: lifts, rotates toward the cursor, and casts a shadow
 * that shifts opposite the tilt so the light source stays coherent.
 * All values go through CSS custom properties consumed by .tilt-card.
 */
export default function TiltCard({ children, className = '', style, max = 5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;   // 0..1
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty('--px', px.toFixed(3));
        el.style.setProperty('--py', py.toFixed(3));
        el.style.setProperty('--ry', `${((px - 0.5) * 2 * max).toFixed(2)}deg`);
        el.style.setProperty('--rx', `${((0.5 - py) * 2 * max).toFixed(2)}deg`);
        el.style.setProperty('--shadow-x', `${((0.5 - px) * 26).toFixed(1)}px`);
        el.style.setProperty('--shadow-y', `${(24 + (0.5 - py) * 18).toFixed(1)}px`);
        el.style.setProperty('--lift', '-8px');
      });
    };
    const onEnter = () => {
      el.classList.add('is-hovered');
      el.style.transition = 'box-shadow 0.4s ease';
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.classList.remove('is-hovered');
      el.style.transition = 'transform 0.7s cubic-bezier(0.19,1,0.22,1), box-shadow 0.4s ease';
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--lift', '0px');
      el.style.setProperty('--shadow-x', '0px');
      el.style.setProperty('--shadow-y', '24px');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <div className="tilt-wrap">
      <div ref={ref} className={`glass tilt-card ${className}`.trim()} style={style}>
        {children}
      </div>
    </div>
  );
}

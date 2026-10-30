import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger, prefersReducedMotion } from './motion';

/**
 * Native scrolling (the Lenis wheel-smoothing was removed in the redesign).
 * Still flags reduced motion for CSS, resets scroll on route change and
 * rebuilds ScrollTriggers for the new page.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) document.documentElement.classList.add('no-motion');
  }, []);

  // route change: jump to top, rebuild triggers for the new page
  useEffect(() => {
    window.scrollTo(0, 0);
    // wait a frame so the new page has painted
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return <>{children}</>;
}

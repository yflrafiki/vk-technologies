import { type ReactNode, type CSSProperties } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** kept for call-site compatibility; no longer used */
  max?: number;
}

/**
 * Plain block wrapper. The 3D tilt / lift effect was removed in the
 * redesign; pages no longer use this, but the export stays for safety.
 */
export default function TiltCard({ children, className = '', style }: TiltCardProps) {
  return <div className={className} style={style}>{children}</div>;
}

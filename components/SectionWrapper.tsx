
import React, { useEffect } from 'react';
import { useAnimationObserver } from '../hooks/useScrollObserver';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children }) => {
  useAnimationObserver();

  return (
    <section id={id} className="py-24 lg:py-36 border-b border-white/5 relative">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        {/* Technical Swiss Divider Heading */}
        <div className="text-left mb-16 border-l-4 border-[var(--primary)] pl-6 observe-me">
          <span className="font-technical text-[10px] tracking-widest text-[var(--primary)] mb-2 block">// SYS-MODULE: {id.toUpperCase()}</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold uppercase tracking-tighter mb-3" style={{ color: 'var(--text-main)' }}>
            {title}
          </h2>
          <p className="text-[10px] font-technical font-semibold text-[var(--text-muted)] tracking-wider uppercase mt-1">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

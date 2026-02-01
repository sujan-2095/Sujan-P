
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
    <section id={id} className="py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#E2E8CE] relative inline-block observe-me">
            {title}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#FF7F11] rounded-full"></span>
          </h2>
          <p className="mt-4 text-sm font-semibold text-[#FF7F11] uppercase tracking-widest observe-me" style={{ transitionDelay: '100ms' }}>{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground';
import MobileStickyCTA from './components/MobileStickyCTA';
import Waves from './components/Waves';
import TargetCursor from './components/TargetCursor';

const App: React.FC = () => {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          lenis.scrollTo(anchor.hash, { offset: -80 });
        }
      }
    };

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="overflow-x-hidden relative animate-fade-in" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-main)' }}>
      <TargetCursor 
        targetSelector="a, button, .cursor-target, .btn-primary, .btn-outline, input, textarea"
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      
      {/* Blurred Floating Gradient Orbs Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] floating-orb orb-1"></div>
        <div className="absolute top-[35%] right-[10%] floating-orb orb-2"></div>
        <div className="absolute top-[65%] left-[8%] floating-orb orb-1"></div>
        <div className="absolute top-[85%] right-[12%] floating-orb orb-2"></div>
      </div>

      <Waves
        lineColor="#0f766e"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        style={{ position: 'fixed', zIndex: 0, opacity: 0.3 }}
      />

      <ParticlesBackground />

      <Header />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <MobileStickyCTA />
    </div>
  );
};

export default App;

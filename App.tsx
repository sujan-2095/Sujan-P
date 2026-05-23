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

  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return; // Disable on mobile devices for smooth touch scroll
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;

        // Calculate distance moved
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Calculate velocity (pixels per millisecond, scaled up for visibility)
        const velocity = deltaTime > 0 ? Math.min(distance / deltaTime * 10, 100) : 0;

        // Calculate angle (in degrees) - direction of movement
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        // Update CSS variables
        document.documentElement.style.setProperty('--x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--y', `${e.clientY}px`);
        document.documentElement.style.setProperty('--velocity', `${velocity}`);
        document.documentElement.style.setProperty('--angle', `${angle}deg`);

        // Store current position and time for next calculation
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = currentTime;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="overflow-x-hidden relative animate-fade-in" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-main)' }}>
      
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

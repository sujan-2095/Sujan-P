import React, { useEffect } from 'react';
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

const App: React.FC = () => {
  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
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
    <div className="overflow-x-hidden relative" style={{ backgroundColor: 'var(--bg-body)', color: 'var(--text-main)' }}>
      <div className="animated-bg"></div>
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

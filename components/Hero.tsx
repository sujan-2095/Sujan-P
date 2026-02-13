import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useAnimationObserver } from '../hooks/useScrollObserver';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import CodeIcon from './icons/CodeIcon';
import DownloadIcon from './icons/DownloadIcon';

const Hero: React.FC = () => {
  useAnimationObserver();
  const typedText = useTypewriter([
    'Undergraduate IT Student',
    'Full-Stack Developer',
    'Aspiring App Developer'
  ], 100, 2000);

  return (
    <section id="home" className="min-h-screen flex items-center pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
      {/* Radial Gradient Background Accents */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 15% 50%, rgba(249,115,22,0.08) 0%, transparent 25%),
            radial-gradient(circle at 85% 30%, rgba(59,130,246,0.05) 0%, transparent 25%)
          `
        }}
      ></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1
              className="font-extrabold leading-tight mb-4 observe-me"
              style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                color: 'var(--text-main)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              Hi, I'm <span className="text-gradient">Sujan P</span>
            </h1>
            <h2
              className="text-xl md:text-2xl font-medium mb-6 observe-me"
              style={{ color: 'var(--text-muted)', transitionDelay: '200ms' }}
            >
              <span id="typed-text" className="border-r-2 pr-1 animate-blink" style={{ borderColor: 'var(--primary)' }}>
                {typedText}
              </span>
            </h2>
            <p
              className="max-w-2xl mx-auto lg:mx-0 mb-8 observe-me text-justify"
              style={{
                color: 'var(--text-main)',
                opacity: 0.8,
                transitionDelay: '400ms',
                fontSize: '1.125rem',
                lineHeight: '1.8'
              }}
            >
              I am an undergraduate Information Technology student with hands-on experience in building web and AI-based applications. I enjoy turning ideas into working systems by combining programming fundamentals, modern frameworks, and AI tools to create purposeful and practical solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 observe-me" style={{ transitionDelay: '600ms' }}>
              <a href="#projects" className="btn-primary flex items-center gap-2">
                <CodeIcon className="w-5 h-5" /> View Projects
              </a>
              <a href="mailto:Sujanpalanisamy20@gmail.com" className="btn-outline flex items-center gap-2">
                <MailIcon className="w-5 h-5" /> Contact Me
              </a>
              <a
                href="/assets/Sujan Resume (2).pdf"
                className="btn-outline flex items-center gap-2"
                target="_blank"
                download
                style={{ borderColor: 'var(--border)' }}
              >
                <DownloadIcon className="w-5 h-5" /> Download Resume
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 pt-2 observe-me" style={{ transitionDelay: '800ms' }}>
              {[
                { icon: <GithubIcon className="w-6 h-6" />, href: 'https://github.com/sujan-2095' },
                { icon: <LinkedinIcon className="w-6 h-6" />, href: 'https://www.linkedin.com/in/sujan2095' },
                { icon: <MailIcon className="w-6 h-6" />, href: 'mailto:Sujanpalanisamy20@gmail.com' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg hover-lift"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {React.cloneElement(social.icon as React.ReactElement, { className: "w-5 h-5 stroke-[1.5]" })}
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center observe-me" style={{ transitionDelay: '1000ms' }}>
            {/* Parent Wrapper for Image and Glow */}
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] group">
              {/* Glow Layer (Unclipped) */}
              <div
                className="absolute -inset-5 blur-3xl opacity-30 animate-pulse"
                style={{
                  background: 'var(--primary)',
                  zIndex: -1,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  transform: 'rotate(-5deg)'
                }}
              ></div>

              {/* Image Frame (Clipped) */}
              <div
                className="relative w-full h-full unique-frame-static"
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Sujan P"
                  className="relative w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

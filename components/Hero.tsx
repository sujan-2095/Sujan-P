import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useAnimationObserver } from '../hooks/useScrollObserver';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import DownloadIcon from './icons/DownloadIcon';

const Hero: React.FC = () => {
  useAnimationObserver();
  const typedText = useTypewriter([
    'UNDERGRADUATE IT STUDENT',
    'FULL-STACK DEVELOPER',
    'ASPIRING APP DEVELOPER'
  ], 100, 2000);

  return (
    <section id="home" className="min-h-screen flex items-center pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
      {/* Matte Background Grid & Radial Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-colors duration-300"
        style={{
          background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)',
          opacity: 0.65
        }}
      ></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Swiss Editorial Header & Typography Block */}
          <div className="text-center lg:text-left lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-technical text-[10px] tracking-widest text-[var(--primary)] uppercase block mb-1 observe-me" style={{ transitionDelay: '200ms' }}>
                // SYSTEMS ARCHITECT INDEX: 001
              </span>
              
              <h1
                className="font-extrabold leading-[0.95] tracking-tighter mb-2 observe-me uppercase"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 7.5rem)',
                  color: 'var(--text-main)',
                  transitionDelay: '350ms'
                }}
              >
                SUJAN P
              </h1>
              
              <h2
                className="text-lg md:text-2xl font-black observe-me text-[var(--text-main)] uppercase tracking-tight flex flex-wrap justify-center lg:justify-start gap-x-2.5 gap-y-1"
                style={{ transitionDelay: '500ms' }}
              >
                <span>AI SYSTEMS ENGINEER</span>
                <span className="text-[var(--text-muted)] font-light">&</span>
                <span className="text-gradient">FULL-STACK DEVELOPER</span>
              </h2>

              <div className="h-6 flex items-center justify-center lg:justify-start observe-me" style={{ transitionDelay: '600ms' }}>
                <span id="typed-text" className="font-technical text-xs font-semibold text-[var(--primary)] tracking-widest border-r-2 pr-1.5 animate-blink" style={{ borderColor: 'var(--primary)' }}>
                  {typedText}
                </span>
              </div>
            </div>

            <p
              className="max-w-xl mx-auto lg:mx-0 observe-me text-justify text-sm md:text-base text-[var(--text-muted)] leading-relaxed"
              style={{
                transitionDelay: '800ms',
                maxWidth: '55ch'
              }}
            >
              Building intelligent platforms for education, healthcare, and public systems. I enjoy turning complex data pipelines and application architectures into lightweight, high-performance, real-world systems.
            </p>

            {/* Editorial Quote */}
            <div className="pt-4 border-l-2 border-[var(--primary)] pl-4 observe-me text-left max-w-xl mx-auto lg:mx-0" style={{ transitionDelay: '900ms' }}>
              <p className="font-editorial text-xl italic tracking-wide text-[var(--text-main)] font-light opacity-95">
                “Designed with structure. Engineered for impact.”
              </p>
            </div>

            {/* Brutalist Tactical CTA Controls */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 observe-me" style={{ transitionDelay: '1000ms' }}>
              <a
                href="/assets/Sujan_Resume.pdf"
                className="btn-primary flex items-center gap-2 text-xs font-bold py-3 px-6 rounded"
                target="_blank"
                download
              >
                <DownloadIcon className="w-3.5 h-3.5" /> RESUME.SYS
              </a>
              <a
                href="https://github.com/sujan-2095"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 text-xs font-bold py-3 px-6 rounded"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GITHUB.EXE
              </a>
              <a
                href="mailto:Sujanpalanisamy20@gmail.com"
                className="btn-outline flex items-center gap-2 text-xs font-bold py-3 px-6 rounded"
              >
                <MailIcon className="w-3.5 h-3.5" /> CONTACT.SH
              </a>
            </div>

            {/* Monospace Social Badges */}
            <div className="flex justify-center lg:justify-start gap-3 pt-4 observe-me" style={{ transitionDelay: '1100ms' }}>
              {[
                { icon: <GithubIcon className="w-4 h-4" />, href: 'https://github.com/sujan-2095', name: 'GITHUB' },
                { icon: <LinkedinIcon className="w-4 h-4" />, href: 'https://www.linkedin.com/in/sujan2095p', name: 'LINKEDIN' },
                { icon: <MailIcon className="w-4 h-4" />, href: 'mailto:Sujanpalanisamy20@gmail.com', name: 'EMAIL' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-technical text-[10px] font-semibold px-3 py-1.5 flex items-center gap-2 rounded border border-white/5 bg-white/[0.02] text-[var(--text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Structured Hybrid Layered Telemetry UI Panels */}
          <div className="relative flex justify-center items-center lg:col-span-5 h-[560px] observe-me animate-fade-in" style={{ transitionDelay: '1200ms' }}>
            
            {/* Visual Technical Grid Panel Canvas */}
            <div className="absolute inset-0 border border-white/5 rounded-lg [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_100%)] pointer-events-none z-0">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(15, 118, 110, 0.04) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            </div>

            <div className="relative w-full max-w-[460px] h-full flex items-center justify-center z-10">
              
              {/* Back Layer Panel: Code blocks & AI CNN Nodes */}
              <div 
                className="absolute top-6 left-[-25px] w-[270px] p-5 float-p-1 z-20 pointer-events-none"
                style={{ 
                  transform: 'rotate(-2deg)',
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '2px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  boxShadow: 'var(--card-shadow)',
                  backdropFilter: 'blur(14px)'
                }}
              >
                <div className="flex items-center gap-1.5 mb-2 border-b border-white/10 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span className="font-technical text-[8px] font-bold text-[var(--text-muted)] ml-auto">// TAMIL-OCR.PY</span>
                </div>
                <div className="font-mono text-[10px] text-[var(--text-muted)] space-y-0.5">
                  <p className="text-teal-400">import tensorflow as tf</p>
                  <p className="text-teal-400">import cv2 as cv</p>
                  <p className="text-white/40 mt-1.5"># CNN nodes architecture</p>
                  <p>model = tf.keras.models.Sequential([</p>
                  <p className="pl-3">tf.keras.layers.Conv2D(32, (3,3)),</p>
                  <p className="pl-3">tf.keras.layers.MaxPooling2D(2,2)</p>
                  <p>])</p>
                  <p className="text-teal-500/80 mt-1.5">// ACCURACY_VAL: 85.0%</p>
                </div>
              </div>

              {/* Floating Profile Portrait Card (z-index: 50) */}
              <div 
                className="absolute top-[calc(50%-160px)] left-[calc(50%-110px)] w-56 p-3.5 float-p-2 z-50 transition-all duration-300"
                style={{ 
                  transform: 'rotate(1deg)',
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '2px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  boxShadow: 'var(--card-shadow)',
                  backdropFilter: 'blur(14px)'
                }}
              >
                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                  <span className="font-technical text-[8px] font-bold tracking-wider text-[var(--text-muted)]">// SUJAN.PROFILE</span>
                </div>
                <div className="relative overflow-hidden rounded border border-white/5 aspect-[4/5] bg-slate-950">
                  <img 
                    src="/assets/profile.jpg" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    alt="Sujan Palanisamy Portrait" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Middle Layer Panel: AutoQuizzer Dashboard Telemetry */}
              <div 
                className="absolute top-40 right-[-30px] w-64 p-5 float-p-3 z-30 pointer-events-none"
                style={{ 
                  transform: 'rotate(-1deg)',
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '2px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  boxShadow: 'var(--card-shadow)',
                  backdropFilter: 'blur(14px)'
                }}
              >
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <span className="font-technical text-[8px] font-bold tracking-wider text-[var(--text-muted)]">// AUTOQUIZZER STATS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="font-technical text-[8px] font-bold text-[var(--text-muted)] block">GEN_MCQS_TOTAL</span>
                    <span className="text-xl font-black text-[var(--text-main)] font-technical tracking-tighter">1,200+ ITEMS</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-[var(--primary)] h-full w-[85%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center font-technical text-[8px] text-[var(--text-muted)] font-bold">
                    <span>ACCURACY: 98%</span>
                    <span>1.2s LATENCY</span>
                  </div>
                </div>
              </div>

              {/* Front Layer Panel: MedCard Smart Healthcare Card */}
              <div 
                className="absolute bottom-4 left-[-10px] w-80 p-5 float-p-1 z-40"
                style={{ 
                  transform: 'rotate(1deg)',
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '2px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  boxShadow: 'var(--card-shadow)',
                  backdropFilter: 'blur(14px)'
                }}
              >
                <div className="flex items-start justify-between mb-4 pb-2 border-b border-white/10">
                  <div>
                    <h4 className="font-extrabold text-xs text-[var(--text-main)] tracking-tight">SUJAN PALANISAMY</h4>
                    <p className="font-technical text-[8px] font-bold text-[var(--primary)] tracking-wider">// FRONTLINE MEDCARD</p>
                  </div>
                  <div className="p-1 rounded bg-[var(--primary-soft)] border border-[var(--primary)]/10 text-[var(--primary)]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1.007 1.007 0 011 1v2a1.007 1.007 0 01-1 1H5a1.007 1.007 0 01-1-1V9a1.007 1.007 0 011-1zm10 0h2a1.007 1.007 0 011 1v2a1.007 1.007 0 01-1 1h-2a1.007 1.007 0 01-1-1V9a1.007 1.007 0 011-1zM5 15h2a1.007 1.007 0 011 1v2a1.007 1.007 0 01-1 1H5a1.007 1.007 0 01-1-1v-2a1.007 1.007 0 011-1z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Mock QR graphic */}
                  <div className="w-10 h-10 border border-white/10 rounded p-1 shrink-0 bg-white flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="w-1.5 h-1.5 bg-slate-950 rounded-xs"></div>
                      <div className="w-1.5 h-1.5 bg-slate-950 rounded-xs"></div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="w-1.5 h-1.5 bg-slate-950 rounded-xs"></div>
                      <div className="w-2.5 h-2.5 bg-teal-800 rounded-xs"></div>
                    </div>
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="h-1.5 w-24 bg-white/5 rounded"></div>
                    <div className="h-1.5 w-16 bg-white/5 rounded"></div>
                    <div className="h-1.5 w-20 bg-[var(--primary-soft)] rounded"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

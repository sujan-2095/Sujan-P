
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
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#E2E8CE] leading-tight mb-4 observe-me">
              Hi, I'm <span className="text-[#FF7F11]">Sujan P</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-[#ACBFA4] mb-2 observe-me" style={{ transitionDelay: '200ms' }}>
              <span id="typed-text" className="border-r-2 border-[#FF7F11] pr-1 animate-blink">{typedText}</span>
            </h2>
            <p className="text-[#E2E8CE]/80 max-w-xl mx-auto lg:mx-0 mt-6 mb-8 observe-me" style={{ transitionDelay: '400ms' }}>
              I am an undergraduate Information Technology student with hands-on experience in building web and AI-based applications. I enjoy turning ideas into working systems by combining programming fundamentals, modern frameworks, and AI tools to create purposeful and practical solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 observe-me" style={{ transitionDelay: '600ms' }}>
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF7F11] text-[#262626] font-bold rounded-full shadow-lg hover:brightness-110 transform hover:-translate-y-1 transition-all duration-300 btn-shine-container">
                <CodeIcon className="w-5 h-5" /> View Projects
              </a>
              <a href="mailto:Sujanpalanisamy20@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ACBFA4]/10 text-[#E2E8CE] border border-[#ACBFA4]/20 font-semibold rounded-full shadow-lg hover:bg-[#ACBFA4]/20 transform hover:-translate-y-1 transition-all duration-300 btn-shine-container">
                <MailIcon className="w-5 h-5" /> Contact Me
              </a>
              <a href="/assets/Sujan Resume (2).pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-[#262626] text-[#E2E8CE] border border-[#ACBFA4]/20 font-semibold rounded-full shadow-lg hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 btn-shine-container" target="_blank" download>
                <DownloadIcon className="w-5 h-5" /> Download Resume
              </a>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 pt-2 observe-me" style={{ transitionDelay: '800ms' }}>
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
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ACBFA4]/5 text-[#ACBFA4] border border-[#ACBFA4]/20 hover:bg-[#FF7F11] hover:text-[#262626] hover:border-[#FF7F11] transition-all duration-300 shadow-2xl hover-spin"
                >
                  {React.cloneElement(social.icon as React.ReactElement, { className: "w-6 h-6 stroke-[1.5]" })}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center observe-me" style={{ transitionDelay: '1000ms' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F11] to-[#FF7F11]/40 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img src="/assets/profile.jpg" alt="Sujan P" className="relative w-full h-full object-cover rounded-full border-4 border-[#ACBFA4]/20 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

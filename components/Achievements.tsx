import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SectionWrapper from './SectionWrapper';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data';
import Icon from './icons/Icon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import XIcon from './icons/XIcon';
import SpotlightCard from './SpotlightCard';

interface ModalProps {
  url: string;
  onClose: () => void;
}

const CertificateModal: React.FC<ModalProps> = ({ url, onClose }) => {
  const isImage = /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(url);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`relative rounded-2xl border overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300 ${
          isImage
            ? 'w-fit max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] max-h-[85vh] min-w-[320px] md:min-w-[450px]'
            : 'w-full max-w-5xl h-full max-h-[85vh]'
        }`}
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)',
          borderColor: 'var(--glass-border)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="flex items-center justify-between p-5 border-b backdrop-blur-xl"
          style={{
            background: 'var(--glass-bg-soft)',
            borderColor: 'var(--glass-border)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></div>
            <h3 className="font-bold tracking-wide uppercase text-[10px] text-[var(--primary)]">Credential Viewer</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:text-[var(--primary)] hover:bg-[var(--primary-soft)] rounded-full transition-all duration-300"
            style={{ color: 'var(--text-muted)' }}
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-grow bg-[var(--bg)]/50 p-4 flex items-center justify-center overflow-hidden">
          {isImage ? (
            <img
              src={url}
              alt="Certificate"
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-md"
            />
          ) : (
            <iframe
              src={url}
              className="w-full h-full rounded-xl border-none shadow-inner"
              title="Certificate"
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

const getCredentialId = (title: string, index: number) => {
  const t = title.toUpperCase();
  if (t.includes('KALAM')) return '[AWARD-01]';
  if (t.includes('IEEE') || t.includes('AUTOQUIZZER')) return '[PUB-01]';
  if (t.includes('STANFORD') || t.includes('RESEARCH')) return '[RES-01]';
  if (t.includes('HUMAN-COMPUTER') || t.includes('HCI')) return '[CERT-01]';
  return `[CERT-0${index + 2}]`;
};

const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // ⭐ Redefined Featured Credentials
  const featuredCredentials = [
    {
      title: 'Dr. Kalam Young Achiever Award',
      issuer: 'World Youth Federation | 2025',
      description: 'Awarded for innovation, technical excellence, leadership, and academic achievements in engineering.',
      url: '/assets/certificates/WYF - Kalam Awards.jpg',
      icon: 'Trophy' as const,
      badge: 'Presented'
    },
    {
      title: 'IEEE International Conference Paper',
      issuer: 'ICECMSN 2025',
      description: 'Presented research on an AI-powered MCQ generation system for automated educational assessments.',
      url: '/assets/certificates/IEEE - Autoquizzer.jpg',
      icon: 'FileAlt' as const,
      badge: 'Speaker & Author'
    },
    {
      title: 'Research / Internship',
      issuer: 'Stanford University (Osman Labs) | 2025',
      description: 'Contributed to global development research focused on measuring water service quality in developing countries.',
      url: '/assets/certificates/Stanford - Osman labs.jpg',
      icon: 'Brain' as const,
      badge: 'Researcher'
    },
    {
      title: 'Human-Computer Interaction (Elite)',
      issuer: 'NPTEL | 2026',
      description: 'Completed advanced training in user-centered design, usability engineering, accessibility, and interactive system development with an Elite score of 91%.',
      url: '/assets/certificates/NPTEL - HCI.jpg',
      icon: 'GraduationCap' as const,
      badge: 'Score: 91% (Elite)'
    }
  ];

  // Filter out the duplicated Featured certifications from the Other Certifications grid
  const otherCertifications = CERTIFICATIONS.filter(cert => {
    const isStanford = cert.issuer.includes('Stanford');
    const isHCI = cert.title.includes('Human-Computer');
    return !isStanford && !isHCI;
  });

  return (
    <SectionWrapper id="achievements" title="CERTIFICATIONS" subtitle="ACADEMIC CONTRIBUTIONS, PUBLICATIONS & CREDENTIALS">
      {/* Featured Tier */}
      <div className="mb-16">
        <h3 className="font-technical text-[10px] font-bold tracking-widest text-[var(--text-muted)] mb-8 flex items-center gap-3 observe-me">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
          // HIGH-IMPACT ACADEMIC MILESTONES
        </h3>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {featuredCredentials.map((ach, index) => {
            const credentialId = getCredentialId(ach.title, index);
            
            return (
              <div key={index} className="h-full">
                <SpotlightCard 
                  className="glass-card p-8 flex flex-col h-full observe-me" 
                  style={{ transitionDelay: `${100 + index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--primary-soft)] border border-white/10 p-3 rounded text-[var(--primary)] shrink-0">
                        <Icon name={ach.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-technical text-[9px] font-bold text-[var(--primary)] mb-1 block">{credentialId}</span>
                        <h4 className="text-base font-extrabold uppercase font-primary mb-1 leading-snug" style={{ color: 'var(--text-main)' }}>{ach.title}</h4>
                        <p className="text-[10px] font-technical text-[var(--text-muted)] font-semibold mt-0.5">{ach.issuer}</p>
                      </div>
                    </div>
                    <span className="font-technical text-[8px] font-bold tracking-widest px-2.5 py-1 rounded bg-[var(--primary-soft)] border border-white/10 text-[var(--primary)] shrink-0 self-start ml-2">
                      {ach.badge}
                    </span>
                  </div>
                  <p className="leading-relaxed mb-6 flex-grow text-justify text-sm text-[var(--text-muted)]">{ach.description}</p>
                  <button
                    onClick={() => setSelectedCert(ach.url)}
                    className="mt-auto text-xs font-technical font-bold text-left text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors flex items-center gap-2 group/btn"
                  >
                    DIAGNOSE CREDENTIAL.SYS <ChevronRightIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* Other Credentials Tier */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-4 observe-me" style={{ transitionDelay: '300ms' }}>
          <h3 className="font-technical text-[10px] font-bold tracking-widest text-[var(--text-muted)] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/30"></span>
            // PROFESSIONAL CERTIFICATIONS INDEX
          </h3>
        </div>

        {/* Dynamic Certification Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {otherCertifications.map((cert, index) => {
            const credentialId = getCredentialId(cert.title, index + 3);
            
            return (
              <div key={cert.title + index} className="h-full">
                <SpotlightCard 
                  className="glass-card p-6 flex flex-col h-full justify-between observe-me" 
                  style={{ transitionDelay: `${100 + (index % 6) * 50}ms` }}
                >
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-technical text-[8px] font-bold text-[var(--primary)]">{credentialId}</span>
                      {'score' in cert && cert.score && (
                        <span className="font-technical text-[9px] font-bold tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/25 px-2 py-0.5 rounded-[var(--radius-pill)] shadow-sm shrink-0">
                          SCORE: {cert.score.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-extrabold uppercase font-primary mb-1.5 leading-snug text-[var(--text-main)]">{cert.title}</h4>
                    <p className="text-[10px] font-technical text-[var(--text-muted)] font-semibold mb-2">{cert.issuer}</p>
                    {'description' in cert && cert.description && (
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed text-justify">
                        {cert.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="w-1 h-1 rounded-full bg-[var(--primary)]/30"></span>
                    <button
                      onClick={() => setSelectedCert(cert.url)}
                      className="text-[10px] font-technical font-bold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors inline-flex items-center gap-1 group/btn"
                    >
                      VERIFY <ChevronRightIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      {selectedCert && (
        <CertificateModal
          url={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </SectionWrapper>
  );
};

export default Achievements;


import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data';
import Icon from './icons/Icon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import XIcon from './icons/XIcon';

interface ModalProps {
  url: string;
  onClose: () => void;
}

const CertificateModal: React.FC<ModalProps> = ({ url, onClose }) => (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-5xl h-full max-h-[85vh] bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5),0_0_20px_rgba(234,88,12,0.1)] animate-in zoom-in-95 duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-5 border-b border-[#ACBFA4]/5 bg-[#262626]/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></div>
          <h3 className="font-bold tracking-wide uppercase text-[10px]" style={{ color: 'var(--text-main)' }}>Certificate Viewer</h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:text-[#FF7F11] hover:bg-[#ACBFA4]/5 rounded-full transition-all duration-300"
          style={{ color: 'var(--text-muted)' }}
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-grow bg-[#262626] p-2">
        <iframe
          src={url}
          className="w-full h-full rounded-2xl border-none shadow-inner"
          title="Certificate"
        />
      </div>
    </div>
  </div>
);

const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <SectionWrapper id="achievements" title="Achievements & Certifications" subtitle="Recognitions & Benchmarks">
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#FF7F11] pl-4 observe-me" style={{ color: 'var(--text-main)' }}>Achievements & Recognitions</h3>
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {ACHIEVEMENTS.map((ach, index) => (
            <div key={index} className="h-full">
              <div className="bg-[#262626]/80 p-8 rounded-2xl border border-[#ACBFA4]/10 h-full flex flex-col transition-all duration-300 observe-me shadow-lg premium-card-hover" style={{ transitionDelay: `${100 + index * 100}ms` }}>
                <div className="flex items-start gap-5 mb-4">
                  <div className="bg-[#FF7F11]/10 p-4 rounded-xl text-[#FF7F11] hover-spin transition-transform">
                    <Icon name={ach.icon} className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--text-main)' }}>{ach.title}</h4>
                    <span className="text-xs bg-[#FF7F11]/10 text-[#FF7F11] px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-[#FF7F11]/20">{ach.issuer}</span>
                  </div>
                </div>
                <p className="leading-relaxed mb-6 flex-grow text-justify" style={{ color: 'var(--text-muted)' }}>{ach.description}</p>
                <button
                  onClick={() => setSelectedCert(ach.certificateUrl)}
                  className="mt-auto text-sm font-bold text-left text-[#FF7F11] hover:brightness-110 transition-colors flex items-center gap-2 group/btn"
                >
                  View Credential <ChevronRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#FF7F11] pl-4 observe-me" style={{ color: 'var(--text-main)', transitionDelay: '300ms' }}>Courses & Professional Certifications</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="h-full">
              <div className="bg-[#262626]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#ACBFA4]/10 h-full flex flex-col items-start text-left transition-all duration-300 observe-me premium-card-hover" style={{ transitionDelay: `${400 + index * 50}ms` }}>
                <h4 className="text-lg font-bold mb-2 leading-snug" style={{ color: 'var(--text-main)' }}>{cert.title}</h4>
                <p className="text-sm mb-6 flex-grow font-medium" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                <button
                  onClick={() => setSelectedCert(cert.url)}
                  className="mt-auto text-sm font-bold text-[#FF7F11] hover:brightness-110 transition-colors inline-flex items-center gap-1 group/btn"
                >
                  View Certificate <ChevronRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
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

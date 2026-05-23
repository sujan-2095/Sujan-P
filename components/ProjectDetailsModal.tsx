import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { DetailedProjectContent } from '../types';

interface ProjectDetailsModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    content?: DetailedProjectContent;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ title, isOpen, onClose, content }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !content) return null;

    return createPortal(
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/70 backdrop-blur-md transition-all duration-300"
            onClick={onClose}
        >
            <style>{`
                @keyframes modalEnter {
                    from { opacity: 0; transform: scale(0.96) translateY(15px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .modal-animate-enter {
                    animation: modalEnter 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .custom-scrollbar {
                    scroll-behavior: smooth;
                    -webkit-overflow-scrolling: touch;
                    overscroll-behavior: contain;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(15, 23, 42, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(15, 118, 110, 0.2);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: var(--primary);
                }
            `}</style>

            <div 
                className="modal-animate-enter relative w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden"
                style={{
                    background: 'var(--glass-bg)',
                    border: '2px solid var(--glass-border)',
                    borderRadius: 'var(--radius-global)',
                    boxShadow: 'var(--card-shadow-hover)',
                    backdropFilter: 'blur(20px)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Banner Background Effect */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--primary-soft)] via-transparent to-transparent pointer-events-none" />

                {/* Header */}
                <div className="relative flex justify-between items-start p-6 pb-5 border-b z-10" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                    <div className="pr-16">
                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[var(--text-main)] mb-1">
                            {title.split(' – ')[0]}
                        </h3>
                        <p className="text-[10px] font-technical font-bold uppercase tracking-wider text-[var(--primary)]">
                            {content.role.split(' • ')[0]} • CASE STUDY
                        </p>
                    </div>
                    
                    <button 
                        onClick={onClose}
                        className="absolute top-6 right-6 w-9 h-9 border-2 border-white/10 hover:border-[var(--primary)] rounded-[var(--radius-global)] hover:translate(-2px, -2px) hover:shadow-[4px_4px_0px_rgba(15,118,110,0.22)] bg-white/[0.02] text-[var(--text-muted)] hover:text-[var(--primary)] flex items-center justify-center transition-all duration-200"
                        aria-label="Close Case Study"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content Container (Scrollable) */}
                <div 
                    className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar z-10 font-primary" 
                    data-lenis-prevent
                >
                    
                    {/* Top Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div 
                            className="flex items-center gap-3 p-4 border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] shadow-[4px_4px_0px_rgba(15,118,110,0.1)] hover:translate(-2px, -2px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] transition-all duration-200 cursor-default"
                        >
                            <div className="p-2.5 rounded bg-[var(--primary-soft)] text-[var(--primary)]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--text-muted)]">// DURATION</p>
                                <p className="text-xs font-semibold text-[var(--text-main)] font-technical mt-0.5">{content.duration}</p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center gap-3 p-4 border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] shadow-[4px_4px_0px_rgba(15,118,110,0.1)] hover:translate(-2px, -2px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] transition-all duration-200 cursor-default"
                        >
                            <div className="p-2.5 rounded bg-[var(--primary-soft)] text-[var(--primary)]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--text-muted)]">// TEAM_SIZE</p>
                                <p className="text-xs font-semibold text-[var(--text-main)] font-technical mt-0.5">{content.teamSize}</p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center gap-3 p-4 border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] shadow-[4px_4px_0px_rgba(15,118,110,0.1)] hover:translate(-2px, -2px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] transition-all duration-200 cursor-default"
                        >
                            <div className="p-2.5 rounded bg-[var(--primary-soft)] text-[var(--primary)]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--text-muted)]">// KEY_ROLE</p>
                                <p className="text-xs font-semibold text-[var(--text-main)] font-technical mt-0.5 truncate max-w-[180px]">{content.role.split(' • ')[0]}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div>
                        <h4 className="text-[9px] font-technical uppercase tracking-widest font-extrabold text-[var(--text-muted)] mb-3">// SYSTEM TECH_STACK</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {content.techStack.map((tech) => (
                                <span 
                                    key={tech} 
                                    className="px-2.5 py-1 text-[10px] font-technical font-bold rounded-[var(--radius-pill)] text-[var(--text-muted)] border border-white/5 bg-white/[0.01] hover:border-[var(--primary)] hover:text-[var(--text-main)] hover:bg-[var(--primary-soft)] hover:translate(-1px, -1px) hover:shadow-[2px_2px_0px_rgba(15,118,110,0.15)] transition-all duration-150 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                            <span className="text-[var(--primary)]">//</span> PROJECT OVERVIEW
                        </h4>
                        <div className="border-l-4 border-[var(--primary)] bg-white/[0.01] p-5 rounded-r-[var(--radius-global)] border-y border-r border-white/5">
                            <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed text-justify whitespace-pre-line">
                                {content.overview}
                            </p>
                        </div>
                    </div>

                    {/* Achievement Banner if exists */}
                    {content.achievement && (
                        <div 
                            className="p-5 border border-[var(--primary)] bg-[var(--primary-soft)] rounded-[var(--radius-global)] shadow-[6px_6px_0px_rgba(15,118,110,0.18)] hover:translate(-2px, -2px) hover:shadow-[8px_8px_0px_rgba(15,118,110,0.22)] transition-all duration-200 flex gap-4 items-center"
                        >
                            <div className="p-2.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] flex-shrink-0 animate-pulse border border-[var(--primary)]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4l-1 9h-6l-1-9h4z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--primary)]">KEY MILESTONE & ACHIEVEMENT</p>
                                <p className="text-xs font-semibold text-[var(--text-main)] mt-1">{content.achievement}</p>
                            </div>
                        </div>
                    )}

                    {/* Leadership & Responsibilities */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                            <span className="text-[var(--primary)]">//</span> LEADERSHIP & RESPONSIBILITIES
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {content.leadership.map((item, idx) => (
                                <li 
                                    key={idx} 
                                    className="border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] p-4 flex items-start gap-3 text-xs text-[var(--text-muted)] hover:translate(-3px, -3px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] hover:border-white/10 transition-all duration-200 cursor-default"
                                >
                                    <svg className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Problem Statement & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Problem */}
                        <div 
                            className="p-5 border border-red-500/20 bg-red-500/[0.02] rounded-[var(--radius-global)] shadow-[6px_6px_0px_rgba(239,68,68,0.12)] hover:translate(-2px, -2px) hover:shadow-[8px_8px_0px_rgba(239,68,68,0.18)] transition-all duration-200 flex flex-col h-full space-y-3"
                        >
                            <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Problem Statement
                            </h4>
                            <ul className="space-y-2 flex-grow text-xs pl-1 mt-1">
                                {content.problemStatement.points.map((pt, idx) => (
                                    <li key={idx} className="text-[12px] text-slate-300 flex items-start gap-2 leading-relaxed">
                                        <span className="text-red-500 font-bold mt-0.5">•</span>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[12px] font-bold text-white border-t border-red-500/10 pt-3 mt-2 leading-relaxed">
                                {content.problemStatement.summary}
                            </p>
                        </div>

                        {/* Solution */}
                        <div 
                            className="p-5 border border-emerald-500/20 bg-emerald-500/[0.02] rounded-[var(--radius-global)] shadow-[6px_6px_0px_rgba(16,185,129,0.12)] hover:translate(-2px, -2px) hover:shadow-[8px_8px_0px_rgba(16,185,129,0.18)] transition-all duration-200 flex flex-col h-full space-y-3"
                        >
                            <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Solution Implemented
                            </h4>
                            <ul className="space-y-2 flex-grow text-xs pl-1 mt-1">
                                {content.solution.map((sol, idx) => (
                                    <li key={idx} className="text-[12px] text-slate-300 flex items-start gap-2 leading-relaxed">
                                        <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{sol}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                            <span className="text-[var(--primary)]">//</span> KEY FEATURES
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.keyFeatures.map((feat, idx) => (
                                <div 
                                    key={idx} 
                                    className="border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] p-5 hover:translate(-3px, -3px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] hover:border-white/10 transition-all duration-200 cursor-default"
                                >
                                    <h5 className="font-technical text-[10px] font-extrabold text-[var(--text-main)] mb-3 pb-1 border-b border-white/5">
                                        // {feat.category.toUpperCase()}
                                    </h5>
                                    <ul className="space-y-1.5 pl-1">
                                        {feat.points.map((pt, pidx) => (
                                            <li key={pidx} className="text-xs text-[var(--text-muted)] flex items-start gap-2 leading-relaxed">
                                                <span className="text-[var(--primary)]/75 mt-0.5">•</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* System Architecture */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                            <span className="text-[var(--primary)]">//</span> SYSTEM ARCHITECTURE
                        </h4>
                        {content.architectureImage ? (
                            <div 
                                className="relative w-full rounded overflow-hidden border border-white/5 p-4 shadow-inner group bg-white/[0.01]"
                                style={{
                                    boxShadow: '6px 6px 0px rgba(15, 118, 110, 0.18)'
                                }}
                            >
                                <img 
                                    src={content.architectureImage} 
                                    alt={`${title.split(' – ')[0]} System Architecture`} 
                                    className="block mx-auto max-w-full h-auto max-h-[400px] object-contain rounded transition-transform duration-300 group-hover:scale-[1.01]" 
                                    loading="lazy"
                                />
                            </div>
                        ) : content.systemArchitecture && content.systemArchitecture.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {content.systemArchitecture.map((layer, idx) => (
                                    <div 
                                        key={idx} 
                                        className="border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] p-4 flex flex-col justify-between hover:translate(-2px, -2px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] transition-all duration-200"
                                    >
                                        <div>
                                            <h5 className="font-technical text-[9px] font-extrabold tracking-wider text-[var(--primary)] mb-2 border-b border-white/10 pb-1.5">
                                                // {layer.category.toUpperCase()}
                                            </h5>
                                            <ul className="space-y-1">
                                                {layer.points.map((pt, pidx) => (
                                                    <li key={pidx} className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                                                        - {pt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    {/* Database Concepts Applied */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                            <span className="text-[var(--primary)]">//</span> DATABASE CONCEPTS APPLIED
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {content.databaseConcepts.map((concept, idx) => (
                                <span 
                                    key={idx} 
                                    className="px-2.5 py-1 text-[10px] font-technical font-bold rounded-[var(--radius-pill)] bg-[var(--primary-soft)] border border-[var(--primary)] text-[var(--primary)] shadow-[3px_3px_0px_rgba(15,118,110,0.1)] hover:bg-[var(--primary)] hover:text-white hover:translate(-2px, -2px) hover:shadow-[5px_5px_0px_rgba(15,118,110,0.22)] transition-all duration-150 cursor-default"
                                >
                                    {concept}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Challenges Faced & Results */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Challenges */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                                <span className="text-[var(--primary)]">//</span> CHALLENGES FACED
                            </h4>
                            <ol className="space-y-3.5">
                                {content.challenges.map((challenge, idx) => {
                                    const splitChallenge = challenge.split(': ');
                                    return (
                                        <div 
                                            key={idx} 
                                            className="border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] text-xs text-[var(--text-muted)] leading-relaxed p-4 hover:translate(-3px, -3px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] transition-all duration-200"
                                        >
                                            <strong className="text-[var(--text-main)] block mb-1 font-technical text-[9px] tracking-wider text-[var(--primary)]">
                                                [CHALLENGE-0{idx + 1}] {splitChallenge[0].toUpperCase()}
                                            </strong>
                                            {splitChallenge[1]}
                                        </div>
                                    );
                                })}
                            </ol>
                        </div>

                        {/* Results */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                                <span className="text-[var(--primary)]">//</span> RESULTS & IMPACT
                            </h4>
                            <ul className="space-y-3.5">
                                {content.results.map((result, idx) => (
                                    <li 
                                        key={idx} 
                                        className="border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] text-xs text-[var(--text-muted)] flex items-start gap-2.5 leading-relaxed p-4 hover:translate(-3px, -3px) hover:shadow-[6px_6px_0px_rgba(15,118,110,0.16)] transition-all duration-200 cursor-default"
                                    >
                                        <svg className="w-4 h-4 text-[var(--primary)] mt-0.5 flex-shrink-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="leading-relaxed">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Future Enhancements (if exist) */}
                    {content.futureEnhancements && (
                        <div className="space-y-3">
                            <h4 className="text-sm font-extrabold uppercase text-[var(--text-main)] flex items-center gap-2 border-b border-white/10 pb-2.5">
                                <span className="text-[var(--primary)]">//</span> FUTURE ENHANCEMENTS
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {content.futureEnhancements.map((enh, idx) => (
                                    <div 
                                        key={idx} 
                                        className="border border-white/5 bg-[var(--surface)]/45 rounded-[var(--radius-global)] flex items-center gap-2.5 p-3.5 text-xs text-[var(--text-muted)] hover:translate(-2px, -2px) hover:shadow-[4px_4px_0px_rgba(15,118,110,0.12)] transition-all duration-200 cursor-default"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                                        <span>{enh}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer */}
                {content.developedBy && (
                    <div 
                        className="p-5 px-6 md:px-8 border-t flex flex-col sm:flex-row justify-between items-center gap-2 z-10 bg-white/[0.01]"
                        style={{
                            borderColor: 'rgba(255, 255, 255, 0.08)'
                        }}
                    >
                        <div className="text-[10px] font-technical text-[var(--text-muted)] font-medium">
                            DEVELOPED_BY: <strong className="text-[var(--text-main)]">{content.developedBy.name.toUpperCase()}</strong> • {content.developedBy.dept.toUpperCase()}
                        </div>
                        <div className="text-[10px] font-technical text-[var(--text-muted)] font-semibold">
                            {content.developedBy.college.toUpperCase()}
                        </div>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default ProjectDetailsModal;

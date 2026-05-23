import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../data';
import type { Project } from '../data';
import GithubIcon from './icons/GithubIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import ProjectDetailsModal from './ProjectDetailsModal';
import SpotlightCard from './SpotlightCard';

interface ProjectCardProps {
    title: string;
    duration: string;
    subtitle: string;
    tags: string[];
    features: string[];
    github: string;
    liveUrl?: string;
    image?: string;
    delay: number;
    featured?: boolean;
    detailedContent?: any;
    onExpand?: () => void;
    index: number;
}

const getProjectId = (title: string, index: number) => {
    const t = title.toUpperCase();
    if (t.includes('AUTOQUIZZER')) return '[AI-01]';
    if (t.includes('EMOTION')) return '[AI-02]';
    if (t.includes('OCR')) return '[AI-03]';
    if (t.includes('MEDCARD')) return '[SYS-01]';
    if (t.includes('CRIME') || t.includes('CRMS')) return '[SYS-02]';
    if (t.includes('AIRLINE')) return '[SYS-03]';
    if (t.includes('SLOT')) return '[SYS-04]';
    return `[SYS-0${index + 1}]`;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, duration, subtitle, tags, features, github, liveUrl, image, delay, featured, detailedContent, onExpand, index }) => {
    const sysId = getProjectId(title, index);
    
    return (
        <SpotlightCard
            className="glass-card flex flex-col h-full observe-me transition-all duration-300 relative group overflow-hidden"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Monospace Project System ID and Duration Badge */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                <span className="font-technical text-xs font-black tracking-widest text-[var(--primary)]">
                    {sysId}
                </span>
                <span className="font-technical text-[9px] font-bold px-2 py-0.5 rounded border border-white/10 bg-white/[0.02] text-[var(--text-muted)]">
                    {duration}
                </span>
            </div>

            {featured && image && (
                <div className="relative h-44 overflow-hidden rounded-md mb-4 border border-white/5">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    ></div>
                </div>
            )}

            <div className="flex flex-col flex-grow">
                <h4
                    className="font-extrabold text-lg leading-snug font-primary mb-1 uppercase tracking-tight"
                    style={{ color: 'var(--text-main)' }}
                >
                    {title.split(' – ')[0]}
                </h4>
                <p className="text-[10px] font-technical font-bold uppercase tracking-wider text-[var(--primary)] mb-4">
                    {subtitle}
                </p>

                {/* Structured Engineering Specifications Grid */}
                <div className="border-t border-white/5 pt-4 space-y-3.5 flex-grow">
                    <div>
                        <span className="font-technical text-[9px] uppercase tracking-wider text-[var(--primary)] block font-bold">// ROLE</span>
                        <p className="text-xs text-[var(--text-main)] font-semibold mt-0.5">
                            {detailedContent ? detailedContent.role.split(' • ')[0] : 'Lead Developer'}
                        </p>
                    </div>
                    
                    <div>
                        <span className="font-technical text-[9px] uppercase tracking-wider text-[var(--primary)] block font-bold">// SYSTEM STACK</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                            {tags.slice(0, 4).map((tech, idx) => (
                                <span key={idx} className="font-technical text-[8px] px-1.5 py-0.5 border border-white/5 bg-white/[0.02] text-[var(--text-muted)] rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <span className="font-technical text-[9px] uppercase tracking-wider text-[var(--primary)] block font-bold">// CAPABILITIES</span>
                        <ul className="text-[11px] text-[var(--text-muted)] mt-1 space-y-1.5">
                            {features.slice(0, 3).map((feat, idx) => (
                                <li key={idx} className="flex items-start">
                                    <ChevronRightIcon className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0 text-[var(--primary)]" />
                                    <span className="leading-snug">{feat.split('. ')[0]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {(detailedContent?.results || features[features.length - 1]?.includes('Impact:')) && (
                        <div className="border-t border-white/5 pt-3.5 mt-2">
                            <span className="font-technical text-[9px] uppercase tracking-wider text-[var(--primary)] block font-bold">// SYSTEM RESULT</span>
                            <p className="text-[10px] font-primary text-[var(--text-muted)] leading-relaxed mt-1 italic pl-2 border-l border-[var(--primary)]">
                                {detailedContent ? detailedContent.results[0] : features[features.length - 1]?.replace(/Impact:/g, '').trim()}
                            </p>
                        </div>
                    )}
                </div>

                {/* Technical Buttons Controls */}
                <div className="mt-6 space-y-2">
                    {detailedContent && onExpand && (
                        <button
                            onClick={onExpand}
                            className="btn-outline w-full flex items-center justify-center gap-2 group/btn text-xs py-2 rounded"
                        >
                            <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-105" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                            EXPAND DIAGNOSTIC DETAILS
                        </button>
                    )}

                    <div className={liveUrl ? "grid grid-cols-2 gap-2" : "w-full"}>
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-2 text-center flex items-center justify-center gap-1 text-[10px] font-bold rounded"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                LIVE CORE
                            </a>
                        )}
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={liveUrl ? "btn-outline py-2 text-center flex items-center justify-center gap-1 text-[10px] font-bold rounded" : "btn-primary py-2 text-center flex items-center justify-center gap-1.5 text-[11px] font-bold rounded"}
                        >
                            <GithubIcon className="w-3 h-3" />
                            {liveUrl ? 'SOURCE' : 'VIEW SOURCE'}
                        </a>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    );
};

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const row1Projects = PROJECTS.filter(p => 
        p.title.includes('AutoQuizzer') || 
        p.title.includes('Crime Record') || 
        p.title.includes('MedCard') || 
        p.title.includes('MEDCARD')
    );
    const row2Projects = PROJECTS.filter(p => !row1Projects.includes(p));

    return (
        <SectionWrapper id="projects" title="PROJECTS" subtitle="CORE CODE ARCHITECTURE & SYSTEM SCHEMATICS">
            <div className="space-y-16">
                {/* Tier 1: Core System Panels */}
                <div>
                    <h3 className="font-technical text-[10px] font-bold tracking-widest text-[var(--text-muted)] mb-8 flex items-center gap-3 observe-me">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                        // HIGH-FIDELITY SYSTEMS INTERFACES
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {row1Projects.map((project, index) => (
                            <ProjectCard 
                                key={project.title} 
                                {...project} 
                                index={index}
                                featured={true} 
                                delay={100 + index * 100} 
                                onExpand={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </div>

                {/* Tier 2: Modular System Panel Utilities */}
                <div className="pt-6 border-t border-white/5">
                    <h3 className="font-technical text-[10px] font-bold tracking-widest text-[var(--text-muted)] mb-8 flex items-center gap-3 observe-me" style={{ transitionDelay: '200ms' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500/30"></span>
                        // SUB-LEVEL SYSTEMS & BACKEND PIPELINES
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {row2Projects.map((project, index) => (
                            <ProjectCard 
                                key={project.title} 
                                {...project} 
                                index={row1Projects.length + index}
                                featured={false} 
                                delay={300 + index * 100} 
                                onExpand={project.detailedContent ? () => setSelectedProject(project) : undefined}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Case Study Technical Dialog */}
            <ProjectDetailsModal
                title={selectedProject?.title || ''}
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                content={selectedProject?.detailedContent}
            />
        </SectionWrapper>
    );
};

export default Projects;

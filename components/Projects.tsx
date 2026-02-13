import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../data';
import GithubIcon from './icons/GithubIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, duration, subtitle, tags, features, github, liveUrl, image, delay, featured }) => (
    <div
        className={`group flex flex-col h-full observe-me transition-all duration-300 ${featured ? '' : 'p-6'}`}
        style={{
            transitionDelay: `${delay}ms`,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-global)',
            overflow: 'hidden',
            position: 'relative'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        {featured && image && (
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, var(--bg-card), transparent)' }}
                ></div>
            </div>
        )}

        <div className={`flex flex-col flex-grow ${featured ? 'p-8 pt-4' : ''}`}>
            <div className="flex justify-between items-start mb-6">
                <div className="w-full">
                    {!featured && (
                        <div className="flex justify-between items-center mb-4">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: 'var(--primary-soft)', border: '1px solid rgba(249,115,22,0.2)' }}
                            >
                                <GithubIcon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                            </div>
                            <span
                                className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                                style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
                            >
                                {duration}
                            </span>
                        </div>
                    )}

                    <h4
                        className={`font-bold mb-1 leading-tight ${featured ? 'text-3xl' : 'text-xl'}`}
                        style={{ color: 'var(--text-main)', fontFamily: "'Poppins', sans-serif" }}
                    >
                        {title}
                    </h4>
                    <p
                        className="text-[10px] font-bold tracking-widest uppercase"
                        style={{ color: 'var(--primary)' }}
                    >
                        {subtitle}
                    </p>
                </div>

                {featured && (
                    <span
                        className="text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
                    >
                        {duration}
                    </span>
                )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider"
                        style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <ul className="text-sm space-y-3 mb-8 flex-grow leading-relaxed text-justify" style={{ color: 'var(--text-muted)' }}>
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <ChevronRightIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                        <span dangerouslySetInnerHTML={{ __html: feature.replace(/Impact:/g, '<strong style="color: var(--text-main)">Impact:</strong>') }} />
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                <div className={liveUrl ? "grid grid-cols-2 gap-3" : ""}>
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center justify-center gap-2 w-full text-center"
                            style={{ fontSize: '0.875rem' }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Live View
                        </a>
                    )}
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full text-center ${liveUrl ? 'btn-outline' : 'btn-primary'}`}
                        style={{ fontSize: '0.875rem' }}
                    >
                        <GithubIcon className="w-4 h-4" />
                        {liveUrl ? 'Code' : 'View Code'}
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const row1Projects = PROJECTS.filter(p => p.title === 'AutoQuizzer' || p.title === 'Crime Record Management System');
    const row2Projects = PROJECTS.filter(p => !row1Projects.includes(p));

    return (
        <SectionWrapper id="projects" title="Projects" subtitle="My Recent Work">
            <div className="space-y-8">
                {/* Row 1: Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {row1Projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} featured={true} delay={100 + index * 100} />
                    ))}
                </div>

                {/* Row 2: Specialized Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {row2Projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} featured={false} delay={300 + index * 100} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;

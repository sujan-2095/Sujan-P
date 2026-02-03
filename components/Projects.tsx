
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
    <div className={`group bg-[#222222]/80 backdrop-blur-sm rounded-2xl border border-[#F5E7C6]/10 h-full flex flex-col transition-all duration-500 observe-me overflow-hidden premium-card-hover ${featured ? '' : 'p-6'}`} style={{ transitionDelay: `${delay}ms` }}>
        {featured && image && (
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/20 to-transparent"></div>
            </div>
        )}

        <div className={`flex flex-col flex-grow ${featured ? 'p-8 pt-4' : ''}`}>
            <div className="flex justify-between items-start mb-6">
                {featured ? (
                    <div>
                        <h4 className="text-3xl font-bold text-[#FAF3E1] mb-1">{title}</h4>
                        <p className="text-sm font-bold text-[#FA8112] tracking-widest uppercase">{subtitle}</p>
                    </div>
                ) : (
                    <div className="w-full">
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-10 h-10 rounded-lg bg-[#FA8112]/10 flex items-center justify-center border border-[#FA8112]/20">
                                <GithubIcon className="w-5 h-5 text-[#FA8112]" />
                            </div>
                            <span className="text-[10px] font-bold bg-[#222222]/50 text-[#F5E7C6] px-3 py-1 rounded-full border border-[#F5E7C6]/10 uppercase tracking-wider">{duration}</span>
                        </div>
                        <h4 className="text-xl font-bold text-[#FAF3E1] mb-1 leading-tight">{title}</h4>
                        <p className="text-[10px] font-bold text-[#FA8112] tracking-widest uppercase">{subtitle}</p>
                    </div>
                )}
                {featured && (
                    <span className="text-xs font-bold text-[#F5E7C6] bg-[#222222]/50 px-4 py-1.5 rounded-full border border-[#F5E7C6]/10 uppercase tracking-widest">{duration}</span>
                )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-[#F5E7C6]/5 text-[#F5E7C6] text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider border border-[#F5E7C6]/10">{tag}</span>
                ))}
            </div>

            <ul className="text-sm text-[#FAF3E1]/80 space-y-3 mb-8 flex-grow leading-relaxed">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <ChevronRightIcon className="w-4 h-4 text-[#FA8112] mr-2 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: feature.replace(/Impact:/g, '<strong class="text-[#FAF3E1]">Impact:</strong>') }} />
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                {liveUrl ? (
                    <div className="grid grid-cols-2 gap-3">
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#FA8112] hover:brightness-110 text-[#222222] text-sm font-bold rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-[#FA8112]/10 btn-shine-container">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Live View
                        </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#222222] hover:bg-[#2a2a2a] border-2 border-[#FA8112] text-[#FA8112] text-sm font-bold rounded-xl transition-all duration-300 transform active:scale-[0.98]">
                            <GithubIcon className="w-5 h-5" />
                            Code
                        </a>
                    </div>
                ) : (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-3 px-6 py-3.5 bg-[#FA8112] hover:brightness-110 text-[#222222] text-sm font-bold rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-[#FA8112]/10 group btn-shine-container">
                        <GithubIcon className="w-5 h-5" />
                        View Code
                    </a>
                )}
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

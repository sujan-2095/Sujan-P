import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS_DATA, SOFT_SKILLS } from '../data';
import Icon from './icons/Icon';
import LogoLoop from './LogoLoop';
import SpotlightCard from './SpotlightCard';

const techLogos = [
    {
        node: (
            <svg className="w-9 h-9 text-[#61DAFB] select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(97,218,251,0.25)]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
            </svg>
        ),
        title: "React",
        href: "https://react.dev"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#3178C6] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(49,120,198,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm16.863 12.879c.67 0 1.288.167 1.854.502.566.334 1.011.802 1.34 1.405.328.601.492 1.309.492 2.122 0 .814-.168 1.51-.502 2.09-.334.58-.802 1.026-1.405 1.34-.601.314-1.309.471-2.122.471-.826 0-1.53-.16-2.11-.482a4.425 4.425 0 0 1-1.425-1.398l1.458-1.045c.347.534.73.935 1.147 1.205.417.27.893.405 1.428.405.534 0 .973-.133 1.314-.402.341-.268.512-.647.512-1.134 0-.472-.167-.84-.502-1.106-.334-.265-.89-.398-1.664-.398h-.795v-1.634h.795c.677 0 1.189-.116 1.534-.347.347-.23.52-.58.52-1.045 0-.414-.143-.732-.428-.954-.285-.221-.694-.332-1.226-.332-.509 0-.93.125-1.265.377-.334.252-.601.637-.8 1.155l-1.468-.829c.394-.852.957-1.503 1.688-1.954.73-.45 1.595-.677 2.597-.677zm-9.356.126h2.247v7.502h2.237v1.892H6.386v-1.892h2.247v-7.502z"/>
            </svg>
        ),
        title: "TypeScript",
        href: "https://www.typescriptlang.org"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#38BDF8] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
            </svg>
        ),
        title: "Tailwind CSS",
        href: "https://tailwindcss.com"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#339933] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(51,153,51,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v4zm0-6.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1zm5 6.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-4.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v4.5zm0-7c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1z"/>
            </svg>
        ),
        title: "Node.js",
        href: "https://nodejs.org"
    },
    {
        node: (
            <svg className="w-9 h-9 fill-current text-[#3776AB] select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(55,118,171,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25.18c-.98.08-1.9.77-2.03 1.77-.14 1.13.48 2.05 1.57 2.1h3.9c1.07 0 1.93.86 1.93 1.93v2.85c0 .88.72 1.6 1.6 1.6h.47c1.1 0 1.98-.82 2.08-1.92.1-1.12-.66-2.18-1.78-2.28l-3.9-.33c-.7-.06-1.2-.64-1.2-1.34V2.26c0-.98-.76-1.84-1.74-2.03-.27-.05-.53-.06-.9-.05zm-4.5 2.1c-.88 0-1.6.72-1.6 1.6v.47c0 1.1.82 1.98 1.92 2.08 1.12.1 2.18-.66 2.28-1.78l.33-3.9c.06-.7.64-1.2 1.34-1.2h2.6c.98 0 1.84.76 2.03 1.74.05.27.06.53.05.9 0 .98-.77 1.9-1.77 2.03-1.13.14-2.05-.48-2.1-1.57v-3.9c0-1.07-.86-1.93-1.93-1.93h-3.85z"/>
            </svg>
        ),
        title: "Python",
        href: "https://www.python.org"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#000000] dark:text-white fill-none stroke-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v6l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3M8.5 12h7" />
            </svg>
        ),
        title: "Flask",
        href: "https://flask.palletsprojects.com"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#003B57] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(0,59,87,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 3c3.86 0 7 1.12 7 2.5S15.86 10 12 10s-7-1.12-7-2.5S8.14 5 12 5zm0 13.5c-3.86 0-7-1.12-7-2.5v-2.61c1.55.88 4.14 1.36 7 1.36s5.45-.48 7-1.36v2.61c0 1.38-3.14 2.5-7 2.5zm0-4.5c-3.86 0-7-1.12-7-2.5v-2.61c1.55.88 4.14 1.36 7 1.36s5.45-.48 7-1.36v2.61c0 1.38-3.14 2.5-7 2.5z"/>
            </svg>
        ),
        title: "SQLite",
        href: "https://sqlite.org"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#F05032] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(240,80,50,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.384 11.23L12.77 1.037A2.083 2.083 0 0 0 11.25 0c-.57 0-1.1.224-1.52.617L1.03 9.444a2.088 2.088 0 0 0 0 3.037l10.614 10.48c.42.413.97.639 1.52.639.57 0 1.1-.226 1.52-.639l8.694-8.817a2.088 2.088 0 0 0 .006-3.037l-.004.004zM13.666 18.35v-1.84c-3.15.11-4.78 1.2-4.78 1.2.98-3.04 3.04-5.22 4.78-5.54V10.3l3.69 4.02-3.69 4.03z"/>
            </svg>
        ),
        title: "Git",
        href: "https://git-scm.com"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#E34F26] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(227,79,38,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.685 7.962h7.254l-.328 3.513-2.99.807-3.015-.815-.192-2.185H4.218l.386 4.405 5.864 1.624 5.89-1.61.787-8.812H8.531z"/>
            </svg>
        ),
        title: "HTML5",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#1572B6] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(21,114,182,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.69 14.88l-.23-2.625h5.057v-2.503H6.73L6.5 7.128h5.517V4.625H3.978l.685 7.963h7.327v2.503l-2.99.807-3.015-.815-.192-2.185-.018-.018z"/>
            </svg>
        ),
        title: "CSS3",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#E76F51] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(231,111,81,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 19.5c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V18H2v1.5zM19 6h-2c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2H5c-1.66 0-3 1.34-3 3v5c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zm0 7c0 .55-.45 1-1 1h-1V8h1c.55 0 1 .45 1 1v4z"/>
            </svg>
        ),
        title: "Java",
        href: "https://www.oracle.com/java/"
    },
    {
        node: (
            <svg className="w-9 h-9 text-[#00599C] fill-current select-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(0,89,156,0.25)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.597 0L1.758 5.679v11.362L11.597 24l9.839-5.679V5.679L11.597 0zm8.681 16.279l-8.681 5.013-8.682-5.013V7.072l8.682-5.012 8.681 5.012v9.207z M12.87 9.87h1.613v1.613h-1.613v1.613h-1.129v-1.613H10.13V9.87h1.613V8.257h1.129v1.613zm3.709 0h1.613v1.613h-1.613v1.613H15.45v-1.613h-1.613V9.87H15.45V8.257h1.129v1.613zM6.903 15.65c-2.023 0-3.664-1.64-3.664-3.663s1.64-3.664 3.664-3.664c1.196 0 2.257.575 2.926 1.464l-1.077.834c-.426-.549-1.085-.898-1.849-.898-1.249 0-2.261 1.013-2.261 2.264 0 1.251 1.013 2.264 2.261 2.264.751 0 1.4-.339 1.829-.875l1.096.817c-.672.906-1.74 1.498-2.965 1.498z"/>
            </svg>
        ),
        title: "C++",
        href: "https://isocpp.org"
    }
];

const SKILL_COLORS: Record<string, string> = {
    'HTML5': 'bg-[#E34F26]',
    'CSS3': 'bg-[#1572B6]',
    'JavaScript': 'bg-[#F7DF1E] text-black',
    'Bootstrap': 'bg-[#7952B3]',
    'React.js': 'bg-[#61DAFB] text-black',
    'Python': 'bg-[#3776AB]',
    'Flask': 'bg-[#000000]',
    'Node.js': 'bg-[#339933]',
    'Express.js': 'bg-[#000000]',
    'FastAPI': 'bg-[#05998B]',
    'Django': 'bg-[#092E20]',
    'Jinja': 'bg-[#B41717]',
    'RESTful API': 'bg-[#009688]',
    'SQLite': 'bg-[#003B57]',
    'MySQL': 'bg-[#4479A1]',
    'PostgreSQL': 'bg-[#336791]',
    'MongoDB': 'bg-[#47A248]',
    'Git': 'bg-[#F05032]',
    'GitHub': 'bg-[#181717]',
    'Linux': 'bg-[#FCC624] text-black',
    'Windows Terminal': 'bg-[#4D4D4D]',
    'Bash Script': 'bg-[#4EAA25]',
    'Render': 'bg-[#000000]',
    'Figma': 'bg-[#F24E1E]',
    'Canva': 'bg-[#00C4CC]',
    'Adobe Suite': 'bg-[#FF0000]',
    'Java': 'bg-[#007396]',
    'Android': 'bg-[#3DDC84] text-black',
    'Deep Learning': 'bg-[#FF6F00]',
    'CNN': 'bg-[#4285F4]',
    'NLP': 'bg-[#00A67E]',
    'TensorFlow': 'bg-[#FF6F00]',
    'PyTorch': 'bg-[#EE4C2C]',
    'Keras': 'bg-[#D00000]',
    'MLflow': 'bg-[#0194E2]',
    'Scikit-Learn': 'bg-[#F7931E]',
    'Pandas': 'bg-[#150458]',
    'NumPy': 'bg-[#013243]',
    'SciPy': 'bg-[#8CAAE6]',
    'Matplotlib': 'bg-[#11557C]',
    'Plotly': 'bg-[#3F4F75]',
    'C': 'bg-[#A8B9CC] text-black',
    'C++': 'bg-[#00599C]',
    'Flutter': 'bg-[#02569B]',
    'Gemini': 'bg-[#4285F4]',
    'BART': 'bg-[#FF9900]',
    'Hybrid': 'bg-[#6B4E71]',
    'Model inference': 'bg-[#50B748]',
    'Raspberry Pi': 'bg-[#C51A4A]',
};

const SkillBadge: React.FC<{ name: string; level?: string }> = ({ name, level }) => {
    const names = name.includes(',') ? name.split(',').map(n => n.trim()) : [name];

    return (
        <div className="flex flex-wrap gap-2">
            {names.map((n, i) => {
                const colorClass = Object.entries(SKILL_COLORS).find(([key]) => n.includes(key))?.[1] || 'bg-[#ACBFA4]/20';
                const hexMatch = colorClass.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/);
                const dotColor = hexMatch ? `#${hexMatch[1]}` : '#0f766e';

                return (
                    <div
                        key={i}
                        className="flex items-center gap-2.5 px-3 py-1.5 rounded transition-all duration-200 border border-white/5 bg-white/[0.02] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] cursor-default"
                    >
                        <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: dotColor }}
                        ></div>
                        <span className="text-xs font-semibold font-primary" style={{ color: 'var(--text-main)' }}>
                            {n}
                        </span>
                        {level && (
                            <span className="text-[9px] font-technical px-1.5 py-0.5 rounded bg-[var(--bg)] border border-white/10 text-[var(--text-muted)] ml-1.5">
                                {level}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const UnifiedSkillCard: React.FC<{
    title: string;
    groups: { label: string; skills: (string | { name: string; level?: string })[] }[];
    delay: number;
    className?: string;
}> = ({ title, groups, delay, className }) => (
    <SpotlightCard
        className={`glass-card observe-me flex flex-col group p-8 ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="mb-6 border-b border-white/10 pb-3">
            <h3 className="text-lg font-extrabold uppercase font-primary text-[var(--text-main)]">{title}</h3>
            <div className="h-[2px] w-8 rounded mt-2" style={{ background: 'var(--primary)' }}></div>
        </div>

        <div className="space-y-6 flex-grow">
            {groups.map((group, gIdx) => (
                <div key={gIdx}>
                    <h4 className="text-[9px] font-technical uppercase tracking-widest font-extrabold mb-3 text-[var(--text-muted)]">// {group.label}</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill, sIdx) => (
                            <SkillBadge
                                key={sIdx}
                                name={typeof skill === 'string' ? skill : skill.name}
                                level={typeof skill === 'object' ? skill.level : undefined}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </SpotlightCard>
);

const Skills: React.FC = () => {
    const devGroup = {
        title: "Development Suite",
        groups: [
            { label: "Core & Backend Languages", skills: [...(SKILLS_DATA.find(s => s.category === 'Programming Languages')?.skills || []), ...(SKILLS_DATA.find(s => s.category === 'Backend Development')?.skills || [])] },
            { label: "Frontend Experience", skills: SKILLS_DATA.find(s => s.category === 'Frontend Development')?.skills || [] },
            { label: "Databases & Mobile Dev", skills: [...(SKILLS_DATA.find(s => s.category === 'Databases')?.skills || []), ...(SKILLS_DATA.find(s => s.category === 'App Development')?.skills || [])] },
        ]
    };

    const aiGroup = {
        title: "AI & Data Engineering",
        groups: [
            { label: "AI models & ML Frameworks", skills: SKILLS_DATA.find(s => s.category === 'AI & Machine Learning')?.skills || [] },
            { label: "Data pipelines & visualizers", skills: SKILLS_DATA.find(s => s.category === 'Data Handling')?.skills || [] },
        ]
    };

    const toolsGroup = {
        title: "Platform Ecosystem",
        groups: [
            { label: "Professional Workspace", skills: SKILLS_DATA.find(s => s.category === 'Tools & Platforms')?.skills || [] },
        ]
    };

    return (
        <SectionWrapper id="skills" title="SKILLS" subtitle="CURATED EXPERTISE & SYSTEM INSTRUMENTATION">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-4">
                <UnifiedSkillCard {...devGroup} delay={100} className="lg:row-span-2" />
                <UnifiedSkillCard {...aiGroup} delay={300} />
                <UnifiedSkillCard {...toolsGroup} delay={500} />
            </div>

            {/* Professional Traits Panel */}
            <SpotlightCard
                className="glass-card mt-12 p-8 observe-me"
                style={{ transitionDelay: '600ms' }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-xs shrink-0">
                        <h3 className="text-sm font-extrabold uppercase mb-1.5 flex items-center text-[var(--text-main)]">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2.5 animate-pulse"></span>
                            Professional Traits
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">System-thinking mindsets that govern my collaborative and technical execution.</p>
                    </div>
                    <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {SOFT_SKILLS.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2.5 p-3.5 rounded border border-white/5 bg-white/[0.02] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] transition-colors duration-200 shadow-sm"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div>
                                <span className="text-xs font-semibold text-[var(--text-muted)]">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </SpotlightCard>

            {/* Curated Technical Stack Loop */}
            <div className="mt-16 border-t border-b border-white/5 py-8 observe-me select-none" style={{ transitionDelay: '700ms' }}>
                <div className="text-center text-[9px] font-technical font-extrabold uppercase tracking-widest text-[var(--text-muted)] mb-8">// CURATED TECHNICAL STACK</div>
                <LogoLoop
                    logos={techLogos}
                    speed={40}
                    direction="left"
                    logoHeight={36}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#000000"
                    ariaLabel="Technology partners"
                />
            </div>
        </SectionWrapper>
    );
};

export default Skills;

import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS_DATA, SOFT_SKILLS } from '../data';
import Icon from './icons/Icon';
import { IconType } from '../types';

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
        <div className="flex flex-wrap gap-3">
            {names.map((n, i) => {
                const colorClass = Object.entries(SKILL_COLORS).find(([key]) => n.includes(key))?.[1] || 'bg-[#ACBFA4]/20';
                const hexMatch = colorClass.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/);
                const dotColor = hexMatch ? `#${hexMatch[1]}` : '#ACBFA4';

                return (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 group cursor-default"
                        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--primary)';
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            const spans = e.currentTarget.querySelectorAll('span');
                            spans.forEach(s => s.style.color = 'white');
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-surface)';
                            e.currentTarget.style.borderColor = 'var(--border)';
                            const spans = e.currentTarget.querySelectorAll('span');
                            spans.forEach(s => s.style.color = 'var(--text-main)');
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: dotColor }}
                        ></div>
                        <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600 }}>
                            {n}
                        </span>
                        {level && (
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded ml-2" style={{ background: 'rgba(255,255,255,0.1)' }}>
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
    <div
        className={`observe-me flex flex-col group ${className}`}
        style={{
            transitionDelay: `${delay}ms`,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-global)',
            padding: '32px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
        <div className="mb-8 border-b border-[rgba(255,255,255,0.05)] pb-4">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--text-main)', fontFamily: "'Poppins', sans-serif" }}>{title}</h3>
            <div className="h-1 w-12 rounded-full mt-2" style={{ background: 'var(--primary)' }}></div>
        </div>

        <div className="space-y-8 flex-grow">
            {groups.map((group, gIdx) => (
                <div key={gIdx}>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: 'var(--text-muted)' }}>{group.label}</h4>
                    <div className="flex flex-wrap gap-2">
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
    </div>
);

const Skills: React.FC = () => {
    const devGroup = {
        title: "Development Suite",
        groups: [
            { label: "Core & Backend", skills: [...(SKILLS_DATA.find(s => s.category === 'Programming Languages')?.skills || []), ...(SKILLS_DATA.find(s => s.category === 'Backend Development')?.skills || [])] },
            { label: "Frontend", skills: SKILLS_DATA.find(s => s.category === 'Frontend Development')?.skills || [] },
            { label: "Databases & Mobile", skills: [...(SKILLS_DATA.find(s => s.category === 'Databases')?.skills || []), ...(SKILLS_DATA.find(s => s.category === 'App Development')?.skills || [])] },
        ]
    };

    const aiGroup = {
        title: "AI & Intelligence",
        groups: [
            { label: "AI & ML", skills: SKILLS_DATA.find(s => s.category === 'AI & Machine Learning')?.skills || [] },
            { label: "Data Science", skills: SKILLS_DATA.find(s => s.category === 'Data Handling')?.skills || [] },
        ]
    };

    const toolsGroup = {
        title: "Ecosystem & Tools",
        groups: [
            { label: "Professional Stack", skills: SKILLS_DATA.find(s => s.category === 'Tools & Platforms')?.skills || [] },
        ]
    };

    return (
        <SectionWrapper id="skills" title="Technical Arsenal" subtitle="Unified expertise in systems and innovation">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-8">
                <UnifiedSkillCard {...devGroup} delay={100} className="lg:row-span-2" />
                <UnifiedSkillCard {...aiGroup} delay={300} />
                <UnifiedSkillCard {...toolsGroup} delay={500} />
            </div>

            <div
                className="mt-12 p-10 rounded-3xl observe-me transition-all duration-300"
                style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--primary)',
                    transitionDelay: '600ms',
                    boxShadow: 'var(--shadow-hover)'
                }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-bold mb-2 flex items-center" style={{ color: 'var(--text-main)', fontFamily: "'Poppins', sans-serif" }}>
                            <Icon name="Users" className="w-6 h-6 mr-3" style={{ color: 'var(--primary)' }} /> Professional Traits
                        </h3>
                        <p className="text-base text-justify" style={{ color: 'var(--text-muted)' }}>Mentalities and leadership qualities that drive my engineering work.</p>
                    </div>
                    <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {SOFT_SKILLS.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-xl transition-all"
                                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
                            >
                                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }}></div>
                                <span className="text-base font-semibold" style={{ color: 'var(--text-main)' }}>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center text-xs uppercase tracking-[0.2em] font-bold observe-me" style={{ transitionDelay: '800ms', color: 'rgba(255,255,255,0.2)' }}>
                <p>Curated Technical Stack &nbsp; • &nbsp; Continuous Learning Mindset</p>
                <p className="mt-2 lowercase font-medium whitespace-pre-wrap">"Learning" labels demonstrate honesty and a growth mindset</p>
            </div>
        </SectionWrapper>
    );
};

export default Skills;

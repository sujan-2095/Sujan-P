
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
    // Extract base name if it's like "HTML5, CSS3, JavaScript"
    const names = name.includes(',') ? name.split(',').map(n => n.trim()) : [name];

    return (
        <div className="flex flex-wrap gap-x-6 gap-y-3">
            {names.map((n, i) => {
                // Extract color from our registry or default to gray
                const colorClass = Object.entries(SKILL_COLORS).find(([key]) => n.includes(key))?.[1] || 'bg-[#ACBFA4]/20';
                // Extract the hex code if it exists in the tailwind class string
                const hexMatch = colorClass.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/);
                const dotColor = hexMatch ? `#${hexMatch[1]}` : '#ACBFA4';

                return (
                    <div key={i} className="flex items-center gap-2.5 group relative cursor-default">
                        <div
                            className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-125"
                            style={{ backgroundColor: dotColor }}
                        ></div>
                        <span className="text-[#E2E8CE]/90 text-base font-semibold group-hover:text-[#FF7F11] transition-colors tracking-wide">
                            {n}
                        </span>
                        {level && (
                            <div className="absolute -top-8 left-0 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold shadow-xl z-10">
                                {level}
                            </div>
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
    <div className={`bg-[#262626]/80 backdrop-blur-md p-8 rounded-3xl border border-[#ACBFA4]/10 transition-all duration-500 observe-me flex flex-col group premium-card-hover ${className}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#E2E8CE] tracking-tight">{title}</h3>
            <div className="h-1 w-12 bg-[#FF7F11] mt-2 rounded-full"></div>
        </div>

        <div className="space-y-8 flex-grow">
            {groups.map((group, gIdx) => (
                <div key={gIdx}>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#ACBFA4]/50 mb-4">{group.label}</h4>
                    <div className="flex flex-wrap gap-2.5">
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
                {/* Mega Dev Card - Spans 2 rows in the first column */}
                <UnifiedSkillCard {...devGroup} delay={100} className="lg:row-span-2" />

                {/* AI Card - Top of second column */}
                <UnifiedSkillCard {...aiGroup} delay={300} />

                {/* Tools Card - Bottom of second column */}
                <UnifiedSkillCard {...toolsGroup} delay={500} />
            </div>

            <div className="mt-12 bg-gradient-to-br from-[#262626] to-[#262626]/50 p-10 rounded-3xl border border-[#FF7F11]/10 observe-me premium-card-hover" style={{ transitionDelay: '600ms' }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-bold text-[#E2E8CE] mb-2 flex items-center">
                            <Icon name="Users" className="w-6 h-6 text-[#FF7F11] mr-3" /> Professional Traits
                        </h3>
                        <p className="text-[#ACBFA4] text-base">Mentalities and leadership qualities that drive my engineering work.</p>
                    </div>
                    <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {SOFT_SKILLS.map((skill, index) => (
                            <div key={index} className="flex items-center gap-3 bg-[#ACBFA4]/5 p-4 rounded-xl border border-[#ACBFA4]/10 hover:border-[#FF7F11]/20 transition-all">
                                <div className="w-2 h-2 rounded-full bg-[#FF7F11] shadow-[0_0_8px_rgba(255,127,17,0.4)]"></div>
                                <span className="text-[#E2E8CE] text-base font-semibold">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center text-[#ACBFA4]/40 text-xs uppercase tracking-[0.2em] font-bold observe-me" style={{ transitionDelay: '800ms' }}>
                <p>Curated Technical Stack &nbsp; • &nbsp; Continuous Learning Mindset</p>
                <p className="mt-2 lowercase text-[#ACBFA4]/30 font-medium whitespace-pre-wrap">"Learning" labels demonstrate honesty and a growth mindset</p>
            </div>
        </SectionWrapper>
    );
};

export default Skills;

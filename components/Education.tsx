import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_DATA } from '../data';
import Icon from './icons/Icon';
import SpotlightCard from './SpotlightCard';
import type { IconType } from '../types';

interface EducationItemProps {
    degree: string;
    institution: string;
    period: string;
    details: string[];
    score: string;
    icon: IconType;
    isLast?: boolean;
    delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, details, score, icon, isLast, delay }) => (
    <div className="relative pl-12 md:pl-20 pb-10 observe-me group" style={{ transitionDelay: `${delay}ms` }}>
        {/* Timeline Line */}
        <div
            className="absolute top-2 w-[1px] h-full"
            style={{
                left: '23px',
                background: isLast ? 'transparent' : 'var(--border)',
            }}
        ></div>

        {/* Timeline Marker (Circle) */}
        <div
            className="absolute left-0 top-0 z-10 flex items-center justify-center rounded transition-all duration-300 border-[3px] border-[var(--primary)] text-[var(--primary)]"
            style={{
                width: '46px',
                height: '46px',
                background: 'var(--surface)',
                borderRadius: '8px',
                boxShadow: '4px 4px 0px rgba(15, 118, 110, 0.18)',
            }}
        >
            <Icon name={icon} className="w-4 h-4 text-[var(--primary)]" />
        </div>

        {/* Education Card */}
        <SpotlightCard
            className="glass-card p-6 md:p-8 relative"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
                <div>
                    <h4 className="text-lg md:text-xl font-extrabold uppercase font-primary mb-1" style={{ color: 'var(--text-main)' }}>{degree}</h4>
                    <p className="text-xs font-technical font-semibold text-[var(--text-muted)]">{institution}</p>
                </div>
                <div className="flex-shrink-0 self-start md:self-auto">
                    <span
                        className="inline-block px-3 py-1 text-[10px] font-technical font-bold rounded bg-[var(--primary-soft)] border border-white/10 text-[var(--primary)]"
                    >
                        {period}
                      </span>
                </div>
            </div>

            <p className="text-xs font-technical font-bold mb-3 uppercase tracking-wider text-[var(--primary)]">// {score}</p>

            <div className="text-xs leading-relaxed space-y-2 text-justify text-[var(--text-muted)]">
                {details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
        </SpotlightCard>
    </div>
);

const Education: React.FC = () => {
    return (
        <SectionWrapper id="education" title="EDUCATION" subtitle="ACADEMIC MILESTONES & HISTORY">
            <div className="max-w-4xl mx-auto pt-6">
                {EDUCATION_DATA.map((edu, index) => (
                    <EducationItem
                        key={index}
                        {...edu}
                        icon={index === 0 ? 'GraduationCap' : index === 1 ? 'School' : 'FileAlt'}
                        isLast={index === EDUCATION_DATA.length - 1}
                        delay={100 + index * 100}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;

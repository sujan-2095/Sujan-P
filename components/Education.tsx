import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_DATA } from '../data';
import Icon from './icons/Icon';
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
    <div className="relative pl-12 md:pl-20 pb-12 observe-me group" style={{ transitionDelay: `${delay}ms` }}>
        {/* Timeline Line */}
        <div
            className="absolute top-2 w-[2px] h-full"
            style={{
                left: '23px', // Center of the 48px circle roughly, adjusted
                background: isLast ? 'transparent' : 'var(--border)',
                // Mobile adjustment if needed, but keeping fixed for now
            }}
        ></div>

        {/* Timeline Marker (Circle) */}
        <div
            className="absolute left-0 top-0 z-10 flex items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
            style={{
                width: '48px',
                height: '48px',
                background: 'var(--bg-card)',
                border: '4px solid var(--primary)',
                boxShadow: '0 0 15px rgba(249,115,22,0.3)',
                color: 'var(--text-main)'
            }}
        >
            <Icon name={icon} className="w-5 h-5" />
        </div>

        {/* Education Card */}
        <div
            className="p-8 rounded-3xl transition-all duration-500 relative"
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-global)'
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--text-main)', fontFamily: "'Poppins', sans-serif" }}>{degree}</h4>
                    <p className="text-lg font-semibold" style={{ color: 'var(--text-muted)' }}>{institution}</p>
                </div>
                <div className="flex-shrink-0">
                    <span
                        className="inline-block px-6 py-2 text-sm font-bold rounded-full shadow-lg"
                        style={{
                            background: 'var(--primary)',
                            color: '#fff'
                        }}
                    >
                        {period}
                    </span>
                </div>
            </div>

            <p className="text-lg font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--primary)' }}>{score}</p>

            <div className="text-lg leading-relaxed space-y-2 text-justify" style={{ color: 'var(--text-main)', opacity: 0.8 }}>
                {details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
        </div>
    </div>
);

const Education: React.FC = () => {
    return (
        <SectionWrapper id="education" title="Education" subtitle="My Academic Journey">
            <div className="max-w-6xl mx-auto pt-10">
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

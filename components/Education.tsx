
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
    <div className="relative pl-16 md:pl-24 pb-12 observe-me group" style={{ transitionDelay: `${delay}ms` }}>
        {/* Timeline Line */}
        <div className={`absolute left-[31px] md:left-[47px] top-2 w-[3px] h-full ${isLast ? 'h-0' : 'bg-gradient-to-b from-[#FF7F11] to-[#FF7F11]/40'}`}></div>

        {/* Timeline Icon */}
        <div className="absolute left-0 md:left-4 top-0 z-10 flex items-center justify-center w-16 h-16 bg-[#262626] rounded-full border-4 border-[#262626] shadow-[0_0_20px_rgba(255,127,17,0.2)] transition-transform duration-500 group-hover:scale-110 hover-spin">
            <Icon name={icon} className="w-6 h-6 text-[#E2E8CE]" />
        </div>

        {/* Education Card */}
        <div className="bg-[#262626]/80 backdrop-blur-md p-8 rounded-3xl border border-[#ACBFA4]/10 transition-all duration-500 relative premium-card-hover">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#E2E8CE] mb-1">{degree}</h4>
                    <p className="text-lg font-semibold text-[#ACBFA4]">{institution}</p>
                </div>
                <div className="flex-shrink-0">
                    <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#FF7F11] to-[#FF7F11]/80 text-[#262626] text-sm font-bold rounded-full shadow-lg">
                        {period}
                    </span>
                </div>
            </div>

            <p className="text-lg font-bold text-[#FF7F11] mb-4 uppercase tracking-wider">{score}</p>

            <div className="text-[#E2E8CE]/80 text-lg leading-relaxed space-y-2">
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

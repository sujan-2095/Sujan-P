import React from 'react';
import SectionWrapper from './SectionWrapper';
import Icon from './icons/Icon';
import SearchIcon from './icons/SearchIcon';
import CalendarIcon from './icons/CalendarIcon';
import LocationIcon from './icons/LocationIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

const StatBox: React.FC<{ value: string; label: string; delay?: string }> = ({ value, label, delay = '0ms' }) => (
    <div
        className="glass-card observe-me text-center p-6 flex flex-col justify-center items-center"
        style={{ transitionDelay: delay }}
    >
        <div className="text-3xl font-black text-[var(--primary)] font-technical">{value}</div>
        <p className="text-[10px] uppercase font-technical font-bold tracking-wider mt-2 text-[var(--text-muted)]">{label}</p>
    </div>
);

const About: React.FC = () => {
    const introPoints = [
        { text: 'Hands-on Learner:', detail: 'I prioritize building real-world applications over just theory.' },
        { text: 'Full-Stack & AI:', detail: 'Focused on integrating AI models into practical web solutions.' },
        { text: 'Problem Solver:', detail: 'I enjoy debugging complex issues and optimizing system architecture.' },
    ];

    const contactInfo = [
        { icon: <CalendarIcon className="w-5 h-5 text-[var(--primary)]" />, label: 'Age:', value: '20' },
        { icon: <LocationIcon className="w-5 h-5 text-[var(--primary)]" />, label: 'Location:', value: 'Karur, TN, India' },
        { icon: <MailIcon className="w-5 h-5 text-[var(--primary)]" />, label: 'Email:', value: 'Sujanpalanisamy20@gmail.com' },
        { icon: <PhoneIcon className="w-5 h-5 text-[var(--primary)]" />, label: 'Phone:', value: '+91-8610477052' },
    ];

    return (
        <SectionWrapper id="about" title="ABOUT" subtitle="ENGINEERING PROFILE & TELEMETRY">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-6 observe-me font-primary" style={{ color: 'var(--text-main)', opacity: 0.95, transitionDelay: '100ms' }}>
                        <p className="leading-relaxed text-justify text-[var(--text-muted)]">
                            I am an undergraduate Information Technology student with a strong interest in building practical, real-world software systems. My journey into technology began with curiosity about how applications work behind the scenes, which gradually evolved into a passion for developing complete solutions that combine frontend design, backend logic, and intelligent features.
                        </p>
                        <p className="leading-relaxed text-justify text-[var(--text-muted)]">
                            I strongly believe that the most effective way to learn technology is through hands-on experience. Rather than limiting myself to theory, I actively work on projects that help me understand system design, data handling, and application flow in depth. I enjoy building applications from scratch, debugging complex issues, and refining both functionality and user experience to create clean and reliable software.
                        </p>
                        <div className="pt-6 border-t border-white/10 text-center">
                            <p className="font-editorial text-xl text-[var(--text-main)] tracking-wide font-light">
                                “Motivated by curiosity, driven by learning, and committed to building meaningful software.”
                            </p>
                        </div>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                        {introPoints.map((point, index) => (
                            <li key={index} className="flex items-start observe-me" style={{ transitionDelay: `${200 + index * 100}ms` }}>
                                <Icon name="Check" className="w-4 h-4 text-[var(--primary)] mr-3 mt-1.5 flex-shrink-0" />
                                <div>
                                    <strong className="block mb-1 text-sm font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>{point.text}</strong>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{point.detail}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* What I'm Looking For Card */}
                    <div
                        className="glass-card p-6 observe-me border-l-4 border-l-[var(--primary)]"
                        style={{ transitionDelay: '500ms' }}
                    >
                        <h5 className="font-technical text-xs font-bold flex items-center mb-3" style={{ color: 'var(--text-main)' }}>
                            <SearchIcon className="w-4 h-4 mr-2 text-[var(--primary)]" /> SEARCH DIRECTION
                        </h5>
                        <p className="leading-relaxed text-sm text-[var(--text-muted)]">
                            Currently seeking <strong className="text-[var(--primary)] font-bold font-technical">APP DEVELOPER INTERN / WEB DEVELOPER INTERN / AI INTERN</strong> roles. Open to internships, research positions, and challenging project collaborations.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-2 gap-4">
                        <StatBox value="7.66" label="CGPA" delay="200ms" />
                        <StatBox value="5+" label="Projects" delay="300ms" />
                        <StatBox value="2+" label="Languages" delay="450ms" />
                        <StatBox value="8+" label="Achievements" delay="600ms" />
                    </div>

                    {/* Areas of Interest */}
                    <div
                        className="glass-card p-6 observe-me"
                        style={{ transitionDelay: '700ms' }}
                    >
                        <h4 className="text-xs font-technical font-bold mb-4 flex items-center gap-2">
                            <Icon name="Brain" className="w-4 h-4 text-[var(--primary)]" />
                            AREAS OF INTEREST
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {['Cybersecurity', 'Networking', 'Database Management', 'Artificial Intelligence', 'App Development'].map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 text-[10px] rounded font-technical cursor-default font-semibold text-[var(--text-muted)] border border-white/5 bg-white/[0.02] hover:border-[var(--primary)] hover:text-[var(--text-main)] transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info Balance Card */}
                    <div
                        className="glass-card p-6 observe-me space-y-4"
                        style={{ transitionDelay: '800ms' }}
                    >
                        <h4 className="text-xs font-technical font-bold mb-2 flex items-center gap-2">// CONTACT TELEMETRY</h4>
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-4 group/contact">
                                <div className="p-2.5 bg-[var(--primary-soft)] border border-white/5 rounded text-[var(--primary)]">
                                    {info.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-technical font-bold tracking-widest text-[var(--text-muted)] mb-0.5">{info.label}</span>
                                    <span className="font-semibold text-xs tracking-tight transition-colors font-technical text-[var(--text-main)] group-hover/contact:text-[var(--primary)]">{info.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;

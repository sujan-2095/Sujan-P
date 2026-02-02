
import React from 'react';
import SectionWrapper from './SectionWrapper';
import Icon from './icons/Icon';
import SearchIcon from './icons/SearchIcon';
import CalendarIcon from './icons/CalendarIcon';
import LocationIcon from './icons/LocationIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

const StatBox: React.FC<{ value: string; label: string; delay?: string }> = ({ value, label, delay = '0ms' }) => (
    <div className="bg-[#262626]/50 border border-[#ACBFA4]/10 rounded-lg p-4 text-center observe-me premium-card-hover" style={{ transitionDelay: delay }}>
        <div className="text-3xl font-bold text-[#FF7F11]">{value}</div>
        <p className="text-sm text-[#ACBFA4]">{label}</p>
    </div>
);

const About: React.FC = () => {
    const introPoints = [
        { text: 'Hands-on Learner:', detail: 'I prioritize building real-world applications over just theory.' },
        { text: 'Full-Stack & AI:', detail: 'Focused on integrating AI models into practical web solutions.' },
        { text: 'Problem Solver:', detail: 'I enjoy debugging complex issues and optimizing system architecture.' },
    ];

    const contactInfo = [
        { icon: <CalendarIcon className="w-5 h-5 text-[#FF7F11]" />, label: 'Age:', value: '20' },
        { icon: <LocationIcon className="w-5 h-5 text-[#FF7F11]" />, label: 'Location:', value: 'Karur, Tamil Nadu, India' },
        { icon: <MailIcon className="w-5 h-5 text-[#FF7F11]" />, label: 'Email:', value: 'Sujanpalanisamy20@gmail.com' },
        { icon: <PhoneIcon className="w-5 h-5 text-[#FF7F11]" />, label: 'Phone:', value: '+91-8610477052' },
    ];

    return (
        <SectionWrapper id="about" title="About Me" subtitle="My Introduction">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6 text-[#E2E8CE]/90 observe-me" style={{ transitionDelay: '100ms' }}>
                        <p className="leading-relaxed">
                            I am an undergraduate Information Technology student with a strong interest in building practical, real-world software systems. My journey into technology began with curiosity about how applications work behind the scenes, which gradually evolved into a passion for developing complete solutions that combine frontend design, backend logic, and intelligent features.
                        </p>
                        <p className="leading-relaxed">
                            I strongly believe that the most effective way to learn technology is through hands-on experience. Rather than limiting myself to theory, I actively work on projects that help me understand system design, data handling, and application flow in depth. I enjoy building applications from scratch, debugging complex issues, and refining both functionality and user experience to create clean and reliable software.
                        </p>
                        <p className="leading-relaxed">
                            Over time, I have gained experience in web development and backend systems, and I have also explored AI-based applications such as OCR and emotion detection. I focus on integrating these technologies into usable applications rather than treating them as isolated experiments. This approach has helped me develop a problem-solving mindset and a deeper understanding of how modern software systems are built and deployed.
                        </p>
                        <div className="pt-4 border-t border-[#ACBFA4]/10">
                            <p className="text-[#FF7F11] font-bold italic text-lg tracking-wide">
                                "Motivated by curiosity, driven by learning, and committed to building meaningful software."
                            </p>
                        </div>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                        {introPoints.map((point, index) => (
                            <li key={index} className="flex items-start observe-me" style={{ transitionDelay: `${200 + index * 100}ms` }}>
                                <Icon name="Check" className="w-5 h-5 text-[#FF7F11] mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-[#E2E8CE] block mb-0.5">{point.text}</strong>
                                    <p className="text-[#ACBFA4]/80 text-sm leading-relaxed">{point.detail}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-[#262626]/50 border-l-4 border-[#FF7F11] p-8 rounded-r-2xl border border-[#ACBFA4]/5 observe-me" style={{ transitionDelay: '500ms' }}>
                        <h5 className="font-bold text-xl text-[#E2E8CE] flex items-center mb-3">
                            <SearchIcon className="w-6 h-6 mr-3 text-[#FF7F11]" /> What I'm Looking For
                        </h5>
                        <p className="text-[#ACBFA4] leading-relaxed">
                            Currently seeking <strong className="text-[#FF7F11]">App Developer Intern / Web Developer Intern / AI Intern</strong> roles. Open to internships, research positions, and challenging project collaborations.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-2 gap-4">
                        <StatBox value="7.8" label="CGPA" delay="700ms" />
                        <StatBox value="5+" label="Projects" delay="800ms" />
                        <StatBox value="2+" label="Languages" delay="900ms" />
                        <StatBox value="4+" label="Achievements" delay="1000ms" />
                    </div>

                    {/* Areas of Interest */}
                    <div className="bg-[#262626]/80 border border-[#ACBFA4]/10 rounded-3xl p-8 observe-me premium-card-hover" style={{ transitionDelay: '1100ms' }}>
                        <h4 className="text-[#E2E8CE] font-bold mb-6 flex items-center gap-3 text-lg">
                            <Icon name="Brain" className="w-6 h-6 text-[#FF7F11]" />
                            Areas of Interest
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {['Cybersecurity', 'Networking', 'Database Management', 'Artificial Intelligence', 'App Development'].map((item, i) => (
                                <span key={i} className="px-4 py-2 bg-[#ACBFA4]/5 border border-[#ACBFA4]/10 text-[#ACBFA4] text-sm rounded-xl hover:border-[#FF7F11]/30 hover:text-[#FF7F11] transition-all cursor-default font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info - Moved for balance */}
                    <div className="grid grid-cols-1 gap-6 p-2">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-5 observe-me group/contact" style={{ transitionDelay: `${1200 + index * 100}ms` }}>
                                <div className="p-3.5 bg-[#FF7F11]/10 rounded-2xl hover-spin border border-[#FF7F11]/5 transition-all">
                                    {info.icon.type === Icon ? info.icon : React.cloneElement(info.icon as React.ReactElement, { className: (info.icon as React.ReactElement).props.className.replace('text-orange-500', 'text-[#FF7F11]') })}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-[#ACBFA4]/60 uppercase tracking-widest leading-none mb-1.5">{info.label}</span>
                                    <span className="text-[#E2E8CE] font-semibold text-base group-hover:text-[#FF7F11] transition-colors">{info.value}</span>
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

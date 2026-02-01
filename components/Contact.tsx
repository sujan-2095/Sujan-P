
import React from 'react';
import SectionWrapper from './SectionWrapper';
import MailIcon from './icons/MailIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';
import SendIcon from './icons/SendIcon';

const Contact: React.FC = () => {
    return (
        <SectionWrapper id="contact" title="Get in Touch" subtitle="Let’s Connect">
            <div className="max-w-6xl mx-auto pt-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-12 observe-me" style={{ transitionDelay: '100ms' }}>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-[#E2E8CE] mb-6">Let's Connect!</h3>
                            <p className="text-xl text-[#ACBFA4] leading-relaxed max-w-lg">
                                I am available for internships, projects, or collaboration opportunities.
                                Feel free to contact me via email, GitHub, or LinkedIn.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: <MailIcon className="w-6 h-6" />, title: 'Email', value: 'Sujanpalanisamy20@gmail.com', href: 'mailto:Sujanpalanisamy20@gmail.com' },
                                { icon: <PhoneIcon className="w-6 h-6" />, title: 'Phone', value: '+91-8610477052', href: 'tel:+918610477052' },
                                { icon: <LocationIcon className="w-6 h-6" />, title: 'Location', value: 'Ariyur, Paramathi, Karur – 639 111' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 bg-[#262626]/50 backdrop-blur-sm rounded-2xl border border-[#ACBFA4]/10 hover:border-[#FF7F11]/30 transition-all duration-300 group observe-me hover-lift" style={{ transitionDelay: `${200 + idx * 100}ms` }}>
                                    <div className="w-14 h-14 flex items-center justify-center bg-[#FF7F11]/10 rounded-xl text-[#FF7F11] hover-spin transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#ACBFA4]/60 uppercase tracking-widest mb-1">{item.title}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-lg font-semibold text-[#E2E8CE] hover:text-[#FF7F11] transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-semibold text-[#E2E8CE]">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: <GithubIcon className="w-6 h-6" />, href: 'https://github.com/sujan-2095' },
                                { icon: <LinkedinIcon className="w-6 h-6" />, href: 'https://www.linkedin.com/in/sujan2095' },
                                { icon: <MailIcon className="w-6 h-6" />, href: 'mailto:Sujanpalanisamy20@gmail.com' },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#262626]/50 text-[#ACBFA4] border border-[#ACBFA4]/10 hover:bg-[#FF7F11] hover:text-[#262626] transition-all duration-300 shadow-lg hover-spin">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-[#262626]/50 backdrop-blur-md p-10 rounded-3xl border border-[#ACBFA4]/10 shadow-2xl observe-me" style={{ transitionDelay: '300ms' }}>
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-[#ACBFA4]/80 uppercase tracking-wider pl-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-[#262626]/30 border border-[#ACBFA4]/10 rounded-xl px-4 py-4 text-[#E2E8CE] placeholder:text-[#ACBFA4]/30 focus:outline-none focus:border-[#FF7F11]/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-[#ACBFA4]/80 uppercase tracking-wider pl-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-[#262626]/30 border border-[#ACBFA4]/10 rounded-xl px-4 py-4 text-[#E2E8CE] placeholder:text-[#ACBFA4]/30 focus:outline-none focus:border-[#FF7F11]/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-[#ACBFA4]/80 uppercase tracking-wider pl-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-[#262626]/30 border border-[#ACBFA4]/10 rounded-xl px-4 py-4 text-[#E2E8CE] placeholder:text-[#ACBFA4]/30 focus:outline-none focus:border-[#FF7F11]/50 transition-all"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-[#ACBFA4]/80 uppercase tracking-wider pl-1">Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className="w-full bg-[#262626]/30 border border-[#ACBFA4]/10 rounded-xl px-4 py-4 text-[#E2E8CE] placeholder:text-[#ACBFA4]/30 focus:outline-none focus:border-[#FF7F11]/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full py-5 bg-gradient-to-r from-[#FF7F11] to-[#FF7F11]/80 text-[#262626] font-bold text-lg rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(255,127,17,0.3)] transform hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-lg btn-shine-container">
                                <SendIcon className="w-6 h-6" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;

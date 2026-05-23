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
        <SectionWrapper id="contact" title="CONTACT" subtitle="COMMUNICATION INITIATION & TELEMETRY">
            <div className="max-w-6xl mx-auto pt-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-8 observe-me" style={{ transitionDelay: '100ms' }}>
                        <div>
                          <span className="font-technical text-[10px] tracking-widest text-[var(--primary)] block mb-2">// INITIATE CONNECT PROTOCOL</span>
                          <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-4" style={{ color: 'var(--text-main)' }}>Let's Create Systems</h3>
                          <p className="text-sm leading-relaxed max-w-lg text-justify text-[var(--text-muted)]">
                              I am currently available for app development, full-stack, or AI intern opportunities. Let's build optimized platforms that execute efficiently.
                          </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: <MailIcon className="w-5 h-5" />, title: 'Email Address', value: 'Sujanpalanisamy20@gmail.com', href: 'mailto:Sujanpalanisamy20@gmail.com' },
                                { icon: <PhoneIcon className="w-5 h-5" />, title: 'Direct Line', value: '+91-8610477052', href: 'tel:+918610477052' },
                                { icon: <LocationIcon className="w-5 h-5" />, title: 'Location Index', value: 'Paramathi, Karur, TN, India' },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="glass-card flex items-center gap-4 p-5 observe-me"
                                    style={{ transitionDelay: `${200 + idx * 100}ms` }}
                                >
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded transition-transform bg-[var(--primary-soft)] border border-white/5 text-[var(--primary)]"
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-technical font-bold uppercase tracking-widest mb-1 text-[var(--text-muted)]">{item.title}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-sm font-semibold tracking-tight transition-colors text-[var(--text-main)] hover:text-[var(--primary)]">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-semibold text-[var(--text-main)]">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Badges */}
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: <GithubIcon className="w-4 h-4" />, href: 'https://github.com/sujan-2095', name: 'GITHUB' },
                                { icon: <LinkedinIcon className="w-4 h-4" />, href: 'https://www.linkedin.com/in/sujan2095p', name: 'LINKEDIN' },
                                { icon: <MailIcon className="w-4 h-4" />, href: 'mailto:Sujanpalanisamy20@gmail.com', name: 'EMAIL' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-technical text-[9px] font-semibold px-3 py-1.5 flex items-center gap-2 rounded border border-white/5 bg-white/[0.02] text-[var(--text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                                >
                                    {social.icon}
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div
                        className="glass-card p-8 observe-me"
                        style={{ transitionDelay: '300ms' }}
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--primary)] pl-1 block">// INPUT_NAME</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full rounded px-4 py-3 text-sm transition-all"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            border: '2px solid rgba(255, 255, 255, 0.08)',
                                            color: 'var(--text-main)',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--primary)] pl-1 block">// INPUT_EMAIL</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full rounded px-4 py-3 text-sm transition-all"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            border: '2px solid rgba(255, 255, 255, 0.08)',
                                            color: 'var(--text-main)',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--primary)] pl-1 block">// INPUT_SUBJECT</label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full rounded px-4 py-3 text-sm transition-all"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '2px solid rgba(255, 255, 255, 0.08)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-technical font-bold uppercase tracking-widest text-[var(--primary)] pl-1 block">// INPUT_MESSAGE</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    className="w-full rounded px-4 py-3 text-sm transition-all resize-none"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '2px solid rgba(255, 255, 255, 0.08)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                ></textarea>
                            </div>

                            <button className="btn-primary w-full py-3.5 text-xs flex items-center justify-center gap-2 font-bold shadow-lg transition-transform active:scale-[0.98]">
                                <SendIcon className="w-4 h-4" /> TRANSMIT_PACKET.EXE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;

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
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--text-main)', fontFamily: "'Poppins', sans-serif" }}>Let's Connect!</h3>
                            <p className="text-xl leading-relaxed max-w-lg text-justify" style={{ color: 'var(--text-muted)' }}>
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
                                <div
                                    key={idx}
                                    className="flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 group observe-me"
                                    style={{
                                        transitionDelay: `${200 + idx * 100}ms`,
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 flex items-center justify-center rounded-full transition-transform"
                                        style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>{item.title}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-lg font-semibold transition-colors" style={{ color: 'var(--text-main)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-semibold" style={{ color: 'var(--text-main)' }}>{item.value}</p>
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
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg hover-lift"
                                    style={{
                                        background: 'var(--bg-card)',
                                        color: 'var(--text-muted)',
                                        border: '1px solid var(--border-subtle)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--primary)';
                                        e.currentTarget.style.color = '#262626';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--bg-card)';
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div
                        className="p-10 rounded-3xl shadow-2xl observe-me"
                        style={{
                            transitionDelay: '300ms',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)'
                        }}
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full rounded-xl px-4 py-4 transition-all"
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--border)',
                                            color: 'var(--text-main)',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full rounded-xl px-4 py-4 transition-all"
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--border)',
                                            color: 'var(--text-main)',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>Subject</label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full rounded-xl px-4 py-4 transition-all"
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className="w-full rounded-xl px-4 py-4 transition-all resize-none"
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                                ></textarea>
                            </div>

                            <button className="btn-primary w-full py-5 text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg btn-shine-container">
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

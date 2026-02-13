import React, { useState, useEffect } from 'react';
import MailIcon from './icons/MailIcon';

const MobileStickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed z-40 md:hidden transition-all duration-500 ease-out"
            style={{
                bottom: '20px',
                left: '50%',
                transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(100px)',
                opacity: isVisible ? 1 : 0
            }}
        >
            <a
                href="#contact"
                onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#contact');
                    if (element) {
                        const offset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }}
                className="flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl"
                style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--primary)',
                    color: 'var(--text-main)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                }}
            >
                <span
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    style={{ background: 'var(--primary)', color: 'white' }}
                >
                    <MailIcon className="w-4 h-4" />
                </span>
                <span className="font-semibold text-sm">Let's Talk</span>
            </a>
        </div>
    );
};

export default MobileStickyCTA;

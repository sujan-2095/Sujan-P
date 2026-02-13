
import React from 'react';
import HeartIcon from './icons/HeartIcon';

const Footer: React.FC = () => {
    return (
        <footer
            className="py-8 border-t"
            style={{
                background: 'var(--bg-surface)',
                borderColor: 'var(--border)'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ color: 'var(--text-muted)' }}>
                <p>&copy; {new Date().getFullYear()} Sujan P. All rights reserved.</p>
                <p className="text-sm mt-2 flex items-center justify-center">
                    Made with <HeartIcon className="w-4 h-4 mx-1.5 animate-heartbeat" style={{ color: 'var(--primary)' }} /> using React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;

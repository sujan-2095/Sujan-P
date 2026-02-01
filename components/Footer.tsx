
import React from 'react';
import HeartIcon from './icons/HeartIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#262626] border-t border-[#ACBFA4]/10 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#ACBFA4]/60">
                <p>&copy; {new Date().getFullYear()} Sujan P. All rights reserved.</p>
                <p className="text-sm mt-2 flex items-center justify-center">
                    Made with <HeartIcon className="w-4 h-4 text-[#FF7F11] mx-1.5 animate-heartbeat" /> using React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;

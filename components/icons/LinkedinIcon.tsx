
import React from 'react';
const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M8 11v5"></path>
        <path d="M8 8v.01"></path>
        <path d="M12 16v-5"></path>
        <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
    </svg>
);
export default LinkedinIcon;

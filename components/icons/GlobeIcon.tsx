
import React from 'react';
const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.353 0-2.646.32-3.795.89v16.22c1.15.57 2.442.89 3.795.89s2.646-.32 3.795-.89V3.89A13.483 13.483 0 0012 3z" />
    </svg>
);
export default GlobeIcon;

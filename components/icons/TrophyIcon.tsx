
import React from 'react';
const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.316-5.043l.823-1.48a.75.75 0 011.362-.001l.823 1.48a9.75 9.75 0 011.316 5.043zM16.5 18.75V15a2.25 2.25 0 10-4.5 0v3.75m0-3.75V15a2.25 2.25 0 01-4.5 0v3.75m4.5 3.75h-9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.75A2.25 2.25 0 004.5 6v1.5a2.25 2.25 0 002.25 2.25H9v-4.5zM15 3.75h2.25A2.25 2.25 0 0119.5 6v1.5a2.25 2.25 0 01-2.25 2.25H15v-4.5z" />
    </svg>
);
export default TrophyIcon;

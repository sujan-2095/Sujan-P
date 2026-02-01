
import React from 'react';
import type { IconType } from '../../types';
import GlobeIcon from './GlobeIcon';
import BrainIcon from './BrainIcon';
import MobileIcon from './MobileIcon';
import DatabaseIcon from './DatabaseIcon';
import TrophyIcon from './TrophyIcon';
import FileAltIcon from './FileAltIcon';
import UsersIcon from './UsersIcon';
import GraduationCapIcon from './GraduationCapIcon';
import SchoolIcon from './SchoolIcon';
import CheckIcon from './CheckIcon';
import CodeIcon from './CodeIcon';


interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconType;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Globe':
      return <GlobeIcon {...props} />;
    case 'Brain':
      return <BrainIcon {...props} />;
    case 'Mobile':
      return <MobileIcon {...props} />;
    case 'Database':
      return <DatabaseIcon {...props} />;
    case 'Trophy':
      return <TrophyIcon {...props} />;
    case 'FileAlt':
      return <FileAltIcon {...props} />;
    case 'Users':
      return <UsersIcon {...props} />;
    case 'GraduationCap':
      return <GraduationCapIcon {...props} />;
    case 'School':
      return <SchoolIcon {...props} />;
    case 'Check':
      return <CheckIcon {...props} />;
    case 'Code':
      return <CodeIcon {...props} />;
    default:
      return null;
  }
};

export default Icon;

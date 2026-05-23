export type IconType = 'Globe' | 'Brain' | 'Mobile' | 'Database' | 'Trophy' | 'FileAlt' | 'Users' | 'GraduationCap' | 'School' | 'Check' | 'Code';

export interface DetailedProjectContent {
  duration: string;
  teamSize: string;
  role: string;
  techStack: string[];
  overview: string;
  leadership: string[];
  problemStatement: {
    points: string[];
    summary: string;
  };
  solution: string[];
  keyFeatures: {
    category: string;
    points: string[];
  }[];
  systemArchitecture?: {
    category: string;
    points: string[];
  }[];
  architectureImage?: string;
  databaseConcepts: string[];
  challenges: string[];
  results: string[];
  achievement?: string;
  futureEnhancements?: string[];
  developedBy?: {
    name: string;
    dept: string;
    college: string;
  };
}

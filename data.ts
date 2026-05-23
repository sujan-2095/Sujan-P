import type { IconType, DetailedProjectContent } from './types';

export const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CERTIFICATIONS', href: '#achievements' },
  { name: 'CONTACT', href: '#contact' },
];

export const SKILLS_DATA: {
  category: string;
  icon: IconType;
  title: string;
  description: string;
  skills: ({ name: string; level?: string; } | string)[];
}[] = [
    {
      category: 'Programming Languages',
      icon: 'Code',
      title: 'Programming Languages',
      description: 'Foundational languages for cross-domain technical implementations.',
      skills: ['Python', 'Java', 'JavaScript (ES6)', 'C', 'C++', 'Bash Script'],
    },
    {
      category: 'Frontend Development',
      icon: 'Globe',
      title: 'Frontend Development',
      description: 'Building interactive and responsive user experiences.',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js'],
    },
    {
      category: 'Backend Development',
      icon: 'Database',
      title: 'Backend Development',
      description: 'Architecting server-side logic and API systems.',
      skills: ['Python (Flask)', 'Node.js', 'Express.js', 'FastAPI', 'Django', 'Jinja'],
    },
    {
      category: 'Databases',
      icon: 'Database',
      title: 'Databases',
      description: 'Managing and optimizing structured and non-structured data stores.',
      skills: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL'],
    },
    {
      category: 'App Development',
      icon: 'Mobile',
      title: 'App Development (Learning)',
      description: 'Exploring mobile ecosystems and modern UI frameworks.',
      skills: ['Java', 'Android Fundamentals', 'REST API Integration', 'UI/UX Basics', 'Flutter (basic)'],
    },
    {
      category: 'AI & Machine Learning',
      icon: 'Brain',
      title: 'AI & Machine Learning',
      description: 'Implementing intelligent systems and neural network pipelines.',
      skills: ['CNNs', 'TensorFlow', 'PyTorch', 'Keras', 'MLflow', 'Scikit-Learn', 'Gemini AI API'],
    },
    {
      category: 'Data Handling',
      icon: 'Database',
      title: 'Data Handling',
      description: 'Processing and analyzing diverse datasets for model inference.',
      skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Plotly', 'Model inference'],
    },
    {
      category: 'Tools & Platforms',
      icon: 'FileAlt',
      title: 'Tools & Platforms',
      description: 'Professional toolset for deployment and design collaboration.',
      skills: ['Git', 'GitHub', 'Linux', 'Render', 'Figma', 'Canva', 'Adobe Suite', 'Raspberry Pi', 'Windows Terminal'],
    },
  ];

export const SOFT_SKILLS = [
  'Problem solving',
  'Debugging',
  'Optimization',
  'Leadership',
  'Adaptability',
  'Collaboration',
];

export interface Project {
  title: string;
  duration: string;
  subtitle: string;
  tags: string[];
  features: string[];
  github: string;
  liveUrl?: string;
  image?: string;
  detailedContent?: DetailedProjectContent;
}

export const PROJECTS: Project[] = [
  {
    title: 'AutoQuizzer – AI Powered Quiz Generator',
    duration: '3 Months',
    subtitle: 'AI-Based Educational Assessment Platform',
    tags: ['React', 'TypeScript', 'Node.js', 'SQLite', 'Google Gemini API'],
    image: '/assets/Projects/AUTOQUIZZER.png',
    features: [
      'AI-powered platform that automatically generates MCQ quizzes from study materials and documents.',
      'Implemented quiz generation, performance tracking, PDF export, and secure user dashboards.',
      'Impact: Reduced manual quiz creation time and improved interactive learning experience.',
    ],
    github: 'https://github.com/sujan-2095/AutoQuizzer',
    liveUrl: 'https://autoquizzer.onrender.com',
    detailedContent: {
      duration: '3 Months',
      teamSize: '4 Members',
      role: 'Team Leader • Full-Stack Developer • AI Integration Engineer',
      techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'SQLite', 'Google Gemini API', 'Tailwind CSS', 'jsPDF'],
      overview: 'Creating high-quality assessments manually is time-consuming for both educators and students. AutoQuizzer is an AI-powered full-stack platform that automatically generates multiple-choice quizzes from educational content using Generative AI.\n\nThe system allows users to input text, upload learning materials, or provide topics, and instantly transforms them into structured quizzes with customizable difficulty levels. The platform also supports quiz management, performance tracking, PDF export, and real-time evaluation.',
      leadership: [
        'Planning system architecture and project workflow',
        'Coordinating frontend, backend, and AI integration tasks',
        'Managing development timelines and feature implementation',
        'Leading API integration and database design',
        'Reviewing modules and ensuring smooth collaboration among team members'
      ],
      problemStatement: {
        points: [
          'Significant manual effort required to design high-quality quizzes',
          'Repetitive question preparation that lacks variation',
          'Difficulty maintaining consistent question quality and difficulty levels',
          'Limited personalized assessment generation'
        ],
        summary: 'This creates inefficiency in educational workflows and slows down assessment preparation.'
      },
      solution: [
        'Automatically generates MCQs using Google Gemini AI',
        'Creates structured quizzes from educational materials',
        'Provides instant scoring and performance analytics',
        'Supports downloadable PDF-based assessments',
        'Maintains personalized quiz dashboards for users'
      ],
      keyFeatures: [
        {
          category: 'Secure Authentication System',
          points: [
            'User registration and secure login',
            'Session-based authentication token management',
            'Personalized quiz dashboards displaying history and metrics',
            'Secure user-specific quiz storage'
          ]
        },
        {
          category: 'AI Quiz Generation Engine',
          points: [
            'Integrated Google Gemini 2.0 Flash API',
            'Generates intelligent MCQs from raw text input, uploaded materials, or custom topics',
            'Supports customization of difficulty level and question counts',
            'JSON-based structured quiz response parsing'
          ]
        },
        {
          category: 'Interactive Quiz Engine',
          points: [
            'Real-time quiz taking interface with timer',
            'Instant answer validation and final score breakdown',
            'Progress tracking and navigation between questions',
            'Draft-saving functionality to complete quizzes later'
          ]
        },
        {
          category: 'Performance Analytics',
          points: [
            'Score tracking over time with graphical stats',
            'Detailed quiz history management',
            'Result breakdown analysis with correct vs incorrect answer comparisons'
          ]
        },
        {
          category: 'PDF Export Utility',
          points: [
            'Generates professional downloadable quiz PDFs',
            'Includes styled layouts for offline sharing and grading'
          ]
        },
        {
          category: 'Dashboard & Search System',
          points: [
            'Centralized workspace for quiz management',
            'Search and filter capabilities to sort past quizzes',
            'Quick actions for deletion and sharing'
          ]
        }
      ],
      architectureImage: '/assets/Projects/Autoquizzer Arch.png',
      databaseConcepts: [
        'Relational Schema Design',
        'ACID Transactions',
        'Data Normalization',
        'Query Optimization',
        'User-Specific Data Isolation',
        'Persistent Quiz Storage'
      ],
      challenges: [
        'Structured AI Response Generation: Ensuring the AI consistently generated valid quiz JSON structures required advanced prompt engineering and response validation mechanisms.',
        'Dynamic Quiz Rendering: Handling variable-length quizzes and dynamically generated question sets required flexible frontend component architecture.',
        'State Persistence: Implemented local storage and database synchronization to preserve quiz progress and user history.',
        'PDF Formatting: Generating properly formatted downloadable quizzes while maintaining responsive layouts was technically challenging.'
      ],
      results: [
        'Reduced manual quiz creation effort significantly',
        'Generated structured MCQs instantly from raw materials',
        'Improved assessment preparation efficiency',
        'Delivered responsive full-stack educational platform',
        'Demonstrated practical integration of Generative AI into real-world applications'
      ],
      achievement: 'Presented as a research paper at the 5th International Conference on Evolutionary Computing and Mobile Sustainable Networks (ICECMSN 2025)',
      developedBy: {
        name: 'Sujan P & Team',
        dept: 'B.Tech Information Technology',
        college: 'M. Kumarasamy College of Engineering'
      }
    }
  },
  {
    title: 'MedCard – Healthcare System for Sanitary Workers',
    duration: '3.5 Months',
    subtitle: 'Smart Health Record & Disease Monitoring Platform',
    tags: ['Python', 'Flask', 'SQLite', 'QR Code Integration', 'AI Monitoring'],
    image: '/assets/Projects/MEDCARD.png',
    features: [
      'Centralized digital healthcare record management platform with QR-based patient identification.',
      'Designed to support sanitary workers with AI-powered disease outbreak detection.',
      'Impact: Improved healthcare access, minimized manual record-keeping, and earned the Dr. Kalam Young Achiever Award.',
    ],
    github: 'https://github.com/sujan-2095/NHIC',
    liveUrl: 'https://nhic.onrender.com/',
    detailedContent: {
      duration: '3.5 Months',
      teamSize: '4 Members',
      role: 'Team Leader • Backend Developer • Database Designer',
      techStack: ['Python', 'Flask', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'QR Code Integration', 'Openpyxl', 'AI-Based Monitoring'],
      overview: 'MedCard is an AI-powered healthcare management platform specially designed to support sanitary workers by providing centralized digital medical records, QR-based identification, health monitoring, and intelligent outbreak detection.\n\nThe system helps healthcare administrators monitor worker health conditions, manage medical histories, detect disease clusters, and improve access to healthcare services through a secure and scalable web platform.',
      leadership: [
        'Designing backend architecture and database structure',
        'Managing project workflow and module allocation',
        'Leading Flask backend development',
        'Implementing authentication and role-based access control',
        'Supervising AI-based outbreak monitoring integration',
        'Coordinating testing, debugging, and deployment activities'
      ],
      problemStatement: {
        points: [
          'Infectious diseases and exposure to unsafe working environments',
          'Poor medical record management and delayed healthcare access',
          'Lack of centralized health monitoring for frontline sanitation workers'
        ],
        summary: 'Traditional systems fail to provide efficient tracking, rapid identification, and proactive healthcare monitoring for frontline sanitation workers.'
      },
      solution: [
        'Digitizes sanitary worker medical records',
        'Generates QR-based healthcare identification cards',
        'Tracks hospital visits and medical history',
        'Detects disease outbreak patterns automatically',
        'Provides administrative analytics and health reports',
        'Enables quick healthcare access and monitoring'
      ],
      keyFeatures: [
        {
          category: 'Secure Authentication & RBAC',
          points: [
            'Separate dashboards for Admins and Workers',
            'Secure login and session management',
            'Role-based access control for sensitive health data'
          ]
        },
        {
          category: 'QR-Based MedCard Identification',
          points: [
            'Unique healthcare ID generation',
            'QR-code-based worker identification',
            'Fast patient lookup and access'
          ]
        },
        {
          category: 'Medical Record Management',
          points: [
            'Digital storage of diagnoses, prescriptions, scan reports, and visit history',
            'Centralized worker healthcare database'
          ]
        },
        {
          category: 'AI-Based Outbreak Detection',
          points: [
            'Intelligent disease cluster monitoring',
            'Geographic outbreak tracking',
            'Automated health alerts and notifications'
          ]
        },
        {
          category: 'Admin Dashboard & Analytics',
          points: [
            'Worker health analytics',
            'Disease trend visualization',
            'Search and filter functionality',
            'Excel report generation'
          ]
        },
        {
          category: 'System Audit Logs',
          points: [
            'Tracks critical actions and updates',
            'Improves security and transparency',
            'Maintains healthcare record traceability'
          ]
        }
      ],
      architectureImage: '/assets/Projects/Medcard Arch.png',
      databaseConcepts: [
        'Relational Data Modeling',
        'Foreign Key Constraints',
        'ACID Transactions',
        'Data Normalization',
        'Query Optimization',
        'Role-Based Access Control (RBAC)'
      ],
      challenges: [
        'QR-Based Healthcare Authentication: Implementing secure QR-code identification and fast medical record retrieval required backend optimization and validation.',
        'AI-Based Disease Monitoring: Designing intelligent outbreak tracking mechanisms for repeated disease patterns involved complex conditional analysis and monitoring logic.',
        'Sensitive Healthcare Data Protection: Ensuring secure access to confidential medical records required proper RBAC implementation and database security.',
        'Dynamic Report Generation: Generating structured Excel reports from healthcare datasets while maintaining performance was technically challenging.'
      ],
      results: [
        'Improved healthcare accessibility for sanitary workers',
        'Reduced manual medical documentation processes',
        'Enabled faster healthcare identification through QR technology',
        'Improved monitoring of worker health conditions',
        'Demonstrated practical AI integration in public healthcare systems'
      ],
      futureEnhancements: [
        'Cloud database integration',
        'Mobile healthcare application',
        'AI-powered disease prediction',
        'Multi-hospital integration',
        'SMS and email health alerts',
        'Real-time wearable device integration'
      ],
      achievement: 'Received the Dr. Kalam Young Achiever Award 2024 for innovation and social impact through the MedCard healthcare solution.',
      developedBy: {
        name: 'Sujan P & Team',
        dept: 'B.Tech Information Technology',
        college: 'M. Kumarasamy College of Engineering'
      }
    }
  },
  {
    title: 'AI-Powered Tamil OCR',
    duration: '3 Months',
    subtitle: 'Efficient Government Documentation',
    tags: ['Python', 'CNN', 'Deep Learning', 'Flask'],
    features: [
      'Deep learning-based OCR for handwritten Tamil text.',
      'CNN recognition pipeline integrated with Flask.',
      'Impact: Digitized regional language documents with 85% accuracy.',
    ],
    github: 'https://github.com/sujan-2095/AI-POWERED-OCR-FOR-EFFICIENT-GOVERNMENT-DOCUMENTATION',
  },
  {
    title: 'Crime Record Management System (CRMS)',
    duration: '2.5 Months',
    subtitle: 'Secure Crime Data & Investigation Management Platform',
    tags: ['Python', 'Flask', 'SQLite', 'Bootstrap', 'Flask-Login'],
    image: '/assets/Projects/CRMS.png',
    features: [
      'Centralized full-stack web application designed to digitize and manage crime records securely.',
      'Enables efficient offender profiles tracking, legal proceedings monitoring, and officer case logging.',
      'Impact: Streamlined investigation workflows, reduced manual paperwork, and enforced proper RBAC controls.',
    ],
    github: 'https://github.com/sujan-2095/CRMS',
    liveUrl: 'https://crms-vs4n.onrender.com/',
    detailedContent: {
      duration: '2.5 Months',
      teamSize: 'Solo Project',
      role: 'Full-Stack Developer • Database Designer',
      techStack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Flask-Login'],
      overview: 'The Crime Record Management System (CRMS) is a secure full-stack web application developed to digitize and centralize crime-related records for law enforcement agencies.\n\nThe system enables efficient crime tracking, offender management, legal proceeding monitoring, and secure role-based access to sensitive case information through a structured and scalable platform.',
      leadership: [
        'Designing complete system architecture',
        'Developing frontend and backend modules',
        'Creating and optimizing the database schema',
        'Implementing authentication and role-based access control',
        'Building RESTful APIs',
        'Managing deployment, testing, and debugging',
        'Designing dashboards and report systems'
      ],
      problemStatement: {
        points: [
          'Manual paperwork and fragmented case records',
          'Slow data retrieval and limited investigation tracking',
          'Weak access control mechanisms for sensitive case files'
        ],
        summary: 'Traditional crime record systems rely heavily on physical methods, reducing operational efficiency and increasing the risk of data inconsistency and security issues.'
      },
      solution: [
        'Digitizes crime and offender records',
        'Enables secure role-based access control',
        'Tracks investigations and legal proceedings',
        'Provides real-time crime status updates',
        'Supports advanced search, filtering, and report generation'
      ],
      keyFeatures: [
        {
          category: 'Authentication & Role-Based Access Control',
          points: [
            'Secure login system for admins and officers',
            'Role-based access permissions',
            'User activity monitoring'
          ]
        },
        {
          category: 'Crime Record Management',
          points: [
            'Add, update, and track crime reports',
            'Real-time case status management',
            'Centralized digital record storage'
          ]
        },
        {
          category: 'Offender Management',
          points: [
            'Maintain offender profiles',
            'Link offenders to multiple cases',
            'Store background and biometric-related information'
          ]
        },
        {
          category: 'Legal Proceedings Module',
          points: [
            'Court hearing and verdict tracking',
            'Sentencing management',
            'Legal document handling'
          ]
        },
        {
          category: 'Investigation Tracking',
          points: [
            'Officer activity logging',
            'Investigation progress monitoring',
            'Case collaboration workflow'
          ]
        },
        {
          category: 'Search & Reporting System',
          points: [
            'Crime trend analysis',
            'Advanced filtering and search',
            'Report generation for unresolved and active cases'
          ]
        }
      ],
      architectureImage: '/assets/Projects/CRMS Arch.png',
      databaseConcepts: [
        'ER Modeling',
        'Relational Schema Design',
        'Data Normalization',
        'ACID Transactions',
        'SQL Query Optimization',
        'Triggers & Constraints',
        'Role-Based Access Control (RBAC)'
      ],
      challenges: [
        'Secure Access Control: Implementing proper role-based access to sensitive crime records required careful authentication and permission handling.',
        'Database Relationship Design: Managing relationships between crimes, offenders, investigations, and legal records required efficient relational modeling.',
        'Real-Time Status Tracking: Designing a system capable of dynamically updating investigation and case statuses was technically challenging.',
        'Search Optimization: Efficiently retrieving crime records from large datasets required optimized query structures and filtering logic.'
      ],
      results: [
        'Improved crime record accessibility and organization',
        'Reduced dependency on manual paperwork',
        'Enhanced investigation tracking and monitoring',
        'Improved data security through RBAC implementation',
        'Demonstrated practical application of DBMS concepts in real-world systems'
      ],
      futureEnhancements: [
        'Cloud database integration',
        'Facial recognition for offender identification',
        'AI-powered crime prediction analytics',
        'Mobile application support',
        'Multi-station centralized deployment',
        'Advanced forensic evidence management'
      ],
      developedBy: {
        name: 'Sujan P',
        dept: 'B.Tech Information Technology',
        college: 'M. Kumarasamy College of Engineering'
      }
    }
  },
  {
    title: 'Emotion Detection',
    duration: '2 Months',
    subtitle: 'Deep Learning & Computer Vision',
    tags: ['Python', 'CNN', 'OpenCV', 'Deep Learning'],
    features: [
      'Real-time facial emotion recognition using OpenCV & CNN.',
      'Classified emotions (happy, sad, angry) from live feed.',
      'Impact: Demonstrated viable real-time analysis for user feedback systems.',
    ],
    github: 'https://github.com/sujan-2095/Emotion-Detection-with-Deep-Learning',
  },
  {
    title: 'Airline Reservation System',
    duration: '1.5 Months',
    subtitle: 'Java Web Application',
    tags: ['Java', 'Servlets', 'HTML/CSS', 'CSV Handling'],
    features: [
      'Simulation of airline booking with seat availability checks.',
      'Admin and user modules for flight management.',
      'Impact: Streamlined booking process logic preventing overbooking.',
    ],
    github: 'https://github.com/sujan-2095/',
  },
  {
    title: 'Slot Machine Game',
    duration: '2 Weeks',
    subtitle: 'Randomness Experiment',
    tags: ['Python'],
    features: [
      'Experiment in randomness using Python memory IDs.',
      'Analyzed predictability and bias in non-standard RNG.',
      'Impact: Deepened understanding of PRNG algorithms and memory management.',
    ],
    github: 'https://github.com/sujan-2095/',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Dr. Kalam Young Achiever Award',
    issuer: 'World Youth Federation | 2025',
    description: 'Awarded for innovation, technical excellence, leadership, and academic achievements in engineering.',
    certificateUrl: '/assets/certificates/WYF - Kalam Awards.jpg',
    icon: 'Trophy' as IconType,
  },
  {
    title: 'IEEE International Conference Paper',
    issuer: 'ICECMSN 2025',
    description: 'Presented research on an AI-powered MCQ generation system for automated educational assessments.',
    certificateUrl: '/assets/certificates/IEEE - Autoquizzer.jpg',
    icon: 'FileAlt' as IconType,
  },
];

export const CERTIFICATIONS = [
  // NPTEL
  { 
    title: 'Human-Computer Interaction', 
    issuer: 'NPTEL | 2026', 
    url: '/assets/certificates/NPTEL - HCI.jpg', 
    score: '91% (Elite)',
    description: 'Completed advanced training in user-centered design, usability engineering, accessibility, and interactive system development with an Elite score of 91%.'
  },
  { 
    title: 'Oracle Cloud Infrastructure – AI Foundations Associate', 
    issuer: 'Oracle University | 2025', 
    url: '/assets/certificates/Oracle - AI Fundation Assoicate.jpg',
    description: 'Certified in AI fundamentals, machine learning, generative AI, and Oracle Cloud AI services.'
  },
  { 
    title: 'Introduction to Internet of Things (IoT)', 
    issuer: 'NPTEL – IIT Kharagpur | 2025', 
    url: '/assets/certificates/NPTEL - Introduction To Internet Of Things.jpg', 
    score: '77% (Elite)',
    description: 'Learned IoT architecture, smart devices, communication protocols, and embedded systems with Elite certification.'
  },
  { 
    title: 'Cloud Computing', 
    issuer: 'NPTEL – IIT Kharagpur | 2025', 
    url: '/assets/certificates/NPTEL - Cloud Computing.jpg', 
    score: '61% (Elite)',
    description: 'Gained knowledge in virtualization, distributed systems, cloud service models, and scalable computing concepts.'
  },
  { 
    title: 'Research / Internship', 
    issuer: 'Stanford University (Osman Labs) | 2025', 
    url: '/assets/certificates/Stanford - Osman labs.jpg',
    description: 'Contributed to global development research focused on measuring water service quality in developing countries.'
  },
  { 
    title: 'Introduction to Artificial Intelligence', 
    issuer: 'IBM | 2025', 
    url: '/assets/certificates/IBM - Introduction to AI.jpg',
    description: 'Completed foundational training in Artificial Intelligence concepts, applications, and machine learning basics.'
  },
  { 
    title: 'Journey to Cloud', 
    issuer: 'IBM | 2025', 
    url: '/assets/certificates/IBM - Journy to cloud.jpg',
    description: 'Learned cloud adoption strategies, enterprise cloud solutions, and architecture planning concepts.'
  },
  { 
    title: 'Machine Learning Using Python', 
    issuer: 'Simplilearn SkillUp | 2025', 
    url: '/assets/certificates/Simplilearn - Ml using Python.jpg',
    description: 'Completed practical training in Python-based machine learning, regression, and classification techniques.'
  },
  { 
    title: 'Data Science & Analytics', 
    issuer: 'HP LIFE | 2025', 
    url: '/assets/certificates/HP LIFE - Data Science & Analytics.jpg',
    description: 'Learned data analytics, business intelligence, and data-driven decision-making methodologies.'
  },
  { 
    title: 'AI Ascend 2026', 
    issuer: 'Saveetha Engineering College | 2026', 
    url: '/assets/certificates/SEC - AI Ascend 2026.png',
    description: 'Successfully completed an AI and cloud skill development program powered by Kyndryl and AWS.'
  },
  { 
    title: 'Social Media Marketing', 
    issuer: 'HP LIFE | 2025', 
    url: '/assets/certificates/HP LIFE - Social Media Marketing.jpg',
    description: 'Learned digital marketing strategies, audience targeting, online branding, and campaign management.'
  },
  { 
    title: 'Git & GitHub Certification', 
    issuer: 'Simplilearn SkillUp | 2025', 
    url: '/assets/certificates/Simplilearn - Git.jpg',
    description: 'Gained hands-on experience in Git version control, branching, repositories, and collaborative workflows.'
  },
  { 
    title: 'Introduction to Industry 4.0 & IIoT', 
    issuer: 'NPTEL – IIT Kharagpur | 2024', 
    url: '/assets/certificates/NPTEL - Introduction to Industry 4.0 and Industrial Internet of Things.jpg', 
    score: '66% (Elite)',
    description: 'Studied smart manufacturing, Industrial IoT, cyber-physical systems, and automation technologies.'
  },
  { 
    title: 'Student Member – ISTE', 
    issuer: 'ISTE | 2024 – 2027', 
    url: '/assets/certificates/ISTE - Membership.jpg',
    description: 'Recognized as a student member of ISTE for continuous technical learning and professional development.'
  }
];

export const EDUCATION_DATA = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'M. Kumarasamy College of Engineering',
    period: '2023 – 2027',
    details: [
      'Developed expertise in programming, web development, AI, and database management. Participated in college projects that demonstrate practical implementation of theoretical concepts.'
    ],
    score: 'CGPA: 7.8'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'P.A. Vidya Bhavan',
    period: '2023',
    details: [
      'Strong foundation in Mathematics, Physics, and Computer Science, forming the basis for higher education in IT.'
    ],
    score: 'Percentage: 86%'
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'P.A. Vidya Bhavan',
    period: '2021',
    details: [
      'Achieved solid academic results in foundational subjects, providing a base for critical thinking and problem-solving.'
    ],
    score: 'Status: Passed'
  }
];

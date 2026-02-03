import type { IconType } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
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

export const PROJECTS = [
  {
    title: 'AutoQuizzer',
    duration: '4 Months',
    subtitle: 'AI-Powered MCQ Generation Platform',
    tags: ['React.js', 'Node.js', 'Gemini API', 'NLP'],
    image: '/assets/Projects/AUTOQUIZZER.png',
    features: [
      'Automated MCQ generation using NLP & Gemini API.',
      'Integrated BART model for question synthesis.',
      'Impact: Improved quiz creation speed for educators by ~40%.',
    ],
    github: 'https://github.com/sujan-2095/AutoQuizzer',
    liveUrl: 'https://ai-quiz-generator-734185736539.us-west1.run.app/',
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
    title: 'Crime Record Management System',
    duration: '2.5 Months',
    subtitle: 'Full-Stack Web Application',
    tags: ['Python', 'Flask', 'SQLite', 'REST APIs'],
    image: '/assets/Projects/CRMS.png',
    features: [
      'Centralized digital management for police crime records.',
      'Replaced manual record-keeping with secure SQL database.',
      'Impact: Reduced data retrieval time and improved record accuracy.',
    ],
    github: 'https://github.com/sujan-2095/CRMS',
    liveUrl: 'https://crms-vs4n.onrender.com/',
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
    description: 'Awarded in recognition of engineering aptitude, innovation, and problem-solving skills, demonstrated through project-based work and active technical involvement.',
    certificateUrl: '/assets/certificates/Kalam.pdf',
    icon: 'Trophy' as IconType,
  },
  {
    title: 'IEEE International Conference Paper',
    issuer: 'ICECMSN 2025',
    description: 'Presented a research paper titled “AutoQuizzer: An AI Powered Application that Generates MCQs...” Strengthened understanding of research and technical writing.',
    certificateUrl: '/assets/certificates/ieee.pdf',
    icon: 'FileAlt' as IconType,
  },
];

export const CERTIFICATIONS = [
  { title: 'Oracle Cloud Infrastructure – AI Foundations Associate', issuer: 'Oracle University | 2025', url: '/assets/certificates/Oracle 1.pdf' },
  { title: 'Machine Learning Using Python', issuer: 'Simplilearn SkillUp | 2025', url: '/assets/certificates/Simplilearn Certificate.pdf' },
  { title: 'Data Science & Analytics', issuer: 'HP LIFE | 2025', url: '/assets/certificates/Data Science & Analytics.pdf' },
  { title: 'Social Media Marketing', issuer: 'HP LIFE | 2025', url: '/assets/certificates/Social Media Marketing.pdf' },
  { title: 'Introduction to Internet of Things (IoT)', issuer: 'NPTEL – IIT Kharagpur | 2025', url: '/assets/certificates/Introduction To Internet Of Things.pdf' },
  { title: 'Introduction to Industry 4.0 & IIoT', issuer: 'NPTEL – IIT Kharagpur | 2024', url: '/assets/certificates/Introduction to Industry 4.0 and Industrial Internet of Things .pdf' },
  { title: 'Cloud Computing', issuer: 'NPTEL – IIT Kharagpur | 2025', url: '/assets/certificates/Cloud Computing (4).pdf' },
  { title: 'Student Member – ISTE', issuer: 'ISTE | 2024 – 2027', url: '/assets/certificates/ISTE MEMBERSHIP.pdf' },
  { title: 'Git & GitHub Certification', issuer: 'Professional Certificate | 2025', url: '/assets/certificates/git.pdf' },
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

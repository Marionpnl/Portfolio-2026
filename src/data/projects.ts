import type { Project } from '../types/index';
import ninaImg from '../assets/images/nina-carducci.webp';
import portfolioImg from '../assets/images/mon-portfolio.webp';
import grimoireImg from '../assets/images/mon-vieux-grimoire.webp';
import kasaImg from '../assets/images/kasa.webp';
import bookiImg from '../assets/images/booki.webp';
import flowmindImg from '../assets/images/flowmind.webp';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'flowmind',
    year: 2026,
    category: 'fullstack',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'OpenAI API',
      'Tailwind CSS',
      'Zustand',
    ],
    githubUrl: 'https://github.com/Marionpnl/FlowMind',
    liveUrl: 'https://flow-mind-gamma.vercel.app/',
    image: flowmindImg,
  },
  {
    id: 2,
    slug: 'kasa',
    year: 2026,
    category: 'front end',
    stack: ['React', 'React Router', 'Sass'],
    githubUrl: 'https://github.com/Marionpnl/Kasa-React-app',
    liveUrl: 'https://kasa-react-app-theta.vercel.app/',
    image: kasaImg,
  },
  {
    id: 3,
    slug: 'monVieuxGrimoire',
    year: 2026,
    category: 'back end',
    stack: ['Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/Marionpnl/Backend-mon-vieux-grimoire',
    image: grimoireImg,
  },
  {
    id: 4,
    slug: 'portfolio',
    year: 2026,
    category: 'fullstack',
    stack: ['React', 'TypeScript', 'Tailwind v4'],
    githubUrl: 'https://github.com/Marionpnl/Portfolio-2026',
    image: portfolioImg,
  },
  {
    id: 5,
    slug: 'ninaCarducci',
    year: 2026,
    category: 'front end',
    stack: ['SEO/Performance', 'HTML'],
    githubUrl: 'https://github.com/Marionpnl/Nina-Carducci',
    liveUrl: 'https://nina-carducci.vercel.app',
    image: ninaImg,
  },
  {
    id: 6,
    slug: 'booki',
    year: 2025,
    category: 'front end',
    stack: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/Marionpnl/Booki',
    liveUrl: 'https://booki-gray.vercel.app/',
    image: bookiImg,
  },
];

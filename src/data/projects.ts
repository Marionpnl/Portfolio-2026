import type { Project } from '../types/index';
import ninaImg from '../assets/images/nina-carducci.png';
import portfolioImg from '../assets/images/mon-portfolio.png';
import grimoireImg from '../assets/images/mon-vieux-grimoire.png';
import kasaImg from '../assets/images/kasa.png';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'kasa',
    year: 2026,
    category: 'front end',
    stack: ['React', 'React Router', 'Sass'],
    githubUrl: 'https://github.com/Marionpnl/Kasa-React-app',
    liveUrl: 'https://kasa-react-app-theta.vercel.app/',
    image: kasaImg,
  },
  {
    id: 2,
    slug: 'monVieuxGrimoire',
    year: 2026,
    category: 'back end',
    stack: ['Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/Marionpnl/Backend-mon-vieux-grimoire',
    image: grimoireImg,
  },
  {
    id: 3,
    slug: 'portfolio',
    year: 2026,
    category: 'fullstack',
    stack: ['React', 'TypeScript', 'Tailwind v4'],
    githubUrl: 'https://github.com/Marionpnl/Portfolio-2026',
    image: portfolioImg,
  },
  {
    id: 4,
    slug: 'ninaCarducci',
    year: 2026,
    category: 'front end',
    stack: ['SEO', 'Performance', 'HTML/CSS'],
    githubUrl: 'https://github.com/Marionpnl/Nina-Carducci',
    liveUrl: 'https://nina-carducci.vercel.app',
    image: ninaImg,
  },
];

import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'kasa',
    year: 2026,
    category: 'front end',
    stack: ['React', 'React Router', 'Sass'],
    githubUrl: 'https://github.com/tonpseudo/kasa',
    liveUrl: 'https://kasa.vercel.app',
    image: '/images/kasa.png',
  },
  {
    id: 2,
    slug: 'monVieuxGrimoire',
    year: 2026,
    category: 'back end',
    stack: ['Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/tonpseudo/mon-vieux-grimoire',
    image: '/images/mon-vieux-grimoire.png',
  },
  {
    id: 3,
    slug: 'portfolio',
    year: 2026,
    category: 'fullstack',
    stack: ['React', 'TypeScript', 'Tailwind v4'],
    githubUrl: 'https://github.com/tonpseudo/portfolio',
    liveUrl: 'https://tonportfolio.vercel.app',
    image: '/images/portfolio.png',
  },
  {
    id: 4,
    slug: 'ninaCarducci',
    year: 2026,
    category: 'front end',
    stack: ['SEO', 'Performance', 'HTML/CSS'],
    githubUrl: 'https://github.com/tonpseudo/nina-carducci',
    liveUrl: 'https://nina-carducci.vercel.app',
    image: '/images/nina-carducci.png',
  },
];

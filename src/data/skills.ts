import {
  Code2,
  Monitor,
  RefreshCw,
  Zap,
  Users,
  ShieldCheck,
} from 'lucide-react';
import type { Skill, SoftSkill } from '../types';

export const hardSkills: Skill[] = [
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'Sass', icon: 'devicon-sass-original' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
  { name: 'Figma', icon: 'devicon-figma-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
];

export const softSkills: SoftSkill[] = [
  { key: 'dev', icon: Code2 },
  { key: 'responsive', icon: Monitor },
  { key: 'adapt', icon: RefreshCw },
  { key: 'perf', icon: Zap },
  { key: 'collab', icon: Users },
  { key: 'rigueur', icon: ShieldCheck },
];

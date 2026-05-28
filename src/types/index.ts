import type { LucideIcon } from 'lucide-react';
// ============================================
// PROJETS
// ============================================

export type ProjectCategory = 'front end' | 'back end' | 'fullstack';

// Un projet tel qu'il apparaît sur la card ET dans la modale
export interface Project {
  id: number;
  slug: string; // identifiant unique ex: "kasa", "nina-carducci"
  year: number; // ex: 2026
  category: ProjectCategory;
  stack: string[]; // ex: ["React", "React Router", "Sass"]
  githubUrl: string;
  liveUrl?: string; // optionnel — pas tous les projets ont un live
  image: string; // chemin vers l'image ex: "/images/kasa.png"
}

// ============================================
// COMPÉTENCES
// ============================================
export interface Skill {
  name: string; // ex: "React"
  icon: string; // nom de l'icône devicon ex: "devicon-react-original"
}

export interface SoftSkill {
  key: string; // ex: Clé pour i18n, ex: "Dev"
  icon: LucideIcon; // Composant Lucide React
}
// ============================================
// NAVIGATION
// ============================================
export interface NavLink {
  label: string; // clé i18n ex: "nav.about"
  href: string; // ancre ex: "#about"
}

// ============================================
// FORMULAIRE CONTACT
// ============================================
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// ============================================
// COMPOSANTS — PROPS
// ============================================
export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export interface BackToTopProps {
  isMenuOpen: boolean;
}
export interface ProjectCardProps {
  project: Project;
  isFeatured: boolean; // Ajouté pour gérer la grande carte asymétrique
  onClick: () => void;
  techIcons: Record<string, string>;
  categoryColors: Record<string, string>;
}

export interface ProjectModalProps {
  project: Project; // On passe le projet actif directement (la visibilité est gérée par le parent)
  onClose: () => void;
  techIcons: Record<string, string>;
}

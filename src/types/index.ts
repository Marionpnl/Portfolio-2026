// ============================================
// PROJETS
// ============================================

export type ProjectCategory = 'front end' | 'back end' | 'fullstack'

// Un projet tel qu'il apparaît sur la card ET dans la modale
export interface Project {
  id: number
  slug: string              // identifiant unique ex: "kasa", "nina-carducci"
  category: ProjectCategory
  stack: string[]           // ex: ["React", "React Router", "Sass"]
  githubUrl: string
  liveUrl?: string          // optionnel — pas tous les projets ont un live
  image: string             // chemin vers l'image ex: "/images/kasa.png"
}

// ============================================
// COMPÉTENCES
// ============================================
export interface Skill {
  name: string              // ex: "React"
  icon: string              // nom de l'icône devicon ex: "devicon-react-original"
}

// ============================================
// NAVIGATION
// ============================================
export interface NavLink {
  label: string             // clé i18n ex: "nav.about"
  href: string              // ancre ex: "#about"
}

// ============================================
// FORMULAIRE CONTACT
// ============================================
export interface ContactForm {
  name: string
  email: string
  message: string
}

// ============================================
// COMPOSANTS — PROPS
// ============================================
export interface ProjectCardProps {
  project: Project
  onClick: () => void       // ouvre la modale au clic
}
export interface ProjectModalProps {
  project: Project | null   // null = modale fermée
  onClose: () => void       // ferme la modale
}
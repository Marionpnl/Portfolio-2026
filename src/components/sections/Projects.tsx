import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import type { ProjectsProps } from '../../types';

// Dictionnaire pour lier les chaînes textuelles de la stack aux icônes Devicon
const techIcons: Record<string, string> = {
  React: 'devicon-react-original',
  'React Router': 'devicon-react-original',
  Sass: 'devicon-sass-original',
  'Node.js': 'devicon-nodejs-plain',
  MongoDB: 'devicon-mongodb-plain',
  Express: 'devicon-express-original',
  TypeScript: 'devicon-typescript-plain',
  'Tailwind v4': 'devicon-tailwindcss-plain',
  i18n: 'devicon-javascript-plain',
  'SEO/Performance': 'devicon-google-plain',
  HTML: 'devicon-html5-plain',
};

// Dictionnaire pour lier les catégories à leurs couleurs de label spécifiques
const categoryColors: Record<string, string> = {
  'front end': 'text-green',
  'back end': 'text-terra',
  fullstack: 'text-rose',
};

const Projects = ({ setIsModalOpen }: ProjectsProps) => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'front end' | 'back end' | 'fullstack'
  >('all');

  // State pour savoir quel projet est actuellement ouvert dans la modale
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleOpenModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true); // Dit à App.jsx de cacher la flèche
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false); // Dit à App.jsx de réafficher la flèche
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 px-6 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* EN-TÊTE & FILTRES */}
        <div className="flex flex-col lg:flex-row lg:items-end md:justify-between mb-12 gap-10">
          <div>
            <p className="text-black font-dm font-bold uppercase tracking-widest md:text-2xl mb-10">
              {t('projects.label')}
            </p>
            <h2 className="font-space text-2xl md:text-[40px] font-bold text-black tracking-tight">
              {t('projects.title')}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {(
              [
                { id: 'all', label: t('projects.filter_all') },
                { id: 'front end', label: t('projects.filter_frontend') },
                { id: 'back end', label: t('projects.filter_backend') },
                { id: 'fullstack', label: t('projects.filter_fullstack') },
              ] as const
            ).map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-3 md:px-7 py-2 rounded-full font-dm font-medium text-xs md:text-[16px] transition-all duration-300 shadow-[0_2px_5px_rgba(0,0,0,0.05)] ${
                  activeFilter === btn.id
                    ? 'bg-green text-white scale-105'
                    : 'bg-sage/30 text-black/70 hover:bg-sage/40'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLE DES PROJETS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && activeFilter === 'all';

            return (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={isFeatured}
                techIcons={techIcons}
                categoryColors={categoryColors}
                onClick={() => handleOpenModal(project)}
              />
            );
          })}
        </div>

        {/* MODALE DÉTAILLÉE */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            techIcons={techIcons}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;

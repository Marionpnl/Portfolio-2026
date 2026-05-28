import { useTranslation } from 'react-i18next';
import type { ProjectCardProps } from '../../types/index';

export const ProjectCard = ({
  project,
  isFeatured,
  onClick,
  techIcons,
  categoryColors,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className={`flex flex-col bg-cream border border-black/5 p-4 sm:p-6 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.01] cursor-pointer group ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      {/* ZONE IMAGE */}
      <div className="w-full bg-[#E5E9E6]/30 rounded-2xl p-6 flex items-center justify-center overflow-hidden border border-black/5 min-h-65 md:min-h-95">
        <img
          src={project.image}
          alt={project.slug}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
        />
      </div>

      {/* ZONE CONTENU */}
      <div
        className={`mt-6 flex flex-col gap-4 ${
          isFeatured
            ? 'md:flex-row md:items-center md:justify-between md:gap-12'
            : 'md:flex-col lg:justify-between'
        }`}
      >
        {/* TEXTES DE LA CARTE */}
        <div className="flex flex-col">
          <span
            className={`font-dm font-bold text-xs md:text-sm tracking-wider mb-1 uppercase ${
              categoryColors[project.category] || 'text-black'
            }`}
          >
            {t(`projects.${project.slug}.category`)}
          </span>
          <h3 className="font-space text-xl md:text-2xl font-bold text-black leading-tight mb-2">
            {t(`projects.${project.slug}.title`)}
          </h3>
          <p className="font-dm text-xs md:text-sm text-black/75 max-w-xl">
            {t(`projects.${project.slug}.card_description`)}
          </p>
        </div>

        {/* CHIPS TECHNOS */}
        <div
          className={`flex flex-wrap gap-2 shrink-0 ${
            isFeatured
              ? 'self-start md:self-end md:flex-row md:justify-end'
              : 'self-start'
          }`}
        >
          {project.stack.map((tech) => {
            const iconClass = techIcons[tech] || 'devicon-javascript-plain';
            return (
              <div
                key={tech}
                className="flex items-center gap-1.5 bg-cream shadow-[0_4px_4px_rgba(0,0,0,0.25)] border border-black/5 px-3 md:px-4 py-1.5 rounded-full"
              >
                <i className={`${iconClass} colored text-sm md:text-lg`} />
                <span className="font-dm font-medium text-xs md:text-sm text-black/80">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

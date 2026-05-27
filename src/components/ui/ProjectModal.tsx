import { useTranslation } from 'react-i18next';
import type { ProjectModalProps } from '../../types/index';

export const ProjectModal = ({
  project,
  onClose,
  techIcons,
}: ProjectModalProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-cream w-full max-w-4xl max-h-[90vh] rounded-3xl p-4 md:p-6 overflow-y-auto border border-black/10 shadow-2xl flex flex-col gap-4 md:gap-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* EN-TÊTE DU CONTENU : TITRE & META INFOS */}
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <h3 className="font-space text-3xl md:text-4xl font-bold text-black tracking-tight leading-none">
              {t(`projects.${project.slug}.title`)}
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-green/5 hover:bg-black/10 flex items-center justify-center text-black/60 transition-colors cursor-pointer"
              aria-label={t('projects.close')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* META : Année (Data) et Catégorie */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-1">
            <div className="flex items-center gap-2 text-black/60 font-dm text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_119_966)">
                  <path
                    d="M15.0001 3.33301H5.00008C3.15913 3.33301 1.66675 4.82539 1.66675 6.66634V14.9997C1.66675 16.8406 3.15913 18.333 5.00008 18.333H15.0001C16.841 18.333 18.3334 16.8406 18.3334 14.9997V6.66634C18.3334 4.82539 16.841 3.33301 15.0001 3.33301Z"
                    stroke="#1C1C1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66675 1.6665V4.99984M13.3334 1.6665V4.99984M1.66675 8.33317H18.3334"
                    stroke="#1C1C1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_966">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-medium text-xs md:text-sm text-black">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2 text-black/60 font-dm text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.41675 6.24984C5.41675 6.47085 5.50455 6.68281 5.66083 6.83909C5.81711 6.99537 6.02907 7.08317 6.25008 7.08317C6.4711 7.08317 6.68306 6.99537 6.83934 6.83909C6.99562 6.68281 7.08341 6.47085 7.08341 6.24984C7.08341 6.02882 6.99562 5.81686 6.83934 5.66058C6.68306 5.5043 6.4711 5.4165 6.25008 5.4165C6.02907 5.4165 5.81711 5.5043 5.66083 5.66058C5.50455 5.81686 5.41675 6.02882 5.41675 6.24984Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 5V9.31C2.50009 9.75199 2.67575 10.1758 2.98833 10.4883L9.41333 16.9133C9.78996 17.2899 10.3007 17.5015 10.8333 17.5015C11.3659 17.5015 11.8767 17.2899 12.2533 16.9133L16.9133 12.2533C17.2899 11.8767 17.5015 11.3659 17.5015 10.8333C17.5015 10.3007 17.2899 9.78996 16.9133 9.41333L10.4883 2.98833C10.1758 2.67575 9.75199 2.50009 9.31 2.5H5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="capitalize font-medium text-xs md:text-sm text-black">
                {project.category}
              </span>
            </div>
          </div>

          {/* PUCES TECHNOS */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => {
              const iconClass = techIcons[tech] || 'devicon-javascript-plain';
              return (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 bg-sage/10 border shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black/5 px-3 py-1 rounded-full"
                >
                  <i className={`${iconClass} colored text-xs md:text-lg`} />
                  <span className="font-dm text-xs md:text-sm text-black">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESCRIPTION : A PROPOS */}
        <div className="flex flex-col gap-2 mt-2">
          <h4 className="font-space font-bold text-lg md:text-2xl text-black">
            {t('projects.modal_about')}
          </h4>
          <p className="font-dm text-xs md:text-sm text-black/80 leading-relaxed">
            {t(`projects.${project.slug}.about`)}
          </p>
        </div>

        {/* GRILLE : DÉFIS VS SOLUTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div className="bg-sage/10 border border-green/5 p-5 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <h4 className="font-space font-bold text-sm md:text-base text-terra mb-4">
              {t('projects.modal_challenges')}
            </h4>
            <ul className="font-dm text-xs md:text-sm text-black/90 flex flex-col gap-3">
              {(
                (t(`projects.${project.slug}.challenges`, {
                  returnObjects: true,
                }) as string[]) || []
              ).map((challenge, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-terra mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-terra" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#E5E9E6]/40 border border-black/5 p-5 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <h4 className="font-space font-bold text-sm md:text-base text-green mb-4">
              {t('projects.modal_solutions')}
            </h4>
            <ul className="font-dm text-xs md:text-sm text-black/90 flex flex-col gap-3">
              {(
                (t(`projects.${project.slug}.solutions`, {
                  returnObjects: true,
                }) as string[]) || []
              ).map((solution, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-green mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-green" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="flex items-center justify-between border-t border-black/5 pt-6 mt-4">
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-dm font-medium text-xs md:text-sm text-white bg-green border border-green px-3 py-1 md:px-4 md:py-1.5 rounded-full hover:scale-105 transition-all shadow-md flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                {t('projects.see_live_site')}
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="font-dm font-medium text-xs md:text-sm text-black bg-white border border-black/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full hover:scale-105 transition-all shadow-sm flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64575 16.3209C4.1145 16.3771 4.46172 16.5917 4.68742 16.9646C5.027 17.524 6.28846 19.5959 7.72179 19.5959H9.89575M15.8041 15.9365C16.3756 16.6851 16.6614 17.3574 16.6614 17.9532V21.8751M10.802 16.0324C10.1978 16.6949 9.8961 17.3244 9.89679 17.9209V21.8751"
                  stroke="#1C1C1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8042 15.9366C17.0562 15.6761 18.1927 15.2261 19.075 14.5657C20.5833 13.4366 21.3542 11.6928 21.3542 9.97093C21.3542 8.76259 20.8958 7.63447 20.1 6.67926C19.6573 6.14697 20.9531 2.64593 19.8021 3.1803C18.651 3.71572 16.9635 4.42822 16.0792 4.16676C15.1323 3.8876 14.1 3.73343 13.0208 3.73343C12.0833 3.73343 11.1812 3.84905 10.3396 4.06364C9.11667 4.37405 7.94792 3.68551 6.77083 3.1803C5.59375 2.67614 6.23646 6.31364 5.88646 6.74489C5.12604 7.68759 4.6875 8.79176 4.6875 9.97093C4.6875 11.6928 5.61979 13.4366 7.12812 14.5647C8.13333 15.3168 9.39271 15.797 10.8021 16.0334"
                  stroke="#1C1C1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('projects.see_github')}
            </a>
          </div>

          <button
            onClick={onClose}
            className="font-space font-medium text-xs md:text-sm text-black hover:text-terra cursor-pointer transition-colors px-2 py-1"
          >
            {t('projects.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

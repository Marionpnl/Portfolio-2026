import { useTranslation } from 'react-i18next';
import { hardSkills, softSkills } from '../../data/skills';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-6 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* EN-TÊTE DE SECTION */}
        <div className="mb-12">
          <p className="text-black font-dm font-bold uppercase tracking-widest text-large md:text-2xl mb-15">
            {t('skills.label')}
          </p>
          <h2 className="font-space text-2xl md:text-[40px] font-bold text-black tracking-tight">
            {t('skills.title')}
          </h2>
        </div>

        {/* CONTENEUR GLOBAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* GRILLE GAUCHE : SOFT SKILLS (7 COLONNES) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:col-span-7 content-start">
            {softSkills.map((soft) => {
              const IconComponent = soft.icon;

              return (
                <div
                  key={soft.key}
                  className="w-full aspect-square bg-sage/20 border border-green/10 p-3 sm:p-5 rounded-[20px] flex flex-col gap-2 md:gap-4 transition-all duration-300 hover:bg-[#E5E9E6]/70 hover:scale-[1.02] mx-auto text-left overflow-hidden"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-sage/30 border-black/5 flex items-center justify-center text-green">
                    <IconComponent
                      size={18}
                      strokeWidth={1.8}
                      className="sm:scale-[1.33] transition-transform"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-space font-medium text-sm md:text-[16px] text-black">
                      {t(`skills.soft.${soft.key}.title`)}
                    </h3>
                    <p className="font-dm text-[10px] md:text-xs leading-relaxed text-black">
                      {t(`skills.soft.${soft.key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLONNE DROITE : HARD SKILLS + CV (5 COLONNES) */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-wrap gap-3 md:max-w-[330px]">
              {hardSkills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-cream border border-black/5 px-4 py-2.5 rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(45,74,62,0.06)] group"
                >
                  <i className={`${tech.icon} colored text-base shrink-0`} />
                  <span className="font-dm font-medium text-xs text-black">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/cv_marion_penel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Space_Grotesk'] font-medium text-sm text-black underline underline-offset-4 hover:text-terra transition-colors self-start mt-2"
            >
              {t('skills.text_CV')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

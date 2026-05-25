import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen bg-cream flex flex-col pt-32 md:pt-48 px-6 md:px-10"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* SÉQUENCE 1 : Tag & Titre (Effet Reveal automatique au chargement) */}
        <div className="animate-reveal">
          <p className="text-black font-dm font-medium tracking-widest text-xs md:text-sm mb-6">
            {t('hero.tag')}
          </p>

          <h1 className="font-space text-4xl md:text-[48px] font-bold text-black leading-[1.2] max-w-5xl mb-14 tracking-tight">
            <Trans
              i18nKey="hero.title"
              components={{
                sage: (
                  <span className="text-green relative inline-block animate-underline" />
                ),
              }}
            />
          </h1>
        </div>

        {/* SÉQUENCE 2 : Les deux CTA (Effet Pop-In déclenché après 1.2 seconde de délai) */}
        <div
          className="animate-pop opacity-0 flex sm:flex-row justify-center gap-5 items-start"
          style={{ animationDelay: '1200ms' }}
        >
          {/* Bouton Principal - Voir mes projets */}
          <a
            href="#projects"
            className="px-6 py-2.5 md:px-8 flex items-center justify-center bg-sage text-cream rounded-full font-dm font-bold text-sm md:text-[16px] text-center transition-all hover:bg-green hover:scale-105 active:scale-95 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            <span className="md:hidden">{t('hero.cta_projects_mobile')}</span>
            <span className="hidden md:inline">{t('hero.cta_projects')}</span>
          </a>

          {/* Bouton Secondaire - Me contacter */}
          <a
            href="#contact"
            className="px-6 py-2.5 md:px-8 flex items-center justify-center text-black rounded-full font-dm font-bold text-sm md:text-[16px] text-center transition-all hover:bg-terra hover:text-cream shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

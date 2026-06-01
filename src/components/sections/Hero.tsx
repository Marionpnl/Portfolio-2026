import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen bg-cream flex flex-col pt-20 md:pt-48 px-6 md:px-10"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Premier cercle flou (en bas à gauche) */}
        <div className="absolute bottom-0 -left-15 md:-bottom-10 md:-left-40 w-70 md:w-130 h-70 md:h-130 rounded-full bg-sage blur-[150px] md:blur-[220px]" />

        {/* Deuxième cercle flou (en haut à droite) */}
        <div className="absolute -top-20 -right-20 w-60 md:w-100 h-60 md:h-100 rounded-full bg-rose blur-[200px] md:blur-[280px]" />
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between md:mb-14">
        {/*Tag & Titre*/}
        <div className="animate-reveal">
          <p className="text-black font-dm font-medium tracking-widest text-xs md:text-sm mb-6">
            {t('hero.tag')}
          </p>

          <h1 className="font-space text-4xl md:text-[48px] font-bold text-black leading-[1.2] max-w-5xl mb-20 md:mb-14 tracking-tight">
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

        {/*Les deux CTA */}
        <div
          className="animate-pop opacity-0 flex sm:flex-row justify-center gap-5 items-start mb-14"
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
            className="px-6 py-2.5 md:px-8 flex items-center justify-center bg-cream text-black rounded-full font-dm font-bold text-sm md:text-[16px] text-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>
      {/* Bas de page Hero : Flèche centrale et Réseaux sociaux */}
      <div className="mt-8 md:mt-15 pt-10 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-0">
        {/* 1. Zone gauche invisible sur mobile, prend de la place sur desktop pour équilibrer */}
        <div className="hidden md:block md:w-1/3" />

        {/* 2. La Flèche qui rebondit (Pile au centre) */}
        <div className="flex justify-center md:w-1/3 order-1">
          <a
            href="#about" // Ajuste l'ID selon tes besoins
            className="text-black hover:text-green transition-colors duration-300 animate-bounce cursor-pointer"
            aria-label="Scroll down"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                d="M11.9999 5.25C12.1988 5.25 12.3896 5.32902 12.5302 5.46967C12.6709 5.61032 12.7499 5.80109 12.7499 6V16.19L16.4699 12.47C16.5386 12.3963 16.6214 12.3372 16.7134 12.2962C16.8054 12.2552 16.9047 12.2332 17.0054 12.2314C17.1061 12.2296 17.2061 12.2482 17.2995 12.2859C17.3929 12.3236 17.4777 12.3797 17.5489 12.451C17.6202 12.5222 17.6763 12.607 17.714 12.7004C17.7518 12.7938 17.7703 12.8938 17.7685 12.9945C17.7667 13.0952 17.7447 13.1945 17.7037 13.2865C17.6627 13.3785 17.6036 13.4613 17.5299 13.53L12.5299 18.53C12.3893 18.6705 12.1987 18.7493 11.9999 18.7493C11.8012 18.7493 11.6105 18.6705 11.4699 18.53L6.46991 13.53C6.39622 13.4613 6.33712 13.3785 6.29613 13.2865C6.25514 13.1945 6.23309 13.0952 6.23132 12.9945C6.22954 12.8938 6.24807 12.7938 6.28579 12.7004C6.32351 12.607 6.37965 12.5222 6.45087 12.451C6.52209 12.3797 6.60692 12.3236 6.70031 12.2859C6.7937 12.2482 6.89373 12.2296 6.99443 12.2314C7.09513 12.2332 7.19445 12.2552 7.28645 12.2962C7.37845 12.3372 7.46125 12.3963 7.52991 12.47L11.2499 16.19V6C11.2499 5.80109 11.3289 5.61032 11.4696 5.46967C11.6102 5.32902 11.801 5.25 11.9999 5.25Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* 3. Les réseaux sociaux */}
        <div className="flex flex-row justify-center items-center gap-1 md:gap-3 md:w-1/3 md:justify-end order-2">
          <span className="text-xs tracking-widest md:text-sm text-[#1C1C1A] whitespace-nowrap">
            {t('hero.text1')}
          </span>
          <div className="flex items-center">
            {/* GitHub */}
            <a
              href="https://github.com/Marionpnl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full text-black hover:bg-green/50 hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-5 md:h-5"
              >
                <path
                  d="M2.1875 9.79251C2.46875 9.82626 2.67708 9.95501 2.8125 10.1788C3.01625 10.5144 3.77313 11.7575 4.63313 11.7575H5.9375M9.4825 9.56189C9.82542 10.0111 9.99687 10.4144 9.99687 10.7719V13.125M6.48125 9.61939C6.11875 10.0169 5.93771 10.3946 5.93813 10.7525V13.125"
                  stroke="#1C1C1A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.4825 9.56193C10.2337 9.40568 10.9156 9.13568 11.445 8.73943C12.35 8.06193 12.8125 7.01568 12.8125 5.98256C12.8125 5.25756 12.5375 4.58068 12.06 4.00756C11.7944 3.68818 12.5719 1.58756 11.8813 1.90818C11.1906 2.22943 10.1781 2.65693 9.6475 2.50006C9.07937 2.33256 8.46 2.24006 7.8125 2.24006C7.25 2.24006 6.70875 2.30943 6.20375 2.43818C5.47 2.62443 4.76875 2.21131 4.0625 1.90818C3.35625 1.60568 3.74188 3.78818 3.53188 4.04693C3.07563 4.61256 2.8125 5.27506 2.8125 5.98256C2.8125 7.01568 3.37187 8.06193 4.27687 8.73881C4.88 9.19006 5.63562 9.47818 6.48125 9.62006"
                  stroke="#1C1C1A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/marion-penel-bb2a383a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full text-black hover:bg-green/50 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-5 md:h-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.125 0.78125C2.66916 0.78125 2.23199 0.962332 1.90966 1.28466C1.58733 1.60699 1.40625 2.04416 1.40625 2.5C1.40625 2.95584 1.58733 3.39301 1.90966 3.71534C2.23199 4.03767 2.66916 4.21875 3.125 4.21875C3.58084 4.21875 4.01801 4.03767 4.34034 3.71534C4.66267 3.39301 4.84375 2.95584 4.84375 2.5C4.84375 2.04416 4.66267 1.60699 4.34034 1.28466C4.01801 0.962332 3.58084 0.78125 3.125 0.78125ZM2.34375 2.5C2.34375 2.2928 2.42606 2.09409 2.57257 1.94757C2.71909 1.80106 2.9178 1.71875 3.125 1.71875C3.3322 1.71875 3.53091 1.80106 3.67743 1.94757C3.82394 2.09409 3.90625 2.2928 3.90625 2.5C3.90625 2.7072 3.82394 2.90591 3.67743 3.05243C3.53091 3.19894 3.3322 3.28125 3.125 3.28125C2.9178 3.28125 2.71909 3.19894 2.57257 3.05243C2.42606 2.90591 2.34375 2.7072 2.34375 2.5ZM1.40625 5C1.40625 4.87568 1.45564 4.75645 1.54354 4.66854C1.63145 4.58064 1.75068 4.53125 1.875 4.53125H4.375C4.49932 4.53125 4.61855 4.58064 4.70646 4.66854C4.79436 4.75645 4.84375 4.87568 4.84375 5V13.125C4.84375 13.2493 4.79436 13.3685 4.70646 13.4565C4.61855 13.5444 4.49932 13.5938 4.375 13.5938H1.875C1.75068 13.5938 1.63145 13.5444 1.54354 13.4565C1.45564 13.3685 1.40625 13.2493 1.40625 13.125V5ZM2.34375 5.46875V12.6562H3.90625V5.46875H2.34375ZM5.78125 5C5.78125 4.87568 5.83064 4.75645 5.91854 4.66854C6.00645 4.58064 6.12568 4.53125 6.25 4.53125H8.75C8.87432 4.53125 8.99355 4.58064 9.08146 4.66854C9.16936 4.75645 9.21875 4.87568 9.21875 5V5.27125L9.49063 5.15437C9.95941 4.95413 10.4567 4.82864 10.9644 4.7825C12.6987 4.625 14.2188 5.9875 14.2188 7.7375V13.125C14.2188 13.2493 14.1694 13.3685 14.0815 13.4565C13.9935 13.5444 13.8743 13.5938 13.75 13.5938H11.25C11.1257 13.5938 11.0065 13.5444 10.9185 13.4565C10.8306 13.3685 10.7812 13.2493 10.7812 13.125V8.75C10.7812 8.5428 10.6989 8.34409 10.5524 8.19757C10.4059 8.05106 10.2072 7.96875 10 7.96875C9.7928 7.96875 9.59409 8.05106 9.44757 8.19757C9.30106 8.34409 9.21875 8.5428 9.21875 8.75V13.125C9.21875 13.2493 9.16936 13.3685 9.08146 13.4565C8.99355 13.5444 8.87432 13.5938 8.75 13.5938H6.25C6.12568 13.5938 6.00645 13.5444 5.91854 13.4565C5.83064 13.3685 5.78125 13.2493 5.78125 13.125V5ZM6.71875 5.46875V12.6562H8.28125V8.75C8.28125 8.29416 8.46233 7.85699 8.78466 7.53466C9.10699 7.21233 9.54416 7.03125 10 7.03125C10.4558 7.03125 10.893 7.21233 11.2153 7.53466C11.5377 7.85699 11.7188 8.29416 11.7188 8.75V12.6562H13.2812V7.7375C13.2812 6.5475 12.2431 5.6075 11.05 5.71625C10.6401 5.75344 10.2385 5.85467 9.86 6.01625L8.935 6.41312C8.86365 6.44377 8.78581 6.45621 8.70847 6.44933C8.63113 6.44245 8.5567 6.41647 8.49189 6.37371C8.42707 6.33095 8.37389 6.27277 8.33712 6.20437C8.30036 6.13598 8.28116 6.05952 8.28125 5.98188V5.46875H6.71875Z"
                  fill="#1C1C1A"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

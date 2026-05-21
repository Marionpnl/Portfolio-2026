import { useTranslation } from 'react-i18next';

type Lang = 'fr' | 'en';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggle = (lang: Lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex bg-black/10 rounded-full p-0.5 md:p-1 gap-0.5 md:gap-1">
      {(['fr', 'en'] as Lang[]).map((lang) => (
        <button
          key={lang}
          onClick={() => toggle(lang)}
          className={`
            px-2.5 py-0.5 md:px-4 md:py-1 rounded-full text-[10px] md:text-xs font-medium uppercase transition-all duration-200
            ${
              i18n.language === lang
                ? 'bg-white text-black shadow-sm'
                : 'bg-transparent text-black/40 hover:text-black'
            }
          `}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

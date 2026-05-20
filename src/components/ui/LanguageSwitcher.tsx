import { useTranslation } from 'react-i18next'

type Lang = 'fr' | 'en'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const toggle = (lang: Lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex bg-black/10 rounded-full p-1 gap-1">
      {(['fr', 'en'] as Lang[]).map((lang) => (
        <button
          key={lang}
          onClick={() => toggle(lang)}
          className={`
            px-4 py-1 rounded-full text-xs font-medium uppercase transition-all duration-200
            ${i18n.language === lang
              ? 'bg-white text-[#1C1C1A] shadow-sm'
              : 'bg-transparent text-[#1C1C1A]/40 hover:text-[#1C1C1A]'
            }
          `}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
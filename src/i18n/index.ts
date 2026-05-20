import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './fr.json'
import en from './en.json'

i18n
  .use(initReactI18next) // connecte i18next à React
  .init({
    resources: {
      fr: { translation: fr }, // charge le fichier fr.json
      en: { translation: en }, // charge le fichier en.json
    },
    lng: 'fr',            // langue par défaut au chargement
    fallbackLng: 'fr',    // si une clé manque en EN, affiche le FR
    interpolation: {
      escapeValue: false  // React gère déjà la sécurité XSS
    },
  })

export default i18n
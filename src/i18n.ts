import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

// Initialize i18n
i18n
  .use(initReactI18next) // Connect i18n with React
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the current language is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;

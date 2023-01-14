import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextHttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const init18n = () =>
  i18n
    .use(i18nextHttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: process.env.NODE_ENV !== 'production',
      load: 'languageOnly',
      fallbackLng: false,
      detection: {
        order: ['querystring', 'navigator', 'htmlTag', 'localStorage', 'cookie', 'path', 'subdomain'],
        lookupQuerystring: 'locale',
      },
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      backend: {
        loadPath: `${__webpack_public_path__}assets/locales/{{lng}}.json`
      },
    });

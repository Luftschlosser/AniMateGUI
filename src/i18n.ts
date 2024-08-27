import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const isProduction = process.env.NODE_ENV === 'production';

const locizeOptions = {
  projectId: process.env.REACT_APP_LOCIZE_PROJECTID as string,
  apiKey: process.env.REACT_APP_LOCIZE_APIKEY as string, // YOU should not expose your apps API key to production!!!
  referenceLng: process.env.REACT_APP_LOCIZE_REFLNG as string,
  version: process.env.REACT_APP_LOCIZE_VERSION as string,
};

// TODO:  https://locize.com/blog/react-i18next

i18n
  // locize-editor
  // InContext Editor of locize
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      // format: (value, format, lng) => { // legacy usage
      //   if (value instanceof Date) {
      //     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
      //   }
      //   return value;
      // }
    },
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    saveMissing: !isProduction, // you should not use saveMissing in production
  });

export default i18n;

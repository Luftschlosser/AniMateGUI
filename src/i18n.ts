import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const defaultNS = 'translation';

i18next.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
  debug: true,
  fallbackLng: 'de',
  defaultNS,
});

export default i18next;

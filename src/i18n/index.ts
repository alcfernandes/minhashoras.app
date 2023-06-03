import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import common_en from './locales/en/common_en.json';
import common_ptBR from './locales/pt-br/common_ptBR.json';
import auth_en from './locales/en/auth_en.json';
import auth_ptBR from './locales/pt-br/auth_ptBR.json';

const resources = {
  en: { common: common_en, auth: auth_en },
  'pt-BR': { common: common_ptBR, auth: auth_ptBR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
    defaultNS: 'common',
  });

export default i18n;

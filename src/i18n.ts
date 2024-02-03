import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'

import globalEn from './i18n/global.en.json'
import globalEs from './i18n/global.es.json'
import globalFr from './i18n/global.fr.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ...globalEn
      },
      es: {
        ...globalEs
      },
      fr: {
        ...globalFr
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  })

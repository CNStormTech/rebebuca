import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ENtranslation from './locales/en/translation.json'
import zhCNtranslation from './locales/zh-CN/translation.json'

i18n.use(initReactI18next).init({
  // debug: process.env.NODE_ENV === 'development',
  resources: {
    en: {
      translation: ENtranslation
    },
    ch: {
      translation: zhCNtranslation
    }
  },
  lng: 'ch'
  // lng: localStorage.getItem('language') || 'en', // if you're using a language detector, do not define the lng option
  // fallbackLng: 'en',

  // interpolation: {
  //   escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  // },
})

// export const t = i18n.t

// export default i18n

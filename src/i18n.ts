import i18n, { InitOptions } from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { useLanguage } from './helpers/language';

const i18nConfig: InitOptions  = {
    fallbackLng: useLanguage,
    debug: true,
    detection: {
        order: ['queryString', 'cookie']
    },
    cache: ['cookie'],
    interpolation: {
        escapeValue: false
    }
}

i18n
    .use(Backend) 
    .use(LanguageDetector)
    .use (initReactI18next)
    .init(i18nConfig)

export default i18n;
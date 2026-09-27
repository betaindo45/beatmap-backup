import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'
import ja from './locales/ja.json'
import id from './locales/id.json'
import { FRONTEND_DEFAULTS, STORAGE_KEYS } from '../../../config/frontendConstants'

export const languageNames = {
  en: 'English',
  vi: 'Tiếng Việt',
  ja: '日本語',
  id: 'Bahasa Indonesia'
} as const

export const languageFlags = {
  en: 'gb',
  vi: 'vn',
  ja: 'jp',
  id: 'id'
} as const

export type LanguageCode = keyof typeof languageNames

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: localStorage.getItem(STORAGE_KEYS.LOCALE) || FRONTEND_DEFAULTS.LOCALE, // Default language
  fallbackLocale: FRONTEND_DEFAULTS.LOCALE, // Fallback language
  messages: {
    en,
    vi,
    ja,
    id
  }
})

export default i18n

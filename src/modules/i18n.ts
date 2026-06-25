import type { UserModule } from '~/types'
import { createI18n } from 'vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
export const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.{yml,yaml}', { eager: true }),
  )
    .map(([key, value]) => {
      // '../../locales/en.yml' -> 'en'
      const locale = key.slice(key.lastIndexOf('/') + 1).replace(/\.ya?ml$/, '')
      return [locale, value.default]
    }),
)

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    messages,
  })

  app.use(i18n)
}

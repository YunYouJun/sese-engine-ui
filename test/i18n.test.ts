import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import { messages } from '~/modules/i18n'

// Regression guard for the i18n message loading.
//
// The locale files are loaded through `import.meta.glob` in
// `src/modules/i18n.ts`. A wrong glob pattern silently resolves to an empty
// object, which makes `t()` return the raw key (e.g. `sese.title`) everywhere
// while the build still succeeds. These tests fail in that scenario.
describe('i18n messages', () => {
  it('loads every locale file via glob', () => {
    const locales = Object.keys(messages)
    expect(locales).toContain('en')
    expect(locales).toContain('zh-CN')
  })

  it('resolves keys to real translations instead of leaking the key', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'zh-CN',
      fallbackLocale: 'en',
      messages,
    })
    const { t } = i18n.global

    // default locale (zh-CN)
    expect(t('sese.title')).toBe('Sese 搜索')
    expect(t('button.toggle_langs')).toBe('切换语言')
    expect(t('placeholder.search')).toBe('搜索')
    expect(t('sese.title')).not.toBe('sese.title')

    // switching locale resolves the English messages
    i18n.global.locale.value = 'en'
    expect(t('sese.title')).toBe('Sese Search')
    expect(t('button.toggle_langs')).toBe('Change languages')
  })
})

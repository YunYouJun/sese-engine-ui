import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Shiki from '@shikijs/markdown-it'
import { unheadVueComposablesImports } from '@unhead/vue'
import Vue from '@vitejs/plugin-vue'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Inspect from 'vite-plugin-inspect'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts-next'
import { defineConfig } from 'vitest/config'

const markdownWrapperClasses = 'markdown-body max-w-800px prose prose-sm m-auto text-left'
const externalLinkPattern = /^https?:\/\//

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/nirtamir2/vite-plugin-vue-layouts-next
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        unheadVueComposablesImports,
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['src/components', '.'],
      deep: false,

      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/unplugin/unplugin-vue-markdown
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      async markdownItSetup(md) {
        // https://shiki.style/
        md.use(await Shiki({
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
          defaultColor: false,
        }))
        md.use(LinkAttributes, {
          pattern: externalLinkPattern,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // remove pwa

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'ofetch',
      'vue-toastification',
    ],
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts', 'src/**/*.test.ts'],
    environment: 'jsdom',
    globals: true,
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})

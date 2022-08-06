// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import type { UserModule } from './types'
import App from './App.vue'

import '@unocss/reset/tailwind.css'

import './styles/vars.scss'
// your custom styles here
import 'star-markdown-css/src/scss/theme/yun.scss'
import './styles/main.scss'
import './styles/scrollbar.scss'

import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)

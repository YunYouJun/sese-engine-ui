import Toast from 'vue-toastification'
import type { UserModule } from '~/types'

import 'vue-toastification/dist/index.css'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return

  // register toast, and use it by useToast
  app.use(Toast)
}

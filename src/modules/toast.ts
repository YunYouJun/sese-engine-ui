import type { UserModule } from '~/types'
import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'

export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return

  // register toast, and use it by useToast
  app.use(Toast)
}

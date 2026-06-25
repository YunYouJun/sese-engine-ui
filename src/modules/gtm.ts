import type { UserModule } from '~/types'
import { createGtm } from '@gtm-support/vue-gtm'

export const install: UserModule = ({ app }) => {
  // add google tag manager, and add GA4 in gtag
  app.use(createGtm({ id: 'GTM-PFF9NPT' }))
}

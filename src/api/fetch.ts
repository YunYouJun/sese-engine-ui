
import { $fetch } from 'ohmyfetch'

import { useToast } from 'vue-toastification'

export const apiFetch = $fetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  async onRequestError({ error }) {
    const toast = useToast()
    toast(error.message)
  },
})

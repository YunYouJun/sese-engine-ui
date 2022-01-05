
import { $fetch } from 'ohmyfetch'

export const apiFetch = $fetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  async onRequestError({ error }) {
    const { useToast } = await import('vue-toastification')
    const toast = useToast()
    toast(error.message)
  },
})


import { $fetch } from 'ohmyfetch'

export const apiFetch = $fetch.create({
  baseURL: import.meta.env.VITE_API_URL,
})

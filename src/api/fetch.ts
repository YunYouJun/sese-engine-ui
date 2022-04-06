import { $fetch } from 'ohmyfetch'

export const apiFetch = $fetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  retry: 0,
  async onResponseError({ response }) {
    const { useToast } = await import('vue-toastification')
    const toast = useToast()
    toast.error(`${response.status} ${response.statusText}`)
    if (response._data)
      toast.error(response._data['信息'])
  },
})

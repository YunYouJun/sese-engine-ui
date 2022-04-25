import { $fetch } from 'ohmyfetch'

export const apiFetch = $fetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  retry: 0,
  async onResponse({ response }) {
    const { useToast } = await import('vue-toastification')
    const toast = useToast()
    if (typeof response._data === 'string')
      toast.error('坏了！服务器坏了！快去打莉沫酱！')
  },
  async onResponseError({ response }) {
    const { useToast } = await import('vue-toastification')
    const toast = useToast()
    toast.error(`${response.status} ${response.statusText}`)
    if (response._data)
      toast.error(response._data['信息'])
  },
})

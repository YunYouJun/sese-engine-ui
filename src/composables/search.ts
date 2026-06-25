import { useSearchStore } from '~/stores/search'

export function useEnter() {
  const search = useSearchStore()
  const router = useRouter()

  return {
    enter(keyword: string) {
      if (keyword) {
        search.setNewKeyword(keyword)
        router.push(`/search?q=${encodeURIComponent(keyword)}`)
      }
    },
  }
}

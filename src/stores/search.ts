import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const savedKeyword = ref('')
  const previousKeywords = ref(new Set<string>())

  const usedKeywords = computed(() => Array.from(previousKeywords.value))
  const otherKeywords = computed(() => usedKeywords.value.filter(name => name !== savedKeyword.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewKeyword(name: string) {
    if (savedKeyword.value)
      previousKeywords.value.add(savedKeyword.value)

    savedKeyword.value = name
  }

  return {
    setNewKeyword,
    otherKeywords,
    savedKeyword,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))

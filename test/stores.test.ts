import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useSearchStore } from '~/stores/search'
import { useUserStore } from '~/stores/user'

describe('search store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts empty', () => {
    const store = useSearchStore()
    expect(store.savedKeyword).toBe('')
    expect(store.otherKeywords).toEqual([])
    expect(store.isLoading).toBe(false)
  })

  it('does not record the initial empty keyword as history', () => {
    const store = useSearchStore()
    store.setNewKeyword('cat')
    expect(store.savedKeyword).toBe('cat')
    expect(store.otherKeywords).toEqual([])
  })

  it('keeps previously used keywords, excluding the current one', () => {
    const store = useSearchStore()
    store.setNewKeyword('cat')
    store.setNewKeyword('dog')

    expect(store.savedKeyword).toBe('dog')
    expect(store.otherKeywords).toContain('cat')
    expect(store.otherKeywords).not.toContain('dog')
  })

  it('deduplicates history when switching back to a former keyword', () => {
    const store = useSearchStore()
    store.setNewKeyword('cat')
    store.setNewKeyword('dog')
    store.setNewKeyword('cat')

    expect(store.savedKeyword).toBe('cat')
    expect(store.otherKeywords).toEqual(['dog'])
  })

  it('toggles the loading flag', () => {
    const store = useSearchStore()
    expect(store.isLoading).toBe(false)
    store.toggleLoading()
    expect(store.isLoading).toBe(true)
    store.toggleLoading()
    expect(store.isLoading).toBe(false)
  })
})

describe('user store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts empty', () => {
    const store = useUserStore()
    expect(store.savedName).toBe('')
    expect(store.otherNames).toEqual([])
  })

  it('keeps previously used names, excluding the current one', () => {
    const store = useUserStore()
    store.setNewName('rimo')
    store.setNewName('yun')

    expect(store.savedName).toBe('yun')
    expect(store.otherNames).toContain('rimo')
    expect(store.otherNames).not.toContain('yun')
  })
})

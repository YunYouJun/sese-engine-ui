import { apiFetch } from './fetch'

interface SearchParams {
  q: string
  slice: string
}

export async function search(params: Partial<SearchParams>) {
  const searchParams: {
    q: string
    slice?: string
  } = {
    q: params.q || '',
    slice: params.slice || '0:10',
  }
  const data = await apiFetch('/search', {
    params: searchParams,
  })
  return data
}
